# JavaScript Quiz

The JavaScript Quiz is a browser-based quiz game constructed with JavaScript, CSS3 and HTML5. It allows the user to answer five questions and obtain their score at the end of the quiz. The game is targeted toward people who are interested in JavaScript programming language.

The live website can be found at [JavaScript Quiz](https://cinthiafontoura.github.io/javascript-quiz/).

![responsive](https://user-images.githubusercontent.com/80278757/168018678-4c4c1df1-c86a-432d-905e-1bd468ad7155.png)


## Features

### Header Section

The header contains the game name on purple colour and grey background.

![header](https://user-images.githubusercontent.com/80278757/168018693-882b11ee-2950-472e-a4f6-e41b4f73f3d3.png)

### Start Section

The start section has an input asking for a username before starting the quiz game. The input requires a text entry, and in case the user enters a space, a message will ask them to enter a valid username.

![start](https://user-images.githubusercontent.com/80278757/168018684-99a6d80c-2318-419f-b519-0293b5906b6a.png)

### Quiz Game Section

- The game header contains a progress bar with the caption to show the player how many questions were answered and how many questions the quiz has in total and the total points earned.
- All five questions are about JavaScript language and have four options of answers with only one correct option.
- The player has status feedback in the game footer showing how many questions they get right or wrong.

![quiz](https://user-images.githubusercontent.com/80278757/168018701-8c52504a-1924-4237-9531-3c69c1d2c0b2.png)

### Scores Section

- A score section displays a motivational phrase and a gif that changes according to the user score, the latest scores with the username captured on the homepage and the total punctuation. When the quiz is played more than once, the new score is added at the end of the list.
- The section also has buttons that give the option to play again using the same username or play as a new player.

![latestscores](https://user-images.githubusercontent.com/80278757/168018694-efe33ac5-9def-4f77-a66f-4d9483a05292.png)

### Footer Section

The footer contains a credit paragraph linked to my portfolio that opens in a new tab.

![footer](https://user-images.githubusercontent.com/80278757/168018691-899106eb-b0e5-4221-973e-c0b010d7177c.png)


## UX/UI

- A simple layout, with purple and grey as colours, was chosen to give a good contrast.
- No images in the background to keep it clean and ensure that it never distracts the user.

## Testing

* I've tested that this page works in Chrome and Firefox (mobile and desktop versions).
* I've confirmed that this project is responsive on all screen sizes using dev tools.
* I confirmed by testing with users that the text of all sections is readable and easy to understand.
* I've confirmed that the input requires entry, and the submit button works.

![startvalidation](https://user-images.githubusercontent.com/80278757/168018688-479ae766-9944-4a1c-8657-2f14916922d6.png)

### Validator Testing

  * **HTML** 
    - No errors were found when passing throught official [W3C Validator](https://validator.w3.org/#validate_by_uri).

  * **CSS**
    - No errors were returned when passing through the [Jigsaw](https://jigsaw.w3.org/css-validator/#validate_by_uri).

  * **JavaScript**
    - No errors were returned when passing through the [JSHint](https://jshint.com/).
  
  * **Accessibility**
    - I confirmed that the colours have enough contrast, and the fonts chosen are easy to read, running it through Lighthouse in Chrome DevTools.

![lighthouse](https://user-images.githubusercontent.com/80278757/168018699-a5a002ab-77ca-432d-8152-ea15806d8e67.png)


## Deployment

Website deployed to GitHub Pages. The steps to deploy are as follows:
   - On the project page, click on **Settings**
   - Choose **Pages** on left menu
   - In the **source** section, choose the branch that you would like to deploy (e.g. main)
   - Click on the **save** button, and after a few seconds, you will have access to the URL of the deployed site.
 
The live website can be found here [JavaScript Quiz](https://cinthiafontoura.github.io/javascript-quiz/).


## Futures improvements

- Display the latest score in decrescent order.
- Change the colour of the selected answer to notify if it is right or wrong.


## Credits

* Support of documentation in [W3schools](https://www.w3schools.com/)
* Favicon generated on [Favicon](https://favicon.io/)
* Progress bar and score incremented using code by [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
* Links to the gifs in the score section by [GIPHY](https://giphy.com/)
* Images for the README resized using Adobe Photoshop.
* Responsive image by [Am I Responsive](https://ui.dev/amiresponsive) screenshot
