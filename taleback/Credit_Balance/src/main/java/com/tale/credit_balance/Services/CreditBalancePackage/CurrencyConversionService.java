package com.tale.credit_balance.Services.CreditBalancePackage;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class CurrencyConversionService {

    @Autowired
    private ICreditBalanceServiceIMP creditBalanceService;

    @Value("${currency.api.url}")
    private String currencyApiUrl;

    @Value("${currency.api.key}")
    private String currencyApiKey;

    private final RestTemplate restTemplate;

    public CurrencyConversionService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public BigDecimal convertToLocaleCurrency(long userId, String targetCurrency) {
        // Récupérer le solde de crédit depuis la base de données
        BigDecimal userBalance = creditBalanceService.retrieveCreditBalance(userId);
        String currency = creditBalanceService.retrievecurrency(userId);

        // Construire l'URL pour l'API de conversion de devise
        String apiUrl = String.format("%s?apikey=%s&currencies=%s&base_currency=%s", currencyApiUrl, currencyApiKey, targetCurrency, currency);

        // Effectuer la requête à l'API externe
        Map<String, Object> response = restTemplate.getForObject(apiUrl, HashMap.class);

        // Extraire le taux de conversion correctement
        BigDecimal conversionRate = BigDecimal.ZERO;  // Valeur par défaut si la clé n'est pas trouvée
        Map<String, Object> data = (Map<String, Object>) response.get("data");
        if (data != null) {
            Map<String, Object> targetCurrencyData = (Map<String, Object>) data.get(targetCurrency);
            if (targetCurrencyData != null) {
                Object value = targetCurrencyData.get("value");
                if (value != null) {
                    conversionRate = new BigDecimal(value.toString());
                }
            }
        }

        log.info("balance = {}", userBalance);
        log.info("API Response: {}", response);
        log.info("conversionRate: {}", conversionRate);

        // Convertir le solde de crédit dans la devise locale
        return userBalance.multiply(conversionRate);
    }
}

