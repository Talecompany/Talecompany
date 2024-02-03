package com.tale.credit_balance.Repositories;

import com.tale.credit_balance.HR_Entities.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationRepository extends JpaRepository<Invitation,Integer> {
}
