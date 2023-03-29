//declaring variable goes here
let stateInput = document.getElementById('stateInput');
let states = ["Alabama","Alaska","Arizona",'Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
//all form answers that is required to be filled out
let requiredField = document.querySelectorAll('[class="required"]');
let filledOut = false;
let feedbackForm = document.getElementById("feedbackForm");
//listing all the states for state dropdown
for (let i=0; i < 50; i++) {
    let stateOptions = document.createElement("option");
    stateOptions.innerHTML=states[i];
    stateInput.appendChild(stateOptions);
}
//after clicking submit, it will warn the user if not all the required question isn't filled out. Otherwise, it just thanks the user for volunteering
let clickSubmitButton = function () {
    filledOut = true;
    for (let i = 0; i < requiredField.length; i++) {
        if (requiredField[i].value.length == 0) {
            filledOut = false;
        }
    }
    if (filledOut == false){
        alert("Please fill out the entire form");
    } else {
        alert("Thank you for volunteering. See you soon!");
    }
}
let submitFeedback = function () {
    if(feedbackForm.value.length == 0){
        alert("No questions or comments typed");
    } else {
        alert("Sent, thank you!");
    }
}
