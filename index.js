let btn = document.querySelector("#submit-btn");
let newForm = document.querySelector(".published-form");
let formDiv = document.querySelector(".our-form-div");
let form = document.getElementById("bussines-card");
const inputFields = document.querySelectorAll("input");

const isFormValid = () => {
	var inputs = inputFields;

	for (const input of inputs) {
		if (input.value == "" || input.value == null) {
			return false;
		}
	}
	return true;
};

// function validateForm() {
// 	let a = document.forms["Form"]["fullName"].value;
// 	let b = document.forms["Form"]["email"].value;
// 	let c = document.forms["Form"]["phone"].value;
// 	let d = document.forms["Form"]["address"].value;
// 	let e = document.forms["Form"]["job"].value;
// 	if (
// 		(a == null || a == "",
// 		b == null || b == "",
// 		c == null || c == "",
// 		d == null || d == "",
// 		e == null || e == "")
// 	) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

form.addEventListener("submit", submitData);

function submitData(event) {
	event.preventDefault();

	if (!isFormValid()) {
		alert("Please fill all the fields!");
		return;
	}

	const myFormData = new FormData(event.target);
	// console.log(myFormData);

	const formDataObj = {};
	myFormData.forEach((value, key) => (formDataObj[key] = value));
	console.log(formDataObj);

	window.localStorage.setItem("formDataObj", JSON.stringify(formDataObj));

	// creating our card with input fields info
	const ourPublishedForm = generateObjectElement("div", "our-published-form");

	// creating cards div for img - left and text - right
	const imgTextDiv = generateObjectElement("div", "imgTextDiv");
	ourPublishedForm.appendChild(imgTextDiv);

	formDiv.appendChild(ourPublishedForm);

	// creating a div for img and info below it
	const imgFullNameJobDiv = generateObjectElement("div", "imgFullNameJobDiv");
	imgTextDiv.appendChild(imgFullNameJobDiv);

	const img = generateObjectElement("img", "profile-img");
	img.src = "images/Ellipse2.png";
	imgFullNameJobDiv.appendChild(img);

	// creating div for full name and job title
	const nameJob = generateObjectElement("div", "nameJob");
	imgFullNameJobDiv.appendChild(nameJob);

	nameJob.appendChild(
		generateObjectElement("p", "fullName", formDataObj.fullName)
	);

	// creating p for job title
	nameJob.appendChild(generateObjectElement("p", "jobTitle", formDataObj.job));

	// creating div for email/phone/address
	const infoDiv = generateObjectElement("div", "infoDiv");
	imgTextDiv.appendChild(infoDiv);

	infoDiv.appendChild(generateObjectElement("p", "email", formDataObj.email));

	// creating <p> for phone number
	infoDiv.appendChild(
		generateObjectElement("p", "phoneNumber", formDataObj.phone)
	);

	// creating <p> for address
	infoDiv.appendChild(
		generateObjectElement("p", "address", formDataObj.address)
	);

	function generateObjectElement(selector, className, text) {
		const element = document.createElement(selector);
		element.classList.add(className);

		if (typeof text !== "undefined") {
			element.innerText = text;
		}

		return element;
	}
}
