var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];





// for(var i=0; i<students.length; i++) {
//  console.log(students[i].name);
// }

//------------------------------------

// for(var i=0; i<students.length; i++) {
//  console.log(students[i].age);
// }


console.log(_.chain(students)
			.pluck('age')
			.value()

)

//------------------------------------

// for(var i=0; i< students.length; i++){

// 	console.log(students[i].name + ',' + students[i].city)
// }

//--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// for (var i=0; i<students.length; i++){

// 	console.log(students[i].name + ' ' + 'is from' + ' ' + students[i].city)
// }

//=-=-=-=-=-=-=-=-------=-=-=-=-=-=-=-=--



var olderThan = students.filter(function(student){

	return student.age > 25


}).map(function(student){
 	return student.name + ' ' + ' is older than 25'
 })

// console.log(olderThan)



