//your JS code here. If required.
let inputAge = document.getElementById('age');
let inputName = document.getElementById('name');
let inputBtn = document.getElementById('btn');
inputBtn.addEventListener('click' , (e)=>{
	e.preventDefault();
	let age = inputAge.value;
	let name = inputName.value;
	if(age ==="" && name===""){
		return alert("inputs cannot be empty.");
	}

	
	let p = new Promise((res , rej)=>{
		setTimeout(()=>{
		if(age>18){
			res(`Welcome, ${name}. You can vote.`)
		}
			else{
				rej(`Oh sorry  ${name}. You aren't old enough`)
			}
	},4000)
	})

	p.then((res)=>{
		console.log(res);
	})
	.catch((err)=>{
		console.log(err);
	})
})