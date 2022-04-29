const express = require('express');
const cors = require('cors');
const app = express();

require('../server/config/mongoose.config'); // This is new

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

require('../server/routes/player.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})