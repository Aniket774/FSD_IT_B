document.getElementById("register").addEventListener("submit", function(event) {
    if (!validate(event)) {
        event.preventDefault(); 
    }
});

function validate(event) {
    const mono = document.getElementById("mobile");
    if (!/^\d{10}$/.test(mono.value)) {
        alert("Mobile number is invalid. Please enter a 10-digit number.");
        return false; 
    }
     return true; 
}