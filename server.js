const express = require('express');
const cors = require('cors');
const app = express();
const port = 8011;
require('./server/config/mongoose.config')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const ipRoutes = require('./server/routes/ip.routes');
ipRoutes(app);
app.listen(port, () => {
    console.log("The server listening on port " + port);
});