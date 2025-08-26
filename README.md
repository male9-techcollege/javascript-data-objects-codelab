# javascript object codeLab
Åben index.html i en live server, og følg instruktioner. du skal bruge filer i fil strukturen, og der vil blive nævnt hvilke filer på opgave siderne.

## selv evaluering.
opgaverne er indelt i grøn gul og røde farver, med grøn som de letteste og gul som medium og rød som svære. sorte opgaver er meget svære. hvis du løser alle opgaver på gult niveau og tager hul på de røde så er du på niveau med målpinde for opgaverne, men det betyder ikke at du skal holde op med at prøve at løse de svære opgaver

-----------------------------------------------------
Instrukser på Teams:
-----------------------------------------------------
Data objects selvstudie.
Forfalder i dag kl. 15:00
Vejledning
I dag skal du arbejde selvstændigt med dataobjekter i JavaScript. Det er en vigtig del af at kunne gemme og arbejde med information i dine webapps.

Din opgave:
Brug mindst 30 minutter på at researche, hvad dataobjekter er, og hvordan de bruges i JavaScript.
Søg efter forklaringer og eksempler – gerne både tekst og video.(1) 
Prøv at finde eller lave eksempler på:
- Hvordan man kan gemme information om elever i en klasse som dataobjekter. Fx navn, alder, interesser, fravær osv.(2)
- Hvordan kan man strukturere det, så det er nemt at bruge i en app?(3)
- Hvordan en todo-liste app kan bruge dataobjekter. Fx opgaver med titel, deadline, om den er færdig eller ej.(4)
- Hvordan kan man gemme og vise disse data?(5)

Tips:
Brug Google, YouTube eller MDN Web Docs til at finde gode forklaringer.
Tænk over, hvordan du selv kunne bruge dataobjekter i dine egne projekter.
Du må gerne skrive små kodeeksempler og teste dem i din browser eller i et online editor som JSFiddle eller CodePen.

