const express = require("express");
const app = express();

// req is short for request
// res is short for response

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser Hello I'm Mohammad Omair Welcome to the coding world!");
});

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/users", (req, res) => {
  res.send("Our express api server is now sending this over to the browser Hello I'm Mohammad Omair Welcome to the coding world!");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
