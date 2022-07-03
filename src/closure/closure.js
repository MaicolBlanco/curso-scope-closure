function greeting(params) {
    let userName = 'Martin';

    function displayUserName(params) {
        return `Hello ${userName} y Esteban!`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); 
console.log(g());