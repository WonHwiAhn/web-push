const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = 'BK-NJ64sZa38Ov4WoCb7oAQo1TrB26qGQMzdvMGVpGRXVxa1yjAAKafXLUzRZ9Zo129sTLI_dfoIoS_R1c6lnDQ';
const privateVapidKey = 'nwnKdiY148v3p_frwn8DBMh7LjHePQ6C9XbfHcd2jKA';

webpush.setVapidDetails('mainto:test@test.com', publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
	// Get pushSubscription object
	const subscription = req.body;

	// Send 201 - resource created
	res.status(201).json({});

	// Create payload
	const payload = JSON.stringify({ title: 'PushTest' });

	// Pass object into sendNotification
	webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
