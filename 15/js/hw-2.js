function calcChange(payment, cost){
  // payment = 100000, cost = 33000
  //여기에 코드를 작성하세요
  let change = payment - cost; //거스름돈 67000

  const fiftyCount = ( change - (change % 50000) ) / 50000; // 1장
  change = change - 50000 * fiftyCount; // 거스름돈 17000

  const tenCount   = ( change - (change % 10000) ) / 10000;  // 1장
  change = change - 10000 * tenCount; // 거스름돈 7000

  const fiveCount  = ( change - (change % 5000) ) / 5000;  // 1장 
  change = change - 5000 * fiveCount; // 거스름돈 2000

  const oneCount = ( change - (change % 1000)) / 1000;  // 2장
  change = change - 1000 * oneCount;

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);

  // console.log('50000원 지폐: ' + Math.floor(change / 50000) + '장');
  // console.log('10000원 지폐: ' + Math.floor((change % 50000) / 10000) + '장');
  // console.log( '5000원 지폐: ' + Math.floor((change % 10000) /  5000) + '장');
  // console.log( '1000원 지폐: ' + Math.floor((change %  5000) /  1000) + '장');

}

calcChange(100000, 33000);   //  67000
console.log('');
calcChange(500000, 378000);  // 122000