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

    //constant
    const selectedOption = document.querySelector('input[name="entry.1660861660"]:checked');
    const noSeat = document.getElementById("numbserSeat").value;
    const nameOfGuests = document.getElementById("nameOfGuests").value;
    // const mobileNum = document.getElementById("mobileNumber").value;
    const leaveAMessage = document.getElementById("leaveAMessage").value;

    //document-Ids
    document.getElementById("numberSeat-error").textContent = "";
    document.getElementById("nameGuests-error").textContent = "";
    document.getElementById("mobileNumber-error").textContent = "";
    document.getElementById("leaveComment-error").textContent = "";

    let isValid = true;

    if(selectedOption.value === "Yes"){
        const noSeatRegex = /^[0-8]{1}$/;
        if (!noSeatRegex.test(noSeat)) {
            document.getElementById("numberSeat-error").textContent = "A maximum of 8 seats allocated per group.";
            isValid = false;
        }
        if(nameOfGuests === ""){
            document.getElementById("nameGuests-error").textContent = "Required field. Cannot be left blank.";
            isValid = false;
        }
        // const phoneRegex = /^[0-9]{11}$/;
        // if (!phoneRegex.test(mobileNum)) {
        //     document.getElementById("mobileNumber-error").textContent = "Phone must be 11 digits, starting with 09.";
        //     isValid = false;
        // }
    } else if(selectedOption.value === "No"){
        if(leaveAMessage === ""){
            document.getElementById("leaveComment-error").textContent = "Required field. Cannot be left blank.";
            isValid = false;
        }
    } 

    return isValid;
}
