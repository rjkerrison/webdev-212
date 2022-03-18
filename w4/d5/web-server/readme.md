# Codealong Website

I'll code for 15 minutes; we'll then have 15 minutes for catching up.

## Initialising the app

1. Create a new folder
2. `npm init --yes` to initialise
3. Install dependencies: `npm install mongoose express`
4. Add `"type": "module",` into your _package.json_
5. Copy the `app.js`
6. Create your model and controller

## Adding handlebars

1. `npm install hbs`
2. Add the view engine line to _app.js_
3. Add the views in the views folder
4. Change the cinema controller to render the view

## Post functionality

1. Include the `app.use()` middleware for JSON and urlencoded form data
   1. Always copy-paste this, it's not worth memorising
2. Add a POST endpoint
3. Add your createCinema controller function
   1. It needs to take the `request.body` and build a cinema object to create
   2. It needs to await the model creation
   3. It needs to respond with the updated view

## Single cinema view

1. Add a new view for a single cinema
2. Add a new controller
   1. which gets an `:id` request parameter
   2. find the matching cinema
   3. renders the single cinema view for that cinema
3. Add a new GET endpoint
   1. which has an `:id` request parameter
   2. and calls the new controller

## Single cinema update

1. Add a new controller
   1. which gets an `:id` request parameter
   2. which builds an updated cinema object from `request.body`
   3. which calls `findByIdAndUpdate()` with those
   4. and renders the single cinema view with the updated info
2. Add a new POST endpoint
   1. which has an `:id` request parameter
   2. and calls the new controller

## Troubleshooting / Common Errors

1. If you see `Cannot GET /cinemas` or `Cannot POST /cinemas` etc, it means that you have forgotten to add a route in your `app.js`.
2. If you see a console error in your terminal about a missing view, it means you've forgotten to create a `.hbs` file in your `views` folder
