/* opgave 1 */

/* The following is not part of the assignment. It groups console logs for each assignment. */
/* The console.group() static method creates a new inline group in the Web console log, causing any subsequent console messages to be indented by an additional level, until console.groupEnd() is called.
https://developer.mozilla.org/en-US/docs/Web/API/console/group_static */
console.group("opgave 1");

/* Trailing commas (sometimes called "final commas") can be useful when adding new elements, parameters, or properties to JavaScript code. If you want to add a new property, you can add a new line without modifying the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing code might be less troublesome.
JavaScript has allowed trailing commas in array literals since the beginning. Trailing commas are now also allowed in object literals, function parameters, named imports, named exports, and more.
JSON, however, disallows all trailing commas. (...)
JavaScript allows trailing commas wherever a comma-separated list of values is accepted and more values may be expected after the last item. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
*/
const personByMariePierreLessard = {
    name: "Jean-Marc",
    age: 60,
    job: "foredragsholder"
};
console.log(personByMariePierreLessard);
/* Checked in the console */

console.groupEnd();


/* opgave 2 (øvelse om udskrivning til konsolen) */

/* The following is not part of the assignment. It groups console logs for each assignment. */
console.group("opgave 2");

console.log(personByMariePierreLessard.name);       // "Jean-Marc"
console.log(personByMariePierreLessard.job);        // "foredragsholder"
console.log(`${personByMariePierreLessard.name} arbejder på deltid som ${personByMariePierreLessard.job}.`);
/* Checked in the console */

console.groupEnd();


/* opgave 3 */

/* The following is not part of the assignment. It groups console logs for each assignment. */
console.group("opgave 3");
                
delete personByMariePierreLessard.age;
console.log(personByMariePierreLessard);
/* Checked in the console */

console.groupEnd();

