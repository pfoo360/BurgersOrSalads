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
Client stores user inputs in React states. Error handling is done after every user update. Upon submission the form data is sent to the backend REST API. After passing some error handling, a query to the [FourSquare Places API](https://developer.foursquare.com/docs/places-api-overview) is done. The response from the Places API is sent to the client to be rendered/consumed.

# Goals

- Build the front-end and back-end of a simple application, from reading documentation to final product, in a weekend
- Work with an API that I did not create, in this case the [FourSquare Places API](https://developer.foursquare.com/docs/places-api-overview)
- Experiment with NodeJS and ExpressJS to create a simple REST API
- Learn TailwindCSS for styling and responsive web design
- Try/catch blocks and other error handling
- etc.

# Things that could be improved

- error handling on more edge cases
- better responsive web design and using more media queries to accomodate more screen sizes
- using Google Maps API (unfortunately, it is a paid service so an iFrame was used instead)
- form handling/data cleaning in the back-end
- think of a better name for the app
- use less emojis
