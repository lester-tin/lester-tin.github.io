function handleRadioSelection() {
    const willAttend = document.getElementById("extraFieldYes");
    const willNotAttend = document.getElementById("extraFieldNo");
    const selectedOption = document.querySelector('input[name="entry.1660861660"]:checked').value;

    if (selectedOption === "Yes") {
        willAttend.classList.remove("hidden");
        willNotAttend.classList.add("hidden");
    } else {
        willNotAttend.classList.remove("hidden");
        willAttend.classList.add("hidden");
    }
}

function validateForm() {
    const selectedOption = document.querySelector('input[name="entry.1660861660"]:checked');
    const numbserSeat = document.getElementById("numbserSeat").value;
    const nameOfGuests = document.getElementById("nameOfGuests").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const leaveAMessage = document.getElementById("leaveAMessage").value;

    if (!selectedOption) {
        alert("Please select an option before submitting!");
        return false;
    }

    if (selectedOption.value === "Yes" && (numbserSeat === "" || nameOfGuests === "" || mobileNumber === "")) {
        alert("Please fill out the additional info field!");
        return false;
    } else if(selectedOption.value === "No" && leaveAMessage === "") {
        alert("Please fill out the additional info field!");
        return false;
    } else {
        alert("Form submitted successfully!");
    }
}

function redirectToHome(event) {
    event.preventDefault(); // Prevent form from submitting normally
    // Do your form processing here (like an API call)
    window.location.href = "/home"; // Redirect to home page
}