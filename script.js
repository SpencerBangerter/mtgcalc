//Get all data entry elements from the calculator Inputs
let priceSlider = document.getElementById("purchasePriceSlider");
let priceBox = document.getElementById("purchasePriceBox");
let rateSlider = document.getElementById("interestRateSlider");
let rateBox = document.getElementById("interestRateBox");
// let insuranceSlider = document.getElementById("insuranceSlider");
// let insuranceBox = document.getElementById("insuranceBox");
// let taxSlider = document.getElementById("taxSlider");
// let taxBox = document.getElementById("taxBox");
let dpa3pt5 = document.getElementById("3pt5perc");
let dpa5 = document.getElementById("5perc");
let calcButton = document.getElementById("calcButton");


//Get all output data Elements for Calulator Results

let estimatedPaymentOne = document.getElementById("estimatedPaymentOne");
let estimatedPaymentTwo = document.getElementById("estimatedPaymentTwo");

//Determine dpa percentage
let dpaPercent
function getDpaPercent() {
    var ele = document.getElementsByName('dpaPercent');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        dpaPercent = ele[i].value;
    }
}
//Script for purchase price slider/box relationship
priceBox.innerHTML = priceSlider.value;
priceSlider.oninput = function() {
    // box.value = formatter.format(this.value);
    priceBox.value = this.value;
} 
priceBox.oninput = function() {
    priceSlider.value = this.value
}

//Script for interest rate slider/box relationship
rateBox.innerHTML = rateSlider.value;
rateSlider.oninput = function() {
    // box.value = formatter.format(this.value);
    rateBox.value = this.value;

} 
rateBox.oninput = function() {
    rateSlider.value = this.value
}

// //Script for Insurance Slider/Box Relationship
// insuranceBox.innerHTML = insuranceSlider.value;
// insuranceSlider.oninput = function() {
//     // box.value = formatter.format(this.value);
//     insuranceBox.value = this.value;
// } 
// insuranceBox.oninput = function() {
//     insuranceSlider.value = this.value
// }

// //Script for Tax Slider/Box Relationship
// taxBox.innerHTML = taxSlider.value;
// taxSlider.oninput = function() {
//     // box.value = formatter.format(this.value);
//     taxBox.value = this.value;
// } 
// taxBox.oninput = function() {
//     taxSlider.value = this.value
// }

function runCalc() {
    getDpaPercent()
    //get calculation values for P and I
    let purchasePrice = parseFloat(priceBox.value);
    let t = 360;
    let annualInterestRate = parseFloat(rateBox.value);
    let r = annualInterestRate / 1200;
    let dpaAmount = purchasePrice * dpaPercent
    let p = purchasePrice - dpaAmount
    let pAndI = p*(r * Math.pow((1 + r), t))/(Math.pow((1 + r), t) - 1);
    pAndI = pAndI.toFixed(2);
    let mip = purchasePrice * 0.0085 / 12
    mip = mip.toFixed(2);
    let total = parseFloat(mip) + parseFloat(pAndI)
    //get calculation values for PITIMI
    // let tax = parseFloat(taxBox.value) / 12;
    // let ins = parseFloat(insuranceBox.value) / 12;
    // let pitimi = parseFloat(pAndI) + parseFloat(tax) + parseFloat(ins)
    // pitimi = pitimi.toFixed(2)
    estimatedPaymentOne.innerHTML = `$ ${total}`

}

calcButton.addEventListener("click", function(e) {
    e.preventDefault()
    runCalc()
})