/* Opgave 1*/
console.group("opgave 1");

const dataObjectByMariePierreLessard = {
    itemsArrayByMariePierreLessard: ["opgave 1", "opgave 2", "opgave 3", "opgave 4", "opgave 5"]
};

// tilføj ny data i en array i et dataobjekt; kig i Array codelab for hint ;)
/* The push() method is a mutating method. It changes the length and the content of this.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push */
dataObjectByMariePierreLessard.itemsArrayByMariePierreLessard.push("opgave 6");
console.log(dataObjectByMariePierreLessard.itemsArrayByMariePierreLessard);
/* Checked in the console */

console.groupEnd();


/*opgave 2*/
console.group("opgave 2");

// fjern item 2 fra arrayen i dataobjektet; kig i Array codelab for hint ;)
/* Note: splice removes items from the index specified. Here, the starting point is the first one, and the number of items removed from that point is 1. */
/* The splice() method is a mutating method. It may change the content of this.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice */
dataObjectByMariePierreLessard.itemsArrayByMariePierreLessard.splice(1, 1);
console.log(dataObjectByMariePierreLessard.itemsArrayByMariePierreLessard);
/* Checked in the console */

console.groupEnd();


/*opgave 3*/
console.group("opgave 3");

/* Since splice is a mutating method, this no longer has "opgave 2" at index 1. Below, "opgave 3" is getting replaced by "changed" because it is now at index 1. */
dataObjectByMariePierreLessard.itemsArrayByMariePierreLessard.splice(1, 1, "changed");
console.log(dataObjectByMariePierreLessard.itemsArrayByMariePierreLessard);
/* Checked in the console */

console.groupEnd();




