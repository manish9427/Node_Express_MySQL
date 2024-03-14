# npm

# nodemom

# npm i express

# login and SignUp

- username, email, password, Name, Phone => SignUp
- username or email or number + password => Login

# Body-parser

Body-parser is a middleware for handling JSON, Raw, Text, and URL-encoded form data. It is commonly used in Node.js web applications, particularly those built with frameworks like Express.js.

In a typical Node.js/Express.js application, when you receive a POST request with data, that data is made available in the req.body object. However, by default, this object is empty because Express doesn't have built-in support for parsing incoming request bodies. This is where body-parser comes in.

Body-parser parses the request body and populates the req.body object with the parsed data. It supports various formats of data, including JSON, URL-encoded, and raw.

Here's an example of how you might use body-parser in an Express.js application:

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/example', (req, res) => {
console.log(req.body); // Data from the request body
res.send('Data received');
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
In this example, the body-parser middleware is used to parse incoming JSON and URL-encoded form data. The app.use() method is used to mount these middleware functions in the application's request processing pipeline. Now, when a POST request is sent to the '/example' endpoint, the parsed data will be available in req.body.

# MongoDB

# Mongoose

mongoose.connect()
new mongoose.Schema()
mongoose.model("User",schema)

# bcryptjs
