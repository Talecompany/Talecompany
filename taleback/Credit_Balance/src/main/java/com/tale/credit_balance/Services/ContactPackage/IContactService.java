package com.tale.credit_balance.Services.ContactPackage;

import com.tale.credit_balance.HR_Entities.Contact;
import com.tale.credit_balance.HR_Entities.CreditBalance;

import java.io.IOException;

public interface IContactService {

    Contact addContact(Contact contact) throws IOException;
}
