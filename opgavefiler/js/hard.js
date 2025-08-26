/* opgave 1 */
console.group("opgave 1");

/* Several things are nested in the following constant.
The data object toDoAppObjectByMariePierreLessard contains 2 objects (curly brackets): errandsByMariePierreLessard and homeworkByMariePierreLessard. Each object is meant to be a list with a name/title and elements ("opgaver"/tasks) in the list.
The tasks go in an array (square brackets) inside of each nested object, which contains key-value pairs.
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

/* The values of listKey and itemText become known when the function addItemByMariePierreLessard is called. */
function addItemByMariePierreLessard(listKey, itemText) {
    const listOfToDosByMariePierreLessard = toDoAppObjectByMariePierreLessard[listKey];
    if (listOfToDosByMariePierreLessard) {
        /* I.e. if that list exists */
        const newItemByMariePierreLessard = {text: itemText, done: false };
        /* The new task gets added to the array after the key items. */
        listOfToDosByMariePierreLessard.items.push(newItemByMariePierreLessard);
    };
    console.log(toDoAppObjectByMariePierreLessard);
};

/* The function above is called. */
addItemByMariePierreLessard("errandsByMariePierreLessard", "Vegetable oil");
/* Checked in the console */

console.groupEnd();


/* opgave 3 */
console.group("opgave 3");

/* The values of listKey and itemNr become known when the function toggleItemDoneByMariePierreLessard is called. */
function toggleItemDoneByMariePierreLessard(listKey, itemNr) {
    const listOfToDosByMariePierreLessard = toDoAppObjectByMariePierreLessard[listKey];
    if (listOfToDosByMariePierreLessard) {
        /* I.e. if that list exists */
        const itemByMariePierreLessard = listOfToDosByMariePierreLessard.items[itemNr];
        if (itemByMariePierreLessard) {
        /* I.e. if that item exists */
                    itemByMariePierreLessard.done = !itemByMariePierreLessard.done;
                    /* I.e. if the boolean value of done was true, it becomes false thanks to the above, and vice versa. */
        };
    };
    console.log(toDoAppObjectByMariePierreLessard);
};

toggleItemDoneByMariePierreLessard("homeworkByMariePierreLessard", 1);
/* Checked in the console */

console.groupEnd();
