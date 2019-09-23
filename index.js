require('dotenv').config()
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

// bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
)

app.get('/sendmail', (req,res) => {
    const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'ashikur@example.com',
  from: 'twaha@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: `<strong>Hello World</strong>`,
};
sgMail.send(msg);
res.send('Mail send successfully!!!');
})

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);