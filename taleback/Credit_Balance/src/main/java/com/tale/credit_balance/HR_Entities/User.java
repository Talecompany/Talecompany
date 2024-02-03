package com.tale.credit_balance.HR_Entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import java.util.List;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_User;

    @Nonnull
    private String Nom;

    @Nonnull
    private String Prenom;

    @Nonnull
    private String email;

    @OneToMany(mappedBy ="user")
    @JsonIgnore
    private List<Invitation> InvList;

    @ManyToMany
    private List<FocusGroup> focusGroups;
}