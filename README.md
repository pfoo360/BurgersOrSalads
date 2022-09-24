# Pizza Or Salad

![start_screen](/start_screen.png)

# What does the app do?

It answers the age-old question: where do you want to eat?
<br/>
<br/>
Simply enter a list of food choices and how far you are willing to travel...
<br/>
![selection_screen](/selection_screen.png)
<br/>
...hit submit and the app will not only make the choice for you, but also return a restaurant/food spot too!
![result_screen](/result_screen.png)

## Technical

Client uses JavaScript Geolocation API to get user's longitude and latitude positions. Client stores user inputs in various state Hooks. Upon submission the form data is sent to the backend REST API via Axios. The backend queries the [FourSquare Places API](https://developer.foursquare.com/docs/places-api-overview). The response from the Places API is sent to the client to be rendered.

# Goals

- Build the front-end and back-end of a simple application, from reading documentation to final product, in a weekend
- Work with an API that I did not create, in this case the [FourSquare Places API](https://developer.foursquare.com/docs/places-api-overview)
- Experiment with NodeJS and ExpressJS to create a simple REST API
- Learn TailwindCSS for styling and responsive web design
- Familiarize myself with Git CLI and GitHub
- etc.

# Things that could be improved

- Error handling on more edge cases
- Use Formik library to handle form instead of manual creation
- Use Context API or React Redux to persist form data even if user navigates to another part of the app to improve UX
- Better responsive web design and using more media queries to accomodate more screen sizes
- Use Google Maps API (unfortunately, it is a paid service so an iFrame was used instead in this project)
- Code splitting and file structure organization
- Form handling/data cleaning in the back-end
- Think of a better name for the app
- Use less emojis
