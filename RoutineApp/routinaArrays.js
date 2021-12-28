// todo: js single quote, tasks WITHINTG vs

// Tasks

/* 

Do these tasks in order. Below you will find functions defined for each task. 
Make sure each task is performed within its corresponding function. 
Do NOT change the console.log lines. 
Finished solution should ONLY have the console.log lines already defined below.

1. Add 'Internship' to morningRoutine array. Make sure it appears at the end of the array.
2. Add 'Internship' to the middayRoutine array as the first item.
3. Remove Gym from the middayRoutine array.
4. Add 'Rest' as the first item to the nighttimeRoutine array.
5. Add 'Wind Down' to nighttimeRoutine array between Blogs/Socials and Read.
6. Add 'Sleep' as the last item in nighttimeRoutine array.
7. Remove all items from midnightRoutine array.
*/

var morningRoutine = [
    { text: 'monring routine', isChecked: false },
    { text: 'studying', isChecked: false },
    { text: 'gym/routine', isChecked: false } 
];

var nighttimeRoutine = [
    { text: 'gym', isChecked: false },
    { text: 'read', isChecked: false }
];

var midnightRoutine = [
    { text: 'watch movie', isChecked: false },
    { text: 'read', isChecked: false }
];


morningRoutine = addItem(morningRoutine, morningRoutine.length, 'internship');

middayRoutine = addItem(middayRoutine, 0, 'Internship');

nighttimeRoutine = addItem(nighttimeRoutine, 0, 'Rest');

nighttimeRoutine = addItem(nighttimeRoutine, nighttimeRoutine.length, 'Sleep');

nighttimeRoutine = addItem(nighttimeRoutine, 2, 'Wind Down');

function addItem(routine, position, itemText){
    let item = { text: itemText, isChecked: false };
    routine.splice(position, 0 , item)

    return routine;

    
}

function deleteItem(routine, position, item){
    routine.splice(position, 0 , item)

    return routine;
}

function removeGymMidday() {
    // your code here...
    // removing second item in the array using splice 
    middayRoutine.splice(1);
    return middayRoutine;
}

function removeAltlMidnight() {
    // your code here...
    midnightRoutine.shift();
    return midnightRoutine;
}

console.log('addInternshipLastMorning:', morningRoutine);
console.log('addInternshipFirstMidday:', middayRoutine);
console.log('removeGymMidday:', removeGymMidday());
console.log('addRestFirstItemNighttime:', nightimeRoutine);
console.log('addWinddownBetweenNighttime:', nighttimeRoutine);
console.log('addSleepLastNighttime:', nighttimeRoutine);
console.log('removeAllMidnight:', removeAllMidnight());

