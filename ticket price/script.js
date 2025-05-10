// write a programme to calculate ticket price based on age
function calculateTicketPrice(age){
    if (age < 12){
        return 5;
        } else if (age < 18){
            return 10;
        }else if (age < 60){
            return 20;
        } else {
            return 15;
        }
    }
    let age = parseInt(prompt("Enter your age in numbers"))
    if (!isNaN(age) && age >=0){
        let price = calculateTicketPrice(age);
        alert(`for age ${age},the ticket price is ${price}`);
    }else {
        alert("Please enter a valid age")
    }