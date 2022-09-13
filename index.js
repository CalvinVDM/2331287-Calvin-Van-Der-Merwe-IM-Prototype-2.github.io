function getCompliment(){
    let newCompliment = document.getElementById("compliment");
    let compliments = [];
    compliments[0] = "You look good today";
    compliments[1] = "You have style";
    compliments[2] = "You have a great personality";
    compliments[3] = "You have great hair";
    compliments[4] = "You have the most amazing smile";
    let i = Math.floor(Math.random() * compliments.length);
    newCompliment.innerHTML =  compliments[i];
}