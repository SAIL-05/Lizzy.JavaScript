
// a programme to calculate discount based on purchase amount
function calculateDiscount (amount){
    if (amount >= 100){
        return 20;
    }else if (amount >= 50){
        return 10;
    }else {
        return 0;
    }
}
let purchaseAmount = parseFloat(prompt("Enter purchase amount"));
if (!isNaN(purchaseAmount) && purchaseAmount>=0){
    let discount = calculateDiscount(purchaseAmount);
    let discountAmount = (discount/100)*purchaseAmount;
    let finalPrice = purchaseAmount-discountAmount;
    alert(`Purchase Amount: ${purchaseAmount.toFixed(2)}\n` + `Final Price: ${finalPrice.toFixed(2)}`);
}else {
    alert ("please enter a valid purchase amount")
}