package com.tale.credit_balance.HR_Entities;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contact implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Contact;

    @Nonnull
    private Long userId;

    @Nonnull
    private String FirstName;

    @Nonnull
    private String LastName;

    @Nonnull
    private String Email;

    @Nonnull
    private int Num;

    @Nonnull
    private String Sujet;

    @Nonnull
    private String Description;
}