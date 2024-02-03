package com.tale.credit_balance.Services.FocusGroupPackage;

import com.tale.credit_balance.HR_Entities.FocusGroup;
import com.tale.credit_balance.HR_Entities.User;
import com.tale.credit_balance.Repositories.FocusGroupRepository;
import com.tale.credit_balance.Repositories.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import javax.mail.MessagingException;
import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class IFocusGroupServiceIMP implements IFocusGroupService {

    private final FocusGroupRepository focusGroupRepository;
    private final UserRepository userRepository;

    @Override
    public void Subscribe(int idu, int idf) throws MessagingException {
        FocusGroup focusGroup = focusGroupRepository.findById(idf).orElse(null);
        User user = userRepository.findById(idu).orElse(null);
        List<User> users = focusGroup.getUsers();
        for (User user1 : users){
            if (user1 == user) {
                throw new NotFoundException("deja inscrit");
            }
        }
        focusGroup.getUsers().add(user);
        user.getFocusGroups().add(focusGroup);
        focusGroupRepository.save(focusGroup);
        userRepository.save(user);
    }
}
