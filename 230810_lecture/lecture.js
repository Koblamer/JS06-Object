//// Date 2023 - 08 - 10 ////

// ###############################
// ##### OBJECT DECLARATION ######
// ###############################

วิธีการใช้งาน Object จะใช้ {}  <<< ปีกกา เป็นตัวกำหนด scope

// DataTypes
// - Primitive : Boolean,Number,String etc . . .
// - Non-Primotive : Object

// {} == stand for Object / Scope
// { record_1 , record_2 , record_3 , . . .}
// each record => <key_name> : <value>
// <value> เป็น Datatype ไหนก็ได้ any Datatype 
// <key_name> Datatype : String
// record === property (คุณสมบัติ,สิ่งที่มี) ชช าำัขอฟสีำ ยฟรพ


//vvv   <value> เป็น Datatype ไหนก็ได้ any Datatype    vvv
let user = {
    firstName:  'Pavit',
    lastName:  'Pimchanagul',
    age: 99,
    isAdmin: true,
};

console.log(user);

///// vvv    <key_name> Datatype : String     vvv

let user = {
    'firstName':  'Pavit',
    'lastName':  'Pimchanagul',
    'age': 99,
    'isAdmin': true,
};

console.log(user);

///// หรือจะเขียนแบบนี้ก็ได้

let user = {
    firstName:  'Pavit',
    lastName:  'Pimchanagul',
    age: 99,
    isAdmin: true,
    'like human' : true
};

console.log(user);

//-------------
// ###############################
// ### ACCESS, MODIFY, DELETE ####
// ###############################

// Every action NEED <KEY_NAME> !!
// DOT Notation <obj>.<key> === <value>       <obj>.<key> มีค่าเทียบเท่ากับ <value>
// ถ้าไม่มี record => return will be undefined      ถ้าไม่มี  record ค่าที่รีเทริน จะเป็น undefined
// ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้


/ GET, POLL, READ
console.log(user);
console.log(user.firstName === 'Pavit');
console.log(user.lastName === 'Pimchanagul');
console.log(user.age);
console.log(user.isAdmin);
// console.log(user.'like human');


// MODIFY,UPDATE
// มี Syntax : <obj>.<key_name> = newValue

user.firstName = 'Pravit';
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age);

// ADD
// Syntax : <obj>.<key_name> = newValue
user.address = 'bangkok';
console.log(user) ;

// DELETE
// Syntax : deledte <obj>.<key_name>

delete user.isAdmin;
console.log(user);

// ###############################
// ###### NESTED OBJECT ######
// ###############################

const employee = {
    fullName: 'John Doe',
    salary: 500,000,
    address: {
        district: 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand'
    }
};
// เรียกดึงค่ามาใช้                    จะได้ผลลัพธ์แบบนี้
console.log(employee.salary);  // 500,0000
console.log(employee.address);  //
console.log(employee.address.district);  // John Doe500,000Phaya Thai
console.log(employee.address.village); //  

employee.address.province = 'Nonthaburi'
delete employee.address.country;

// Prevent Crash !!
//Dot ใช้กับ Object เท่านั้น!! <obj>.<key>
// ห้ามม ใช้กับ undifined
// วิธีแก้ optional chaining => <undefined>?.<key>  ใส่ ? เข้าไป
console.log(employee.addr); 
console.log(employee.addr.province); // คำตอบจะ ERROR  เพราะ สิ่งอยู่หน้า province คือ undifined // undifined.province

แก้ด้วยการใส่ ?
console.log(employee.addr?.province);
console.log(employee.address?.province);
console.log(employee.address?.village);




