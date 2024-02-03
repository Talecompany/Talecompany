package com.tale.credit_balance.RestControllers.HR_Controllers;

import com.tale.credit_balance.HR_Entities.Contact;
import com.tale.credit_balance.Services.ContactPackage.IContactServiceIMP;
import com.tale.credit_balance.Services.FocusGroupPackage.IFocusGroupServiceIMP;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;

@RestController
@RequestMapping("/FocusGroup")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")

public class FocusGroupController {
    public final IFocusGroupServiceIMP iFocusGroupServiceIMP;

    @PostMapping("Subscribe/{idu}/{idf}")
    public void Subscribe (@PathVariable Integer idu,@PathVariable Integer idf) throws MessagingException {
        iFocusGroupServiceIMP.Subscribe(idu, idf);
    }
}
