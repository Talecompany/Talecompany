package com.tale.credit_balance.Services.ContactPackage;

import com.tale.credit_balance.HR_Entities.Contact;
import com.tale.credit_balance.Repositories.ContactRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Slf4j
@Service
@AllArgsConstructor
public class IContactServiceIMP implements IContactService {

    private final ContactRepository contactRepository;

    @Override
    public Contact addContact(Contact contact) throws IOException {

        return contactRepository.save(contact);
    }
}