Når du er færdig med at researche. skal du producere codelab omkring data objects (se på Moodle, https://moodle.techcollege.dk/course/view.php?id=21591) 
Relateredde kilder:
https://www.w3schools.com/js/js_arrays.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Fravær er baseret på om du comitter til dit codelab. du bestemmer selv hvornår på dagen du arbejder.

-----------------------------------------------------
Besked til læreren
-----------------------------------------------------
I går var Visual Studio Code super langsom. Jeg tror, at det var, fordi Git prøvede at registrere alle ændringer løbende. Der var en pause, hver gang jeg skrev få ord. Som konsekvens kommer jeg til at skrive direkte på GitHub så meget som muligt. Den nærværende besked var skrevet i GitHubs editor.

-----------------------------------------------------
Forskning
-----------------------------------------------------
(1) "A data object is a structure for describing a data entity by grouping a set of related fields. For example, a supermarket Online orders application might contain an Customer data object. As seen in the following image, the Customer data object includes fields that describe the supermarket's customer, such as First name, Last name, Full name, Email, and Phone. (...) Collectively, the different fields define the structure of the data object.
You can extend the structure of a data object by referencing other data objects. When one data object references a second data object, the fields in the second data object become part of the referencing data object. Any data object can be referenced either once or multiple times, depending on the need." Pegasystems, https://academy.pega.com/topic/understanding-data-objects/v1

Eksempel: dataobjekter kan bruges til at lave en indkøbskurv i JavaScript. 
* Web Dev Simplifieds video "JavaScript Shopping Cart Tutorial for Beginners", https://www.youtube.com/watch?v=YeFzkC2awTM, viser lidt hvordan, men scripten henter dataene i DOM'en i stedet for at bruge en array.
* Bro Codes video "Learn JavaScript OBJECTS in 7 minutes!", https://www.youtube.com/watch?v=lo7o91qLzxc&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=38, taler om dataobjekter med "key-value pairs" (en indledning til "object-oriented programming"). 

(2) En måde at gemme "key-value pairs" er at bruge "local storage". Se vejledningerne på W3 Schools, https://www.w3schools.com/jsref/prop_win_localstorage.asp, og på MDN, https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

"localStorage is a window object property, which makes it a global object that can interact with and manipulate the browser window. It can also be used in combination with other window properties and methods. (...) The Window interface features a wide range of functions, constructors, objects, and namespaces. Window.localStorage is a read-only property that returns a reference to the local storage object used to store data that is only accessible to the origin that created it. (...) While you can store small amounts of data with localStorage, it’s not suitable for large datasets. localStorage is accessible to anyone who uses the device, so you shouldn’t use it to store sensitive information. You can use it to store user preferences, like language or theme. You can also use it to cache data if you use it frequently. localStorage can store form data that won’t be lost if the user closes the browser.
If you have an application that requires you to log in, localStorage can be used to keep your session data. You can remain logged in even after closing and reopening the browser. (...)
The key-value pairs represent storage objects, which are similar to objects, except they remain intact during page loads and are always strings. (...)
It’s important to note that localStorage data loaded in an incognito browsing session will be cleared once the last private tab is closed. (...)
LocalStorage, on the other hand, provides a larger storage capacity, often ranging from 5-10 MB per origin. It is suited for storing larger amounts of data that need to persist across multiple sessions. (...)
Storing data with localStorage is more secure than storing with cookies, and you have more control of your data. Lastly, localStorage has a larger storage capacity compared to cookies. While cookies can only store four kilobytes of data, localStorage can store up to five megabytes of data. (...) Additionally, localStorage can only store strings, so if you want to store other data types, you’ll have to convert them to strings. And finally, storing too much data with localStorage can slow down your application." Nosa Obaseki, "localStorage in JavaScript: A complete guide", LogRocket.com, https://blog.logrocket.com/localstorage-javascript-complete-guide/

(3) En god datastruktur at bruge i en app er en "key-value pair".

"A key-value pair is a data type that includes two pieces of data that have a set of associated values and a group of key identifiers. Within a key-value pair, there are two related data elements. The first is a constant used to define the data set. The other is a value, which is a variable belonging to the data set. For example, a car might be a key, while the car's color, model or brand could be the values. (...)
A key-value store is a non-relational database that consists of key-value pairs. It uses the relations between key-value pairs to store and analyze data. Programmers use key-value stores to store data quickly, and they provide ways to retrieve and update data within a database. Key-value stores are much more flexible than other database storage systems because they store data in an array, which can accommodate different data types and dimensions, as opposed to other databases that store data in tables." Indeed, https://www.indeed.com/career-advice/career-development/key-value-pair

"Value: The data associated with the key. It can be of any data type, including strings, numbers, arrays, objects, functions, etc. (...) You can access the values in an object using two methods: 1. Dot Notation: The most common way to access values. 2. Bracket Notation: Used when the key is a variable or contains special characters." Pravin M, "Key-Value Pair in JavaScript", Medium.com, https://frontendinterviewquestions.medium.com/key-value-pair-in-javascript-237300ce140f

(4-5) Brugerinput i en formular til en huskeliste kan hentes/findes med JavaScript (.value) og så gemmes, f.eks. i "local storage" (localStorage.setItem()). Felterne i formularen til opgaver kan inkludere title, brødtekst og frist, men også kategorier som "personligt/fritid" eller "professionelt/arbejde" og de andre detaljer, som designeren vil have. 

(5) Hvis dataene er gemt i "local storage", kan de vises blandt andet med localStorage.getItem() og metoderne key(), JSON.stringify() og JSON.parse(). Se Nosa Obaseki, "localStorage in JavaScript: A complete guide", LogRocket.com, https://blog.logrocket.com/localstorage-javascript-complete-guide/
Dataene kan eventuelt gemmes ved keyup med en "event listener". Se https://github.com/johnlindquist/scratchpad og den tilhørende artikel: https://egghead.io/lessons/javascript-avoid-losing-text-when-refreshing-the-browser-with-localstorage 
