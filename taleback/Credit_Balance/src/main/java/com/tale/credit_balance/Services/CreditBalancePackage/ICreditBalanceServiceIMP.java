package com.tale.credit_balance.Services.CreditBalancePackage;

import com.tale.credit_balance.HR_Entities.CreditBalance;
import com.tale.credit_balance.HR_Entities.User;
import com.tale.credit_balance.Repositories.CreditBalanceRepository;
import com.tale.credit_balance.Repositories.UserRepository;
import com.tale.credit_balance.Services.EmailSender;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;


import javax.mail.MessagingException;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class ICreditBalanceServiceIMP implements ICreditBalanceService {
    private final CreditBalanceRepository creditBalanceRepository;
    private final UserRepository userRepository;

    EmailSender emailSender;

    private final SimpMessagingTemplate messagingTemplate;


    @Override
    public CreditBalance addCurr(CreditBalance creditBalance) throws IOException {

        return creditBalanceRepository.save(creditBalance);
    }
    @Override
    public BigDecimal retrieveCreditBalance(long id)  {

        CreditBalance creditBalance = creditBalanceRepository.findByUserId(id);
        BigDecimal balance = creditBalance.getBalance();
        return balance;
    }
    @Override
    public String retrievecurrency(long id)  {

        CreditBalance creditBalance = creditBalanceRepository.findByUserId(id);
        String currency = creditBalance.getCurrency();
        return currency;
    }
//    @Scheduled(fixedRate = 5000)
//    public void mm() throws MessagingException, jakarta.mail.MessagingException {
//        List<User> users = userRepository.findAll();
//        for(User u:users)
//        {
//            emailSender.sendEmail(u.getEmail(),u," successfully processed. <h4>\nCongratulation, We inform you very carefully that your complaint has been accepted. \n<h4>");
//            // Notify clients through WebSocket
//
//            // Notify frontend
//            notifyFrontend(u.getId_User());
//        }
//    }
    private void notifyFrontend(int userId) {
        // Utilisez SimpMessagingTemplate pour envoyer un message à un endpoint spécifique sur le frontend
        messagingTemplate.convertAndSendToUser(String.valueOf(userId), "/topic/notification", "New notification");
    }

}