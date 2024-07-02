function calChange(payment, cost){
  //여기에 코드를 작성하세요
  let change = payment - cost;

  console.log("50000원 지폐 : " + parseInt(change / 50000) +"장"); 
  console.log("10000원 지폐 : " + parseInt((change % 50000) /10000) +"장"); 
  console.log("5000원 지폐 : " + parseInt((change % 10000) /5000) +"장"); 
  console.log("1000원 지폐 : " + parseInt((change % 5000) /1000) +"장"); 
}

calChange(100000, 33000);
console.log('');
calChange(500000, 378000)