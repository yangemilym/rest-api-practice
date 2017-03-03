var mongoose = require('mongoose');

var mongoDb = 'mongodb://localhost:27017/schoolDb'
mongoose.connect(mongoDb);

var Schema = mongoose.Schema;
// var ObjectId = mongoose.Schema.Types.ObjectId

var teachersSchema  = new Schema ({
	"id": Number,
    "name" : String,
    "email" : String
});

var studentsSchema  = new Schema ({
    "id" : Number,
    "name" : String,
    "email" : String,
    "classes" : Array
});

var classesSchema  = new Schema ({
    "id" : Number,
    "name" : String,
    "code" : String
});

var Teacher = mongoose.model('Teacher' ,teachersSchema);
var Student = mongoose.model('Student', studentsSchema);
var Class = mongoose.model('Class', classesSchema);


// exports.Teacher = Teacher;
// exports.Student = Student;
// exports.Class = Class; 

module.exports = {
	Teacher: Teacher,
	Student: Student,
	Class: Class
}

// Teacher.remove({}, function(err) { 
//    console.log('Teacher collection removed') 
// });


// Student.remove({}, function(err) { 
//    console.log('Student collection removed') 
// });


// Class.remove({}, function(err) { 
//    console.log('Class collection removed') 
// });