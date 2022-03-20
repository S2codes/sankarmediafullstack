const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs')

// paths 
const staticPath = path.join(__dirname, '/public')
const templatePath = path.join(__dirname, '/template/views');
const partialPath = path.join(__dirname, '/template/partials');


// middlewares 
app.use(express.static(staticPath));

// template engine hbs 
app.set('view engine', 'hbs');
app.set('views', templatePath);

// register partiasl 
hbs.registerPartials(partialPath);





// routes 
const webRouter = require('./server/router/webRoutes.js')
app.use(webRouter)

app.listen(PORT, () => {
    console.log(`listing at ${PORT}`);
})