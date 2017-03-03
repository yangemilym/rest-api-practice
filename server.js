var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var models = require("./models/index")
var Teacher = require("./models/index").Teacher
var Student = require('./models/index').Student
var Class = require('./models/index').Class

// var morgan = require('morgan')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan());

app.get('/', function(req, res){
	res.json("get request")
})

// app.get('/api/teachers', function(req, res){

// });

app.post('/api/teachers', function(req, res){


	Teacher.count({}, function(err, count){
		if(err){
			console.log("error on count")
		} else {
			Teacher.create ({
				 id: count,
				 name : req.body.name,
				 email : req.body.email
			}, function(err, teacher){
				if (err){
					console.log("there is an error in saving")
				} else {
					res.send('successfully posted')
					console.log("posted this", teacher)

				}
			});
		}
	})

	// // console.log('inside teacher post')
	// teacher.save(function(err){
	// 	if (err) {return }
	// }).then(function(result){
	// 	res.send('sucessfully posted')
	// })
});

app.get('/api/teachers', function(req, res){
	Teacher.find(function(err, teachers){
		if(err){
			console.log("failed to get teachers")
			return;
		}
		if (teachers){
			console.log('successfully getting teachers')
			res.json(teachers)
		}

	});
})


// api.get('api/teachers/:id', function(req, res){
// 	Teachers.find(function(err, teachers){
// 		if(err){
// 			console.log("failed to get teacher by id")
// 			return;
// 		}
// 		if(teachers){
// 			console.log('successfully got teachers with id')
// 			res.json(teachers.array.pull(ObjectId))
// 		}
// 	})
// })

app.get('/api/teachers/:id', function(req, res){
	Teacher.findOne({'id': req.params.id}, function(err, teacher){
		if(err){
			console.log("error finding the teacher")
		} else {
			res.send(teacher)
		}
	})
})



app.post('/api/students', function(req, res){
	Student.count({}, function(err, count){
		if(err){
			console.log("error posting to students")
			return;
		} else {
			// var studentArray = []
			// console.log(req.body.classes[0], "classes")
			Student.create({
				id: count,
				name: req.body.name,
				email: req.body.email,
				classes: req.body.classes
			}, function(err, student){
				if (err){
					console.log("there was an error in saving student")
				} else{
					res.send('sucess in saving student')
					console.log('posted this', student)
				}
			})
		}
	})
})


app.get('/api/students', function(req, res){
	Student.find(function(err, students){
		if(err){
			console.log('students not found')
			return;
		}
		if(students){
			console.log('successfully retrieved students')
			res.json(students);
		}
	})
})

app.get('/api/students/:id', function(req, res){
	console.log(req.params.id, "id")
	Student.findOne({"id": req.params.id}, function(err, student){
		if(err){
			console.log('error in getting student by id')
		} else{
			res.send(student)
		}
	})
})

app.post('/api/classes', function(req, res){
	Class.count({}, function(err, count){
		if(err){
			console.log("error in creating count")
			return;
		} else {
			Class.create({
				id: count,
				name: req.body.name,
				code: req.body.code
			}, function(err, classes){
				if(err){
					console.log('error in creating class')
				} else {
					res.send('class successfully created')
					console.log('posted this', classes)
				}
			})
		}
	})
});


app.get('/api/classes', function(req, res){
	Class.find({}, function(err, classes){
		if(err){
			console.log('classes not found')
			return;
		} 
		if(classes){
			console.log('successfully retrieved classes')
			res.json(classes);
		}
	})
})

app.get('/api/classes/:id', function(req, res){
	Class.findOne({'id': req.params.id}, function(err, singleclass){
		if (err){
			console.log('there is an error finding class by id')
		} else {
			res.send(singleclass)
		}
	})
})


app.listen(3000);
console.log("listening on port 3000")
