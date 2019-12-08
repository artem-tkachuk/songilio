const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const port = 1337;

const app = express();

app.post('/voice', (req, res) => {

    let songUrl = 'http://ocrmirror.org/files/music/remixes/Street_Fighter_2_Guile%27s_Theme_Goes_with_Metal_OC_ReMix.mp3'

    // Generate a TwiML response
    let twiml = new VoiceResponse();

    twiml.say('This is your favourite song. You are welcome!');

    // Play Guile's theme over the phone.
    twiml.play(songUrl);

    // Set the response type as XML.
    res.header('Content-Type', 'text/xml');

    // Send the TwiML as the response.
    res.send(twiml.toString());
});

app.listen(port, () => console.log(`App listening on port ${port}`));