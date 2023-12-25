let found: boolean = true;
let grade: number = 88.6;
let firstName: string = 'Pawel';
let lastName: string = 'Buczek';

console.log(found);
console.log("Grade is " + grade);

console.log('Hi ' + firstName + ' ' + lastName);
console.log(`Hi ${firstName} ${lastName}`);
console.log(''.concat('Hi ', firstName, ' ', lastName));
console.log(['Hi', firstName, lastName].join(' '));