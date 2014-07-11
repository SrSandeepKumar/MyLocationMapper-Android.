/*global jQuery:false */

/**
 * @preserve Copyright 2012 Native5
 * version 0.5
 * author: Native5 Solutions Inc.
 */

/**
 * DateUtils Utility to format and parse date related information. 
 * @class DateUtils
 */
var native5 = (function ($, native5) {
    "use strict";
    native5.utils = native5.utils || {};
    native5.utils.DateUtils = function () {};

    var getShortYear = function (year) {
        return String(year).slice(2);
    };

    var getPaddedDate = function (date) {
        return (date < 10) ? ("0" + date) : date;
    };

    var dateFormatter = function (avDate, inputFormat) {
        var format = inputFormat || "d", hours24 = "", hours12 = "", pm = false, ampm = "";

        hours24 = avDate.getHours();
        hours12 = hours24;
        if(hours24 > 12) {
            hours12 = hours24 - 12;
            pm = true;
        }

        if(pm) {
            ampm = "pm";
        } else {
            ampm = "am";
        }

        if (format.indexOf("Y") !== -1) {
            format = format.replace("Y", avDate.getFullYear());
            return format;
        }

        if (format.indexOf("y") !== -1) {
            format = format.replace("y", getShortYear(avDate.getFullYear()));
            return format;
        }

        if (format.indexOf("F") !== -1) {
            format = format.replace("F", native5.utils.DateUtils.getMonthName((avDate.getMonth()), "full"));
            return format;
        }

        if (format.indexOf("m") !== -1) {
            format = format.replace("m", getPaddedDate(avDate.getMonth() + 1));
            return format;
        }

        if (format.indexOf("M") !== -1) {
            format = format.replace("M", native5.utils.DateUtils.getMonthName((avDate.getMonth()), "short"));
            return format;
        }

        if (format.indexOf("n") !== -1) {
            format = format.replace("n", avDate.getMonth() + 1);
            return format;
        }

        if (format.indexOf("d") !== -1) {
            format = format.replace("d", getPaddedDate(avDate.getDate()));
            return format;
        }

        if (format.indexOf("D") !== -1) {
            format = format.replace("D", native5.utils.DateUtils.getDayName((avDate.getDay()), "short"));
            return format;
        }

        if (format.indexOf("j") !== -1) {
            format = format.replace("j", avDate.getDate());
            return format;
        }

        if (format.indexOf("l") !== -1) {
            format = format.replace("l", native5.utils.DateUtils.getDayName((avDate.getDay()), "full"));
            return format;
        }

        if (format.indexOf("g") !== -1) {
            format = format.replace("g", hours12);
            return format;
        }

        if (format.indexOf("G") !== -1) {
            format = format.replace("G", hours24);
            return format;
        }

        if (format.indexOf("h") !== -1) {
            format = format.replace("h", getPaddedDate(hours12));
            return format;
        }

        if (format.indexOf("H") !== -1) {
            format = format.replace("H", getPaddedDate(hours24));
            return format;
        }

        if (format.indexOf("i") !== -1) {
            format = format.replace("i", getPaddedDate(avDate.getMinutes()));
            return format;
        }

        if (format.indexOf("s") !== -1) {
            format = format.replace("s", getPaddedDate(avDate.getSeconds()));
            return format;
        }

        if (format.indexOf("a") !== -1) {
            format = format.replace("a", ampm);
            return format;
        }

        if (format.indexOf("A") !== -1) {
            format = format.replace("A", ampm.toUpperCase());
            return format;
        }

        return format;
    };

    $.extend(native5.utils.DateUtils, {        

        /**
         * This function formats the date and time according to user input.
         * @method formatDateTime
         * @param date {Object | String} A valid date object or string convertible to date.
         * @param [options.format = null] {String} Format in which date needs to be formatted. User can provide a string containing separator and specific date formats. Formats are - `d` Day of the month, 2 digits with leading zeros, `D` A textual representation of a day, three letters
         `j` Day of the month without leading zeros, `l` A full textual representation of the day of the week, `F` A full textual representation of a month, such as January or March, `m` Numeric representation of a month, with leading zeros, `M` A short textual representation of a month, three letters, `n` Numeric representation of a month, without leading zeros, `Y` A full numeric representation of a year, 4 digits
         `y` A two digit representation of a year, `g` represents to 12 hour format without leading 0, `G` is 24 hour format without leading 0, `h` is 12 hour format with leading 0, `H` is 24 hour format with leading 0, `i` is minutes, `s` is seconds. `a` represents Lowercase Ante meridiem and Post meridiem and `A` represents Uppercase Ante meridiem and Post meridiem, only applicable for 12 hour format.
         * @return {String} Formatted output
         * @example
         * dateBetween = native5.utils.DateUtils.formatDateTime(new Date(), {format: "d-m-Y, h:i:s A"}));
         */

        formatDate: function(date, options) {
            if (!date) {
                return "";
            }

            var opts = options || {}, format = opts.format || "d-m-Y, H:i:s", output = "", avDate = new Date(date), formatArray = [];

            if (isNaN(avDate)) {
                return "";
            }

            formatArray = format.split("");

            $(formatArray).each(function(key, value) {
                formatArray[key] = dateFormatter(avDate, value);
            });

            output = formatArray.join("");

            return output;
        },

        /**
         * This function finds the number of dates between two provided dates. It then returns array of dates to the user.
         * @method dateRange
         * @param startDate {Object | String} A valid date object or string convertible to date.
         * @param endDate {Object | String} A valid date object or string convertible to date.
         * @return {Array} Array of date objects.
         * @example
         * dateBetween = native5.utils.DateUtils.dateRange(new Date(), new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
         */

        dateRange: function (startDate, endDate) {
            if (!startDate || !endDate) {
                return [];
            }

            var retVal = [], sdate = new Date(startDate), edate = new Date(endDate), i = 0;

            if (isNaN(sdate) || isNaN(edate)) {
                return [];
            }

            var diff = (edate - sdate) / (1000 * 60 * 60 * 24);
            for (i; i <= diff; i++) {
                var tempVal = new Date(sdate);
                retVal.push(new Date(tempVal.setDate(tempVal.getDate() + i)));
            }
            return retVal;
        },

        /**
         * This function will return the name of the month based on the supplied number. The month will start with 0 so January will be `0`, February be `1` and so on.
         * @param month {Number} Integer to be parsed in as Month. It must be between 0 and 11.
         * @param type {String} Type in which the output is expected. There is two types possible - `short` for 3 letter Month name and `full` for full month name.
         * @return {String} Month name as specified by the parameters.
         * @example
         * var monthName = native5.utils.DateUtils.getMonthName(02, "short");
         */

        getMonthName: function (month, type) {
            if (!month || !type) {
                return "";
            }

            month = parseInt(month, 10);

            var shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var returnMonth;

            if (type === "short") {
                returnMonth = shortMonths[month];
            } else if (type === "full") {
                returnMonth = fullMonths[month];
            }
            return returnMonth;
        },

        /**
         * This function will return the name of the day of the week based on the supplied number. The day will start with 0 so, Monday will be `0`, Tuesday be `1` and so on.
         * @param day {Number} Integer to be parsed in as day. It must be between 0 and 6.
         * @param type {String} Type in which the output is expected. There is two types possible - `short` for 3 letter day name and `full` for full day name.
         * @return {String} Day name as specified by the parameters.
         * @example
         * var dayName = native5.utils.DateUtils.getDayName(02, "short");
         */

        getDayName: function (day, type) {
            if (!day || !type) {
                return "";
            }

            day = parseInt(day, 10);

            var shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var returnDay;

            if (type === "short") {
                returnDay = shortDays[day];
            } else if (type === "full") {
                returnDay = fullDays[day];
            }
            return returnDay;
        }
    });

    return native5;
}(jQuery, native5 || {}));
