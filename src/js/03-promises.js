const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ];
//   console.log('1');
//   for(const user of users){
//       console.log(user.friends.length);
//   }

  

  // Change code below this line
  const getNamesSortedByFriendCount = users => {
    const names = users
    .flatMap(user => user.friends)
    .map(user => user.friends.length)
    .sort((a,b) => a - b)
    .map(user => user.name);
  
    return names;  
  };
  // Change code above this line
  console.log(getNamesSortedByFriendCount);

// const form = document.querySelector('.form');
// const delayEl = document.querySelector('input[name=delay]');
// const stepEl = document.querySelector('input[name=step]');
// const amountEl = document.querySelector('input[name=amount]');

// const submit = document.querySelector('button[type=submit]');


// function createPromise(position, delay) {
// return new Promise((resolve, reject) =>{

// const shouldResolve = Math.random() > 0.3;
// let firstPosition = 0;
// timerId = setInterval(()=>{
//   if(shouldResolve){
//     firstPosition +=1;
//     resolve('resolve');
//     console.log(firstPosition)
//   }else{
//   firstPosition +=1;
//   reject('reject');
//   console.log(firstPosition)
//   }
  
  
// },delay);
// });
// }


// form.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   const delayValue = delayEl.value;
//   const stepValue = stepEl.value;
//   const amountValue = amountEl.value;
//   // console.log(`${delayValue} , ${stepValue} , ${amountValue}`);
  
//   const position = amountValue;
//   const delay = stepValue;
//   const firstDelay = delayValue;


//   createPromise(position, delay)
//   .then((result) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
//   })
//   .catch((error) => {
//     console.log(`❌ Rejected promise ${position} in ${delay} ms`);
//   }) 

// });






