const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
function whileLoop(arr) {
    let index = 0;
    while (index < arr.length) {
        console.log(arr[index]);
        index++;
    }
}

// Write a for loop that prints out the contents of ingredients:
function forLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
function backwards(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

whileLoop(ingredients);
forLoop(ingredients);
backwards(ingredients);