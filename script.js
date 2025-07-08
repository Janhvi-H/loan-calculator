let loan = document.getElementById("loanAmount");
let interestRate = document.getElementById("interestRate");
let months = document.getElementById("months");
let value = document.getElementById("value");

function updateDisplay(payment) {
    if (typeof payment === "number" && !isNaN(payment)) {
        value.textContent = `₹${payment.toFixed(2)}`;
    } else {
        value.textContent = "";
    }
    //value.textContent = `₹${payment}`;
    //console.log(payment);
}

function calculateMonthlyPayment() {
    const P = parseFloat(loan.value);
    const annualRate = parseFloat(interestRate.value);
    const monthsToPay = parseFloat(months.value);
    const years = monthsToPay / 12;

    if (P <= 0 || annualRate <= 0 || monthsToPay <= 0 || isNaN(P) || isNaN(annualRate) || isNaN(monthsToPay)) {
        updateDisplay();
        return;
    }

    const totalInterest = (P * annualRate) / 100;
    const totalAmountToPay = P + totalInterest;
    const payment = totalAmountToPay / monthsToPay;
    updateDisplay(payment);
}


loan.addEventListener("input", calculateMonthlyPayment);
interestRate.addEventListener("input", calculateMonthlyPayment);
months.addEventListener("input", calculateMonthlyPayment);

value.addEventListener("click", () => {
    loan.value = "";
    interestRate.value = "";
    months.value = "";
    updateDisplay();
});

//months.addEventListener("input", updateDisplay);