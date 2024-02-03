package com.tale.credit_balance.Services.InvitationPackage;

import com.tale.credit_balance.HR_Entities.Invitation;
import com.tale.credit_balance.Repositories.InvitationRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.webjars.NotFoundException;

import javax.mail.MessagingException;
import java.util.Date;

@Slf4j
@Service
@AllArgsConstructor
public class IinvServiceIMP implements IinvService {

    private final InvitationRepository invitationRepository;

    @Override
    public void Accept(int id) throws MessagingException {
        Invitation invitation=invitationRepository.findById(id).orElse(null);
        if(invitation==null)
        {
            Assert.notNull(invitation, "invitation  not found for id: "+id);
            throw new NotFoundException("invitation  not found");
        }
        if(invitation.getEtat()==true)
        {
            Assert.notNull(invitation, "invitation successfully processed for id: "+id);
        }
        if(invitation!=null)
        {
            invitation.setEtat(true);
            invitation.setDateinv(new Date());
            invitationRepository.save(invitation);
        }
    }
    @Override
    public void Reject(int id) throws MessagingException {
        Invitation invitation=invitationRepository.findById(id).orElse(null);
        if(invitation==null)
        {
            Assert.notNull(invitation, "invitation  not found for id: "+id);
            throw new NotFoundException("invitation  not found");
        }
        if(invitation.getEtat()==true)
        {
            Assert.notNull(invitation, "invitation successfully processed for id: "+id);
        }
        if(invitation!=null)
        {
            invitation.setEtat(false);
            invitation.setDateinv(new Date());
            invitationRepository.save(invitation);
        }
    }
}
