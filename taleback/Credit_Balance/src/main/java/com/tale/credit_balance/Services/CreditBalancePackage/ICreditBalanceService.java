package com.tale.credit_balance.Services.CreditBalancePackage;

import com.tale.credit_balance.HR_Entities.CreditBalance;

import java.io.IOException;
import java.math.BigDecimal;

public interface ICreditBalanceService {
    //ADD
    public CreditBalance addduty(CreditBalance creditBalance) throws IOException;

    BigDecimal retrieveCreditBalance(long id);

    String retrievecurrency(long id);
//
//    //UPDATE
//    public Duty updateDuty(Duty duty, int idDuty);
////DELETE
//    public void removeDuty(Integer idDuty);
////RETRIEVE
//    public  List<Duty> retrieveDuty(TypeDuty typeDuty);
////GETAll
//    public List<Duty> getAllDuty();
}
