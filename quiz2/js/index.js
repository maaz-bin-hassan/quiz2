//task1
function calculatepercentage(number, totalAmount) {
    if (totalAmount === 0) {
      
      return 0;
    }

    const percentage = (number / totalAmount) * 100;
  
    return percentage;
  }
  const number = 360;
  const totalAmount = 550;
  const percentage = calculatepercentage(number, totalAmount);
  console.log(`The percentage is: ${percentage}%`);
  

  //task 2 
  const objects = [
    {
       id:"1",
      firstName: "fahad",
      age: "23",
      income: "200000",
    },
    {
        id:"2",
      firstName: "zoya",
      age: "23",
      income: "300000",
    },
];

console.log('\ninformation:');
objects.forEach(objects => {
  console.log(`person ${objects.id} is ${objects.firstName} having salary of  ${objects.income}`);
});
//task 3
function printObjectProperties(obj) {
  console.log('Properties are below:');
  for (const key in obj) {
    console.log(key);
  }
}

const Object1 = {
  id: 1,
  personName: "Fahad",
  personAge: "23",
  personIncome: "2000000"
};

printObjectProperties(sampleObject);
