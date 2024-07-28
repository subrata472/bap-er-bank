// console.log('deposit.js')
// step - 01: add event listener to the deposit
document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit button clicked')
    // set-02: get the deposit amount from the deposit input fiel
    // For input field Use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    console.log(depositAmount);

    // step-03: get the current deposit total
    // for non this.input (elemnt than other than input,textarea) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})




// practice part

// document.getElementById('btn-deposit').addEventListener('click',function(){
//     const depositField = document.getElementById('deposit-field');
//     const depositAmount = depositField.value;
//     console.log(depositAmount);

//     const depositTotalElement = document.getElementById('deposit-total');
//     const depositAmount = depositTotalElement.innerText;
//     depositTotalElement.innerText = depositAmount;
// })