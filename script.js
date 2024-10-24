document.getElementById('userForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  let age = document.getElementById('age').value.trim();
  let name = document.getElementById('name').value.trim();

  
  if (!age || !name) {
    return alert("Inputs cannot be empty.");
  }


  age = Number(age);

  
  let agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); 
  });

 
  agePromise
    .then((message) => {
      alert(message); 
    })
    .catch((error) => {
      alert(error); 
	});
});
