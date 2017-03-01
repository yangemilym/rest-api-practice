# Rest API Practice

We need to create a RESTful API for a school system. There will be teachers, students, and classes.

You will be using MongoDB and the Mongoose ORM for data persistence, and express with NodeJS to create an http web server.

First, Install [MongoDB](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/) Once installed, run the command `mongod` to start a local mongoDB server.

## General Advice

It's highly advised to install [POSTMAN](https://www.getpostman.com/) to test your routes as you build it out.

Here's how one reasonable way to approach creating an API:

1. Scaffold the app structure so that every route in the basic requirements is responding with a default response  
2. Create your mongoose models to get your data models to match your schema.
3. Work on one route at a time according to the requirements below.
4. Rinse and repeat

## Basic Requirements

Create a RESTful API that adheres to the below documentation:

- [ ] Teachers

```plaintext
{GET} /api/teachers
Lists information for every teacher
```

```plaintext
{GET} /api/teachers/:id
Lists the information about one teacher
  Response
    id   : INTEGER
    name : STRING
    email: STRING
```

```plaintext
{POST} /api/teachers
Creates a teacher
  Expected Body
    name : STRING
    email: STRING
  Response
    success: BOOLEAN
    id     : INTEGER
    err    : STRING
```

- [ ] Students

```plaintext
{GET} /api/students
Lists information for every student
  Response
    success : BOOLEAN
    err     : STRING
    students: ARRAY<{
      id   : INTEGER
      name : STRING
      email: STRING
    }>
```

```plaintext
{GET} /api/students/:id
Lists information for one student
  Response
    success: BOOLEAN
    id     : INTEGER
    name   : STRING
    email  : STRING
    err    : STRING
```

```plaintext
{POST} /api/students
Creates a student
  Expected Body
    name : STRING
    email: STRING
  Response
    success: BOOLEAN
    id     : INTEGER
    err    : STRING
```

- [ ] classes

```plaintext
{GET} /api/classes
Lists information for all classes
  Response
    success: BOOLEAN
    err    : STRING
    classes: ARRAY<{
      id  : INTEGER
      code: STRING
      name: STRING
    }>
```

```plaintext
{GET} /api/classes/:id
Lists information for one class
  Response
    success: BOOLEAN
    id     : INTEGER
    code   : STRING
    name   : STRING
    err    : STRING
```

```plaintext
{POST} /api/classes
Creates a class
  Expected Body
    code: STRING
    name: STRING
  Response
    success: BOOLEAN
    id     : INTEGER
    err    : STRING
```

## Other Requirements

- [ ] Modify the `{POST} /api/students` route to create classroom associations when a student is created.

Note: Because we are working with MongoDB–a noSQL database–we have the option of storing an array of associated ids on the students model itself.

```plaintext
{POST} /api/students
Creates a student
  Expected Body
    name: STRING
    email: STRING
    classes: ARRAY<INTEGER> (Array of class ids)
  Response
    success: BOOLEAN
    id     : INTEGER
    err    : STRING
```

- [ ] Create a route for associating an existing student with a set of classes

```plaintext
{PUT} /api/students/:id/editClasses
Updates a student's classes
  Expected Body
    classes: ARRAY<INTEGER> (Array of class ids)
  Response
    success: BOOLEAN
    id     : INTEGER
    err    : STRING
```

## Final Requirement

Render the information using a front-end framework of your choice.

- [ ] Create a view component to render all students
- [ ] Create a view component to render all teachers
- [ ] Create a view component to render all classes
- [ ] Create a view component with a form to create a teacher & students.

## Extra Credit

- [ ] Implement client-side routing with a library appropriate for your front-end framework. Don't render all the components at once, but swap the components depending on the browser's URL address.
- [ ] Add form validation
- [ ] Add styling to your app
