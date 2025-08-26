/* opgave 1 */
console.group("opgave 1");

/* Several things are nested in the following constant.
The data object toDoAppObjectByMariePierreLessard contains 2 objects (curly brackets): errandsByMariePierreLessard and homeworkByMariePierreLessard. Each object is meant to be a list with a name/title and elements ("opgaver"/tasks) in the list.
The tasks go in an array (square brackets) inside of each nested object.
*/
const toDoAppObjectByMariePierreLessard = {
    errandsByMariePierreLessard: {
        name: "Groceries to buy",
        items: [
            { text: "Milk", done: false },
            { text: "Juice", done: false },
            { text: "Fruit", done: true },
            { text: "Eggs", done: true },
            { text: "Bread", done: false },
            { text: "Pet food", done: true }
        ]
    },
    homeworkByMariePierreLessard: {
        name: "School work",
        items: [
            { text: "Javascript assignment for 31/08", done: false },
            { text: "Research on dynamic lists/DOM manipulation", done: false },
            { text: "Research on array methods", done: true }
        ]
    }
};
console.log(toDoAppObjectByMariePierreLessard);
/* Checked in the console */

console.groupEnd();


/* opgave 2 */
console.group("opgave 2");

/* This assignment is not finished */
function addItemByMariePierreLessard(listKey, itemText) {
    const list = todoApp[listKey];
    if (list) {
        const newItem = {text: itemText, done: false };
        list.items.push(newItem);
    };
    console.log(todoApp);
}

addItemByMariePierreLessard("errandsByMariePierreLessard", "Vegetable oil");

                

console.groupEnd();


/* opgave 3 */
console.group("opgave 3");

console.groupEnd();
