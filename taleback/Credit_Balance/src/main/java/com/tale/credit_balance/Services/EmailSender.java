package com.tale.credit_balance.Services;

import com.tale.credit_balance.HR_Entities.User;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import com.tale.credit_balance.Utils.MailUtil;

import javax.mail.*;
import java.util.Properties;

@Component
public class EmailSender {
    public void sendEmail(String recipientEmail, User user, String Etat) throws MessagingException, jakarta.mail.MessagingException {
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.user", "hamda.yedes@gmail.com");
        props.put("mail.smtp.password", "tubwhicypfahosoz");

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setJavaMailProperties(props);
        mailSender.setUsername("hamda.yedes@gmail.com");
        mailSender.setPassword("tubwhicypfahosoz");

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(recipientEmail);
        helper.setSubject("Mm/Mr " + user.getNom() + " Regular Reminder!");
        helper.setText(MailUtil.htmlMailExemple(user,Etat),true);

        mailSender.send(message);
    }
}

//
//import javax.mail.internet.MimeMessage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Component;
//import tn.esprit.atomslab.Utils.MailUtil;
//
//@Component
//public class EmailSender {
//
//    @Autowired
//    private JavaMailSender javaMailSender;
//
//    public void sendEmail(String recipientEmail, String subject, String messageText) throws Exception {
//        MimeMessage message = javaMailSender.createMimeMessage();
//        MimeMessageHelper helper = new MimeMessageHelper(message, true);
//
//        helper.setFrom("hamda.yedes@gmail.com");
//        helper.setTo(recipientEmail);
//        helper.setSubject("Registration Confirmed");
//        helper.setText(messageText, true);
//        helper.setText(MailUtil.htmlMailExemple(),true);
//        javaMailSender.send(message);
//    }
//}
