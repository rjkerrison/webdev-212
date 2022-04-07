# React Router Basic Example

This is a very basic example of using `react-router-dom`.

We have three pages:

- Home
- Films
- Eyeliners

Which page is shown depends on the URL.

```js
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/films" element={<Films />} />
  <Route path="/eyeliners" element={<EyeLiners />} />
</Routes>
```

We are using `Routes` and `Route` from `react-router-dom` package to define which page is shown based on the URL.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
