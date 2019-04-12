const express = require('express');
const app = express();
var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
const requireJsonContent = () => {
  return (req, res, next) => {
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server requires application/json')
    } else {
      next()
    }
  }
}

  
app.use(myLogger)
app.get('/', (req, res, next) => {
  res.send('Welcome Home');
});

app.post('/', requireJsonContent(), (req, res, next) => {
  res.send('You sent JSON');
})

app.listen(3003);
