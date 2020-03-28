'use strict'

const express = require('express'),
      PORT = 8080,
      HOST = '0.0.0.0',
      URI = '/todolist'

let session = require('cookie-session'),
    bodyParser = require('body-parser'),
    urlencodedParser = bodyParser.urlencoded({ extended: false }),
    app = express()

/* use of sessions */
app.use(session({secret: 'secret-key'}))

/* if there is no todo list in the session,
we create an empty todo list as an array before the continuation */
.use((request, response, next) => {
  if (typeof(request.session.tasks) == 'undefined') {
      request.session.tasks = []
  }
  next()
})

/* display todo list and form */
.get(URI, (request, response) => { 
  response.render('index.ejs', {tasks: request.session.tasks, uri: URI})
})

/* add a task to the todo list */
.post(`${URI}/create/`, urlencodedParser, (request, response) => {
  if (request.body.task != '') {
      request.session.tasks.push(request.body.task)
  }
  response.redirect(URI)
})

/* delete a task from the todo list */
.get(`${URI}/delete/:id`, (request, response) => {
  if (request.params.id != '') {
      request.session.tasks.splice(request.params.id, 1)
  }
  response.redirect(URI)
})

/* redirect to the todo list if the requested page is not found (Error 404) */
.use((request, response, next) => {
  response.redirect(URI)
})

.listen(PORT, HOST)
console.log(`Server running on http://${HOST}:${PORT}`) 