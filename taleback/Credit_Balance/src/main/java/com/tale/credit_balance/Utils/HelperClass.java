package com.tale.credit_balance.Utils;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;

public class HelperClass {

    public static String getDayOfWeekString(LocalDate today) {
        LocalDate today1 = today;
        DayOfWeek dayOfWeek = today.getDayOfWeek();
        String dayOfWeekString = dayOfWeek.getDisplayName(TextStyle.FULL, Locale.ENGLISH);
        return dayOfWeekString;
    }
    public static boolean isDateBetween(LocalDate dateToCheck,LocalDate dateToCheck1, LocalDate startDate, LocalDate endDate) {
        return (dateToCheck.isAfter(startDate) || dateToCheck.isEqual(startDate))
                && (dateToCheck1.isBefore(endDate) || dateToCheck1.isEqual(endDate));
    }
}
