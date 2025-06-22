//Cash Register 

const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

const messages = ["Status: INSUFFICIENT_FUNDS", "Status: CLOSED", "Status: OPEN"];
let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
]; // cash-in-drawer

const billsAndCoins = new Map([
//                                [0.01, "PENNY"],
//                                [0.05, "NICKEL"],
//                                [0.1, "DIME"],
//                                [0.25, "QUARTER"],
                               [1, "ONE"],
                               [5, "FIVE"],
                               [10, "TEN"],
                               [20 , "TWENTY"],
                               [100, "ONE HUNDRED"],])


const calculate = () => {

    const cash = Number(document.getElementById("cash").value);
    console.log(cash);

    let index;

    if(price > cash){
        index = 0;
        console.log(index);
        return;
    }
    else if(price === cash){
        index = 1;
        console.log(index);
        return;
    }
    else{
        index = 2;
        console.log(index);
        const change = price - cash;
        console.log(change);
        giveBalance(change);
        display(index);
        return;
    }

};

const giveBalance = () => {
    const change = 10

    for(let i = 0; i > billsAndCoins.length ; i++){
        if(change < billsAndCoins[i].key){
            
        }
    }

};

const display = (index) => {
    changeDue.innerHTML += `${messages[index]}`;
};


purchaseBtn.addEventListener("click", calculate);