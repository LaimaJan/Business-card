const fullName = document.querySelector("#fname").value;
const email = document.querySelector("#email").value;
const phone = document.querySelector("#phone").value;
const address = document.querySelector("#address").value;
const job = document.querySelector("#job").value;
let btn = document.querySelector("#submit-btn");
let newForm = document.querySelector(".published-form");

let form = document.getElementById("bussines-card");

// let ourFormKey = object key

// btn.addEventListener("click", function () {
// 	// localStorage.setItem("fullName", fullName);
// 	// localStorage.setItem("email", email);
// 	// localStorage.setItem("phone", phone);
// 	// localStorage.setItem("address", address);
// 	// localStorage.setItem("job", job);

// 	const newDiv = document.createElement("div");
// 	newDiv.classList.add("completed-form-div");

// 	newDiv.appendChild(fullName);
// 	newDiv.appendChild(email);
// 	newDiv.appendChild(phone);
// 	newDiv.appendChild(address);
// 	newDiv.appendChild(job);

// 	document.body.appendChild(newDiv);
// 	console.log(newDiv);
// });
form.addEventListener("submit", submitData);

function submitData(event) {
	event.preventDefault();
	const myFormData = new FormData(event.target);
	console.log(myFormData);

	const formDataObj = {};
	myFormData.forEach((value, key) => (formDataObj[key] = value));
	console.log(formDataObj);

	window.localStorage.setItem("formDataObj", JSON.stringify(formDataObj));
	let finishedCard = JSON.stringify(formDataObj);
	console.log(finishedCard);

	newForm.innerText = finishedCard;
	document.body.appendChild(newForm);
}
