package com.tale.credit_balance.Repositories;

import com.tale.credit_balance.HR_Entities.CreditBalance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;


public interface CreditBalanceRepository extends JpaRepository<CreditBalance,Integer> {


    public CreditBalance findByUserId(long userid);

}