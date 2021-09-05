'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
//SLICE; Doesnt Mutate
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());

//SPLICE; Mutate the original Array
// console.log(arr.splice(2));
console.log(arr.splice(-1));
arr.splice(1, 2);
console.log(arr);

//REVERSE; Mutate the original Array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT; Doesnt Mutate
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN; Mutate to a String
console.log(letters.join(' - '));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement: ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement: ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------FOREACH-----------');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement: ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement: ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});


//0: function(200)
//1: function(450)
//2: function(400)
//...

//[Key, Value]
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

/*


Julias data [3,5,2,12,7] Kate [4,1,15,8,3]
Julias data [9,16,6,8,3] Kate [10,5,6,1,4]

////////////////CODING CHALLENGE
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];
const checkDogs = function (arr, arr2) {
  const remCat = arr.slice(1, -2);
  const remCat2 = arr2.slice(1, -2);
  console.log(remCat);
  console.log(remCat2);

  const corr = remCat.concat(dogsKate);
  console.log(corr);

  corr.forEach(function (corr, index) {
    if (corr >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${corr} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);

//MAP METHOD
const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}

console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//FILTER METHOD
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}

console.log(depositFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);


//REDUCE METHOD

//accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;

console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);



//CODING CHALLENGE
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];



// const calcAverageHumanAge = data1.map(function (ages) {
//   if (ages <= 2) {
//     return 2 * ages;
//   } else if (ages > 2) {
//     return 16 + ages * 4;
//   }
// });


const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const oldDogs = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(oldDogs);

  const ave = humanAges.reduce((acc, age) => acc + age, 0) / oldDogs.length;
  return ave;
};

const avg1 = calcAverageHumanAge(data1);
const avg2 = calcAverageHumanAge(data2);
console.log(avg1, avg2);


const eurToUsd = 1.1;

//Chaining works only if they produce an array, PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

//CODING CHALLENGE 3 ---- CHAINING and ARROW
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge(data1);
const avg2 = calcAverageHumanAge(data2);

console.log(avg1, avg2);


//Find Method --Similar to filter but find return ONLY THE FIRST ELEMENT
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// for (const accs of accounts) {
//   if (accs.owner === 'Jessica Davis') {
//     console.log(accs);
//   }
// }


//EQUALITY
console.log(movements);
console.log(movements.includes(-130));

//SOME: CONDITION
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

//EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


const array = [1, 2, 3, [4, 5, 6], 7, 8];
console.log(array.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

//flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, move) => acc + move, 0);

console.log(overalBalance);

//flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, move) => acc + move, 0);

console.log(overalBalance2);


//SORT: MUTATE
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

//Numbers
console.log(movements);

//return < 0 A, B (keep order)
//return > 0 B, A (switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
movements.sort((a, b) => a - b);
console.log(movements);

//Descending
movements.sort((a, b) => b - a);
console.log(movements);
*/
