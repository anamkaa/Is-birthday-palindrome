//function to reverse a string
function reverseTheString(string){
    var charString = string.split('');
    var reverseCharString = charString.reverse();
    var reversedString = reverseCharString.join('');
    // console.log(reversedString);
    return reversedString;
}

// var string = 'hello';
// var testFunction = reverseTheString(string);
// console.log(testFunction);

//function to check for palindrome
function checkForPalindrome(string){
    var reversedString = reverseTheString(string);
   return(string===reversedString);

}

// var string = 'mom';

// var testFunction = checkForPalindrome(string);
// console.log(testFunction);

//function to convert date from number to string
function convertToString(date){
  dateString = {day:'', month:'',year:''};
 if(date.day<10){
       dateString.day = '0'+date.day.toString();
     }
else {
    dateString.day = date.day.toString();
}

if(date.month<10){
    dateString.month = '0'+date.month.toString();
}
else{
    dateString.month = date.month.toString();
}
    
dateString.year = date.year.toString();

return(dateString);
}

//function to return all formats of date (ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd)

function giveDateFormat(date){
    var dateString = convertToString(date);

    var ddmmyyyy = dateString.day + dateString.month + dateString.year;
    var mmddyyyy = dateString.month + dateString.day + dateString.year;
    var yyyymmdd = dateString.year + dateString.month + dateString.day;
    var ddmmyy = dateString.day + dateString.month + dateString.year.slice(-2);
    var mmddyy = dateString.month + dateString.day + dateString.year.slice(-2);
    var yymmdd = dateString.year.slice(-2) + dateString.month + dateString.year;
    
    return([ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]);
   
}

//function to check palindrome for all date formats
function checkPalindromeForAllDateFormats(date){

    var listOfDates = giveDateFormat(date);
    var flag = false;

    for(var i=0; i<listOfDates.length; i++){
        if(checkForPalindrome(listOfDates[i])){
            flag=true;
            break;
        }
    }

    return flag;
}


//leap year function
function checkLeapYear(year){
    if(year%400===0){
        return true;
    }

    if(year%100===0){
        return false;
    }

    if(year%4===0){
        return true;
    }

    else{
        return false;
    }
}

//function to get next date
function getNextDate(date){

day = date.day +1;
month = date.month;
year = date.year;

var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];


if(month==2){

   if(checkLeapYear(year)){
       if(day>29){
           day = 1;
           month++;
       }
   }
   else{
       if(day>28){
           day=1;
           month++;
       }
   }
}

else{
    if(day > daysInMonth[month-1]){
        day = 1;
        month++;
    }
}

if(month >12){
    month =1;
    year++;
}
 return [day = day,
month = month,
year = year];

}

//function to get previous date

// function getPreviousDate(date){

//     day = date.day-1;
//     month = date.month;
//     year = date.year;

//     daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

//     if(month==3){

//       if(checkLeapYear(year)){
//           if(day>29){
//               day = 29;
//               month--;
//           }
//       }

//       else{
//           if(day>28){
//               day = 28;
//               month--;
//           }
//       }

//     }

//     else{
//         if(day > daysInMonth[month-1]){
//             day = daysInMonth[month-1];
//             month--;
//         }
//     }

//     if(month>12){
//         day = 31;
//         year--;
//     }

//     return [day = day, month = month, year = year];
// }


//function to get next palindrome date

var date = {
    day:1,
    month:3,
    year:2020
}

var testFunction = getNextDate(date);
console.log(testFunction)
