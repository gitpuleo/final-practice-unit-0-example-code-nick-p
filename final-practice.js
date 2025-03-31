//Task 3

/* IF location data exists
    COPY location data to new variable
    SORT location data
    Move photo to new directory
ELSE
    Ignore photo


    Here, I am demonstraating Control structure and logic, where the program is checking whether the 
    photo has metadata, copying the metadata if it true, and ignoring otherwise. In addition, using the Boolean
    'true' for the condition is a skill from Values, Data Types, and Operations. Booleans are one of the
    primitive data types, and they make all sorts of operations possible including this if else conditional.
    Of course at this time the other functions I want it to have are beyond me, but this would be the start of creating a branching
    program that sends photos in different directions based on a conditional "has location metadata".
*/
let locationData = true;

if (locationData) {
    let copiedLocationData = locationData;
    console.log("Copied: ", copiedLocationData);
} else {
    console.log("No data");
}

/*
LET location data be some coordinates

In Stringing Characters Together, we learned about how data can be stored as strings, and how that data will
often need to be checked and cleaned up, then stored in a new variable, for our programs to make use of it.
Here my porgram is trimming any blank space off the location metadata, then storing the fixed data
to be used by the application.
*/

let locationMetaData = "   some coordinates ";
let storedLocationMetaData = locationMetaData.trim();
console.log(storedLocationMetaData);

/* WHILE photos remain to be processed
    continue scanning and copying metadata

Here I am using knowledge I got from the Working With Loops lesson to imagine a while loop that ensures
that while there are still photos in the indicated directory left to be processed, it will keep running the 
code for processing. I even made it print a message showing your progress through the batch!

*/

let photoBatch = ["photo.jpg", "photo2.jpg", "photo3.jpg", "photoN.jpg"];
while (photoBatch.length > 0) {
    let processingPhoto = photoBatch.pop();
    console.log(`Now processing photo ${processingPhoto} of ${photoBatch.length}`);
}

/*
LET empty array 
PUSH coordinate data

In Building Arrays, we learned how to declare empty arrays that are ready to recieve new values pushed
to them--values like the saved location data I am imagnging working with.

*/

let locationDataArray = [];

locationDataArray.push("10", "20", "30", '40');
console.log(locationDataArray);

/*Let location data in set range
FILTER to new array
 
Then, from Using Arrays, we learned methods for searching, extracting, and changing elements of an array. 
In my case, I want to use filter to find all the location values that are near each other to store them in 
a new array which will then be connected to a pin on my globe. 
*/

let similarRangeLocationData = locationDataArray.filter(coord => coord >= 25);
console.log(similarRangeLocationData);


