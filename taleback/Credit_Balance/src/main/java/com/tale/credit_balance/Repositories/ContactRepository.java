package com.tale.credit_balance.Repositories;

import com.tale.credit_balance.HR_Entities.Contact;
import com.tale.credit_balance.HR_Entities.CreditBalance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;


public interface ContactRepository extends JpaRepository<Contact,Integer> {


    public Contact findByUserId(long userid);

}