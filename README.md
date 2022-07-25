# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

The application is buitld with HTML, CSS, JS, jQuery and AJAX for front-end, and Node, Express for back-end.

## Final Product

!['tweeter-desktop-view'](https://github.com/kowo0403hk/tweeter/blob/master/docs/tweeter-desktop.png?raw=true)
!['tweeter-small-screen-view'](https://github.com/kowo0403hk/tweeter/blob/master/docs/tweeter-small-screen.png?raw=true)
!['tweeter-new-tweet-box'](https://github.com/kowo0403hk/tweeter/blob/master/docs/tweeter-new-tweet-box.png?raw=true)!['tweeter-toggle-and-visual-effects'](https://github.com/kowo0403hk/tweeter/blob/master/docs/tweeter-toggle-button-and-visual-effects.png?raw=true)
!['tweeter-errorMsg-empty-tweet'](https://github.com/kowo0403hk/tweeter/blob/master/docs/tweeter-errorMsg-empty-tweet.png?raw=true)
!['tweeter-errorMsg-word-exceeded'](https://github.com/kowo0403hk/tweeter/blob/master/docs/tweeter-errorMsg-word-exceeded.png?raw=true)

## Functionality

- The web application provides the user a single page app layout.
- The web application uses media queries css style and is responsive to different screen sizes.
- The new tweet-form box will only appear/disappear (with animation) when the user clicks on the "Write a new tweet" button.
- The new tweet-form box is auto-focused once toggled on.
- Word count of the tweet is dynamically updated.
- Appropriate error messages will slide in when the user submits a blank tweet or a tweet exceeds the word limit.
- Newly typed tweet will appear on the top of other tweets.
- Error messages will slide out if the user tries to their input.
- A back-to-top button will apprear when the user scrolls down the page. It also provides the functionality of sending the user back to the top of the page with the new tweet-form box toggled on and focused.
- The CSS files are written by SASS format.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- md5
- chance

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
5. Go to <http://localhost:8080/> in your browser.
