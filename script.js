function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        showError("Invalid Input");
    }
}

function showError(message) {
    var errorMessageElement = document.createElement("div");
    errorMessageElement.classList.add("error-message");
    errorMessageElement.textContent = message;
    document.body.appendChild(errorMessageElement);

    setTimeout(function() {
        errorMessageElement.style.opacity = "1";
        setTimeout(function() {
            errorMessageElement.style.opacity = "0";
            setTimeout(function() {
                errorMessageElement.remove();
            }, 2000); 
        }, 2000); 
    }, 100); 
}
