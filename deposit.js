let depoMoney = document.querySelector('.depo-money');
let balanceDisplay = document.querySelector('.balance');
let withDrawDisplay = document.querySelector('.withdraw-money');

let totalDeposit = 0;
let totalBalance = 0;
let totalWithdraw = 0;

document.getElementById('depo-submit').addEventListener('click', function () {
  let depoInput = parseFloat(document.getElementById('deposit').value);
  totalDeposit = totalDeposit + depoInput;
  depoMoney.textContent = totalDeposit;

  totalBalance = totalBalance + depoInput;
  balanceDisplay.textContent = totalBalance;

  document.getElementById('deposit').value = '';
});

document.getElementById('w-submit').addEventListener('click', function () {
  let withdrawInput = parseFloat(document.getElementById('withdraw').value);
  totalWithdraw = totalWithdraw + withdrawInput;
  withDrawDisplay.textContent = totalWithdraw;

  totalBalance = totalBalance - withdrawInput;
  balanceDisplay.textContent = totalBalance;

  document.getElementById('withdraw').value = '';
});
