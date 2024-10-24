let inputAge = document.getElementById('age');
let inputName = document.getElementById('name');
let inputBtn = document.getElementById('btn');

inputBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let age = inputAge.value;
  let name = inputName.value;

  if (!age || !name) {
    return alert("Please enter valid details.");
  }

  age = Number(age);

  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry, ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  p.then((message) => {
    alert(message);
  }).catch((error) => {
    alert(error);
  });
});
