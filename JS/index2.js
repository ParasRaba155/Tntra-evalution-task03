let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
let email = localStorage.getItem('email');
let phone = localStorage.getItem('phone');
let gender = localStorage.getItem('gender');
let times = JSON.parse(localStorage.getItem('times'));
console.log(typeof(times));
console.log(times);
// let sunday = localStorage.getItem('sunday');
// let monday = localStorage.getItem('monday');
// let tuesday = localStorage.getItem('tuesday');
// let wednusday = localStorage.getItem('wednusday');
// let thursday = localStorage.getItem('thursday');
// let friday = localStorage.getItem('friday');
// let saturday = localStorage.getItem('saturday');

// if (sunday === undefined || sunday === null){
//     sunday = "";
// }

// if (monday === undefined || monday === null){
//     monday = "";
// }

// if (tuesday === undefined || tuesday === null){
//     tuesday = "";
// }

// if (wednusday === undefined || wednusday === null){
//     wednusday = "";
// }

// if (friday === undefined || friday === null){
//     friday = "";
// }

// if (thursday === undefined || thursday === null){
//     thursday = "";
// }

// if (saturday === undefined || saturday === null){
//     saturday = "";
// }


$('#displayArea').
        append(
            "<tr><td>" + name + 
            "</td><td>" + age +
            "</td><td>" + email +
            "</td><td>" + phone +
            "</td><td>" + gender +
            "</td><td>" + times[0] +
            "</td><td>" + times[1] +
            "</td><td>" + times[2] +
            "</td><td>" + times[3] +
            "</td><td>" + times[4] +
            "</td><td>" + times[5] +
            "</td><td>" + times[6] +
            "</td></tr>" 
        )
