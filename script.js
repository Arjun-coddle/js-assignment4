// 1. Create a div with background color red, create buttons
// a. to hide the div
function forHide() {
    document.getElementById('box').style.display = 'none';
}

// b. to change the background color of the div
function forChangeColor() {
    document.getElementById('box').style.backgroundColor = 'rgb(53, 215, 236)'
}

// c. to show your basic details on the div, the details should hide/show, on the click.
function forHideShowDeatiles() {
    if (document.getElementById('div-deatiles').style.display === 'none') {
        document.getElementById('div-deatiles').style.display = 'block'
        document.getElementById('showHide-btn').innerHTML = 'Hide Deatiles'
    }
    else {
        document.getElementById('div-deatiles').style.display = 'none'
        document.getElementById('showHide-btn').innerHTML = 'Show Deatiles'
    }
}


// 2. Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to 10 and show a message
// that "9 is fully occupied please select another number", when selected any number other than 9 it should show a message
// as "you selected 'particular number' " in a div, on hovering the div it should change the background color of the div 
//into a highlighting shade, while the mouse pointer leaves the message area the background color should go back to as before 
//(don't use CSS to attain the hovering functionality)
function handleSelect() {
    const selectBox = document.getElementById('numberSelect')
    const selectedValue = selectBox.value;
    if (selectedValue == '9') {
        selectBox.value = '10';
        alert("9 is fully occupied, please select another number.")
    }
    else {
        alert(`you selected ${selectedValue}`);
    }
}

const box = document.getElementById('box');
box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'rgb(255, 34, 189)'
})
box.addEventListener('mouseout', () => {
    box.style.backgroundColor = '';
})


// 3. Consider an array with name of 10 programming languages, make 10 buttons by iterating this array, when clicked on
// each button the name of the programming language should be shown in a corresponding div. 
function bittonClicked(language) {
    document.getElementById('display-programming-langagues').innerHTML = language;
}

// 4. Make a form with fields name, phone number, place, company name, pin code
// a. if any of the field is empty on submitting it should show corresponding error messages on below of all the required fields.
// b. pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.
// c. Minimum length of phone number should be 10, otherwise show corresponding error msg below the mobile no. field. 
// d. On submit of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page).
// f. Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise the button will be disabled.
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const place = document.getElementById("place").value;
    const company = document.getElementById("company").value;
    const pincode = document.getElementById("pincode").value;

    const errorName = document.getElementById("errorName");
    const errorPhone = document.getElementById("errorPhone");
    const errorPlace = document.getElementById("errorPlace");
    const errorCompany = document.getElementById("errorCompany");
    const errorPincode = document.getElementById("errorPincode");

    errorName.textContent = "";
    errorPhone.textContent = "";
    errorPlace.textContent = "";
    errorCompany.textContent = "";
    errorPincode.textContent = "";

    let isValid = true;

    if (name === "") {
        errorName.textContent = "Name is required.";
        isValid = false;
    }
    if (phone === "") {
        errorPhone.textContent = "Phone number is required.";
        isValid = false;
    } else if (!/^\d+$/.test(phone)) {
        errorPhone.textContent = "Only numbers are allowed in the Phone number.";
        isValid = false;
    } else if (phone.length < 10) {
        errorPhone.textContent = "Phone number must be at least 10 digits.";
        isValid = false;
    }
    if (place === "") {
        errorPlace.textContent = "Place is required.";
        isValid = false;
    }
    if (company === "") {
        errorCompany.textContent = "Company name is required.";
        isValid = false;
    }
    if (pincode === "") {
        errorPincode.textContent = "Pin code is required.";
        isValid = false;
    } else if (!/^\d+$/.test(pincode)) {
        errorPincode.textContent = "Only numbers are allowed in the Pin code.";
        isValid = false;
    }

    if (isValid) {
        const userDetails = {
            name: name,
            phone: phone,
            place: place,
            companyName: company,
            pinCode: pincode
        };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('place').value = '';
        document.getElementById('company').value = '';
        document.getElementById('pincode').value = '';

        alert("Form submitted successfully!");
    }
}

function prepopulateForm() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails) {
        document.getElementById("name").value = userDetails.name || '';
        document.getElementById("phone").value = userDetails.phone || '';
        document.getElementById("place").value = userDetails.place || '';
        document.getElementById("company").value = userDetails.companyName || '';
        document.getElementById("pincode").value = userDetails.pinCode || '';
    }
}

function checkPrepopulateButton() {
    const prepopulateButton = document.getElementById("prepopulateButton");
    if (localStorage.getItem('userDetails')) {
        prepopulateButton.disabled = false;
    } else {
        prepopulateButton.disabled = true;
    }
}

window.onload = checkPrepopulateButton;


// 5. Create a form with a text field which when submitted, will change the tab title to whatever is entered, limit the field to 50 characters, 
//otherwise show error message, stay on the same page when submitted(it shouldn't refresh).
document.getElementById('titleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('titleInput').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = "";

    if (titleInput.length > 50) {
        alert( "Title must be 50 characters or less.");
    } else {
        document.title = titleInput;
    }
});


//When control+enter key is pressed show an alert message. 
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
        alert('Control + Enter was pressed');
    }
});
