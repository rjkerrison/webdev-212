# Our first express app

This is the most basic an express app can be.

It listens to one route (`/home`), on a hardcoded port (`3000`), and it returns an `<h1>` as a response.

## Running the server

We can run the server with just

```sh
node app.js
```

We can then view the response to our `/home` route at
[http://localhost:3000/home](http://localhost:3000/home).
Try it!

## Watching for changes

We can monitor our files for changes and serve the updated version with `nodemon`.

```sh
npx nodemon app.js
```

After accepting the installation, nodemon will now be listening for changes.

Try changing the `<h1>` response and repeating the request in the browser.

Notice that the terminal where you ran nodemon is notifying you of the restart each time.
It should look like this:

```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
My first app listening on port 3000!
```

## Serving static files

What about images and things like that?

We store them in a folder, usually called `public` or `assets` or `static` or something else like that.

We serve them all as a folder of static files.

## HTML Files

We can send HTML files as a response to a request with `.sendFile()`.

## Dynamic content

Using a templating framework called _Handlebars_, we can have views with dynamic content.
This idea of templating is a foundational idea behind many web frameworks for many technology stacks (Django in Python, Ruby on Rails, .NETFramework for C#, ReactJS, VueJS, many, many others).
