package com.tale.credit_balance.RestControllers.HR_Controllers;

import com.tale.credit_balance.HR_Entities.Contact;
import com.tale.credit_balance.Services.ContactPackage.IContactService;
import com.tale.credit_balance.Services.ContactPackage.IContactServiceIMP;
import com.tale.credit_balance.Services.InvitationPackage.IinvServiceIMP;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;

@RestController
@RequestMapping("/Contact")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    public final IContactServiceIMP iContactServiceIMP;
    public final IinvServiceIMP iinvServiceIMP;
    @PostMapping("addContact")
    public Contact ajouter (@RequestBody Contact contact) throws IOException {
        return iContactServiceIMP.addContact(contact);
    }

    @PostMapping("AccepterInv/{id}")
    public void accept(@PathVariable Integer id) throws MessagingException {
        iinvServiceIMP.Accept(id);
    }


}
