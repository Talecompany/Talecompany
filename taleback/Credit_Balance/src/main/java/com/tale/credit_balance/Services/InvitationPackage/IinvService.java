package com.tale.credit_balance.Services.InvitationPackage;

import com.tale.credit_balance.HR_Entities.Contact;

import javax.mail.MessagingException;
import java.io.IOException;

public interface IinvService {

    void Accept(int id) throws MessagingException;

    void Reject(int id) throws MessagingException;
}
