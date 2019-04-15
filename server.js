const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/api/whoami", (req, res) => {
	res.json({
		ipaddress: req.headers["x-forwarded-for"].split(",")[0],
		language: req.headers["accept-language"],
		software: req.headers["user-agent"],
	});
});

const listener = app.listen(process.env.PORT, () => {
	console.log(`Your app is listening on port ${listener.address().port}`);
});
