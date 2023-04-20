const billAmountInput = document.getElementById("bill-amount");
const tipRangeInput = document.getElementById("range");
const tipRangeValue = document.querySelector(".range-box");
const tipAmount = document.querySelector(".tip-amount");
const totalBill = document.querySelector(".total-bill-box");

function calculateTip() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercent = parseFloat(tipRangeInput.value);

    if (isNaN(billAmount)) {
        alert("Enter your bill amount");
        return;
    }
    
    const tip = billAmount * (tipPercent / 100);
    const total = billAmount + tip;
    tipRangeValue.textContent = tipPercent + "%";
    tipAmount.textContent = "$" + tip.toFixed(2);
    totalBill.textContent = "$" + total.toFixed(2);
}

billAmountInput.addEventListener("input", calculateTip);
tipRangeInput.addEventListener("input", calculateTip);
