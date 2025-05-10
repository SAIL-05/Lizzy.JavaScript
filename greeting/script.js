
// write a programme to greet based on time
function getGreeting(){
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12){
        return "Good Morning"
    } else if (hours < 18){
        return "Good Afternoon";
    }else {
        return "Good Evening"
    }
}
let name = prompt("please enter your name: ");
if (name && name.trim() !==""){
    alert(`${getGreeting()}, ${name}!`);
}else{
    alert(getGreeting() + "!");
}