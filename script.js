// JS FILE for SIGN-UP FORM //

function checkPass() {
    let passwords = document.querySelectorAll("input[type='password']");

    if (passwords[1].value !== '') {
        if (passwords[0].value !== passwords[1].value) {
            for (const password of document.querySelectorAll("input[type='password']")) {
                password.style.border = "2px solid red";
            }

            let error = document.createElement("small");
            let errorText = document.createTextNode("* Passwords do not match");
            error.appendChild(errorText);
            error.style.color = "red";

            document.querySelector("form :nth-child(5)").appendChild(error);
        }
    }
}