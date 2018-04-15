var age = prompt("Age");

if (age >= 13) {
    alert("You are allowed entry!");
} else {
    var requiredAge = 13;
    var d = new Date();
    var years = requiredAge - age;
    var comeYear = d.getFullYear() + years;
    
    alert("Come back in " + comeYear + " or in " + years + " years");
}
