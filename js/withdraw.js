// 1. add event handeler with the withdraw GamepadButton
// 2. get the withdraw amount from the withdraw input field 
// 2.5 - also make sure to convert the input into a number by using parsefloat(parsefloat use for when we are use number input)
// 3. get the previous witdeaw total
// 4. calculate total amount
// 5. get the previous balance total
// 6.calculate new balance total
// 6.5- set the new balance total
// 7. clear the input field

// sep-01
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // console.log('withdraw button clicked');
                           document.getElementById('btn-withdraw').addEventListener('click',function(){
                            const withdraField = document.getElementById('withdraw-field');
                            const  newWithdrawAmountString = withdrawField.value;
                            const newWithdrawAmount = parseFloat(newWithdrawAmountString);
                            console.log(newWithdrawAmount);
                            const withdrawTotalElement = document.getElementById('withdre-total');
                            const previouWithdrawTotalString = withdrawTotalElement.innerText;
                            const previousWithdrawTotal = parseFloat(previouWithdrawTotalString);
                            const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
                            withdrawTotalElement.innerText = newWithdrawAmount;
                            const balanceTotalElement= document.getElementById('balance-total');
                            const previousBalanceTotalString = balanceTotalElement.innerText;
                            const previousBalanceTotal = parseFloat(previouWithdrawTotalString);
                            console.log(previousBalanceTotal);
                           })
// step-02
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    // nan kijonno ba sonkha likhar jonno ei code
    console.log(newWithdrawAmount);
    // step-07
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
    }

// step-03
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouWithdrawTotalString = withdrawTotalElement.innerText; 
    const previousWithdrawTotal = parseFloat(previouWithdrawTotalString);
    // console.log(previousWithdrawTotal);
    

    // // step--05
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal);

    if(newWithdrawAmount>previousBalanceTotal){
        alert('Baap er bank e eto taka nai');
        return;
    }
    // // step-04
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;

    // // step-06
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})