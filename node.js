import express from 'express';
import {Bot} from 'facebook-messenger-bot'; // import Bot class

const app = express();
const bot = new Bot('EAAFGwnibuZAABAH2vnoHhQ7ZBxRFgine76J1A90kfaUPeDrMiyJrWXBy2BvV0e35e2Y3OWcy53qTyYYpJKjbEMV5o7Q2hhOR768j9UkWS7wAbC6FyGnKGwlTwOeyFZARuSVdH03dYIRsaUlRN8NbOb8UUD6OVxG5rZCjcOmpmQZDZD', 'bot123'); // create bot instance

app.use('/facebook', bot.router()); // use the router
app.listen(3000);
(async function () {
  console.log(await bot.setGreeting('Hi my name is Freedaa, I can help find free food around and share the free food you find!'));
  console.log(await bot.setGetStarted({data: {action: 'GET_STARTED'}}));

  // console.log(await bot.setGetStarted(null)); // DELETE greeting
})();
