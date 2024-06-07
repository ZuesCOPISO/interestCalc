function calculateInterest() {
    const principalAmount = parseFloat(document.getElementById("principal-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const timePeriod = parseFloat(document.getElementById("time-period").value);

    if (isNaN(principalAmount) || isNaN(interestRate) || isNaN(timePeriod) || principalAmount <= 0 || interestRate <= 0 || timePeriod <= 0) {
      document.getElementById("result").textContent = "Please enter valid values.";
      return;
    }

    const interestAmount = principalAmount * (interestRate / 100) * timePeriod;
    const totalAmount = principalAmount + interestAmount;

    document.getElementById("result").textContent = `Interest Amount: ${interestAmount.toFixed(2)}
    Total Amount: ${totalAmount.toFixed(2)}`;
  }