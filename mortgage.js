var loanAmt, int, month, day, year, payment, pmtfreq, date1, date2;
var totInt = 0;                                          //Initialize totInt = 0

function calc() {
  //Blank out existing values
  loanAmt = 0;rate = 0; month = 0; day = 0; year = 0; payment = 0; pmtfreq = 0;
  totInt = 0;
  //////////////////////////////////////////////////////////////////////////////
  loanAmt = document.getElementById("loanamt").value;
  rate = document.getElementById("interest").value;
  month = document.getElementById("months").value;
  day = document.getElementById("days").value;
  year = document.getElementById("years").value;
  payment = document.getElementById("payment").value;
  pmtfreq = document.getElementById("pmtfreq").value;
//Edits
if(loanAmt == 0){
  alert("Loan Amount is required");
}
if(rate == 0){
  alert("Interest Rate is required")
}
if(payment == 0){
  alert("Payment is required")
}
//Convert Payment Frequency to 1 or 2; 1 = Monthly; 2 = Bi-Weekly
  switch (pmtfreq) {
      case "Monthly":
          pmtfreq = 1;
          break;
      case "Bi-Weekly":
          pmtfreq = 2;
    }
//Calculations
  intRate = rate/100;                                                  //Percent
  if (pmtfreq == 1){
    moInt = intRate/13;                            //Every 4 Weeks Interest rate
  }else{
    moInt = intRate/26;                                //Bi-Weekly Interest Rate
  }
  i = 0;                                                               //Counter
while(loanAmt > 0){
  if(pmtfreq == 1){
    i++;                                                 //Increment Month Count
  }else{
    i = (i + 0.5);     //Increment Month Count by Half due to Bi-Weekly Payments
  }
  int = moInt * loanAmt;                                 //Monthly Interest Paid
  totInt += int;
  prinPayment = payment - int;
  loanAmt = loanAmt - prinPayment;
  }
//Convert Month to be 1-12
switch (month) {
    case "January":
        month = 1;
        break;
    case "February":
        month = 2;
        break;
    case "March":
        month = 3;
        break;
    case "April":
        month = 4;
        break;
    case "May":
        month = 5;
        break;
    case "June":
        month = 6;
        break;
    case "July":
        month = 7;
        break;
    case "August":
        month = 8;
        break;
    case "September":
        month = 9;
        break;
    case "October":
        month = 10;
        break;
    case "November":
        month = 11;
        break;
    case "December":
        month = 12;
}


  date = month+'/'+day+'/'+year;
  date = new Date(date);
  date = date.setMonth(date.getMonth() + i);
  date = new Date(date);
  date = date.toDateString();
  totInt = Math.round(100 * totInt)/100;
  document.getElementById("enddate").textContent=date;
  document.getElementById("totInterest").textContent=totInt;
  document.getElementById("payments").textContent=i;
}
