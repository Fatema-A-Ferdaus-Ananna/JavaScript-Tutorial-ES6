//startsWith(searchingString, position) -> check a string starts with another string

const message = "Today is 30 April, Tuesday";
document.write(`Message = ${message} <br>`);
document.write(`The sentance starts with string 'Today' : ${message.startsWith('Today')}<br><br>`);
document.write(`The sentance at index 6 starts with string 'Today' : 
                ${message.startsWith('Today', 6)} <br><br>`);

//endWith(searching, length) --> check a string ends with another string

document.write(`The sentance ends with string 'Today' : ${message.endsWith('Today')}<br>`);
document.write(`The sentance ends with string 'Tuesday' : ${message.endsWith('Tuesday')}<br><br>`);


//includes(searching, position) --> check if a string contains another string
document.write(`The sentance contains string 'today' : ${message.includes('today')}<br>`); //case sensitie
document.write(`The sentance ends with string 'Today' : ${message.includes('Today')}<br>`);


//all these methods are case sensitive

