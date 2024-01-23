package com.tale.credit_balance.Repositories;

import com.tale.credit_balance.HR_Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
