package com.tale.credit_balance.RestControllers.HR_Controllers;


import com.tale.credit_balance.Services.CreditBalancePackage.CurrencyConversionService;
import com.tale.credit_balance.Services.CreditBalancePackage.ICreditBalanceService;
import com.tale.credit_balance.Services.CreditBalancePackage.ICreditBalanceServiceIMP;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/CreditBalance")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CreditBalanceController {

    private final ICreditBalanceServiceIMP iCreditBalanceServiceIMP;

//    @Autowired
    private CurrencyConversionService currencyConversionService;

//
//    @GetMapping("retrieveCB/{userid}")
//    public BigDecimal retrieveCB(@PathVariable int userid){
//        return iCreditBalanceServiceIMP.retrieveCreditBalance(userid);
//    }

    @GetMapping("/balance/{userId}")
    public ResponseEntity<BigDecimal> getCreditBalance(
            @PathVariable Long userId,
            @RequestParam String targetCurrency) {
        // Logique pour récupérer le solde de crédit du service
        BigDecimal balanceInLocaleCurrency = currencyConversionService.convertToLocaleCurrency(userId, targetCurrency);

        // Retourner le solde de crédit converti
        return new ResponseEntity<>(balanceInLocaleCurrency, HttpStatus.OK);
    }
}
