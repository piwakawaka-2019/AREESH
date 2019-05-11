const router = require('express').Router()
const fs = require('fs');
const speech = require('@google-cloud/speech');

router.post('/blob', (req, res) => {
    // console.log("Server side called! Object: ", req.body)
    // console.log("Server side called! Text: ", req.body.blob.text)
    
    let blob = req.body.blob
    let blobText = blob.text

    // console.log("Server side called! Text: ", blobText)
    // console.log("Server side called! Text data type: ", typeof blobText)

    fs.writeFile('./server/routes/userAudioInput.opus', blobText, (err, data) => {
        if (err) throw err;
    })
})

router.post('/transcribe', (req, res) => {

    let {fileName} = req.body
    let filePath = './public/userVoiceRecordings/flacSonic.flac'

    // Creates a client
    const client = new speech.SpeechClient();

    // Encoding of the audio file, e.g. LINEAR16
    const encoding = 'FLAC';
    const sampleRateHertz = 44100;
    // BCP-47 language code, e.g. en-US
    const languageCode = 'en-IE';

    const request = {
    config: {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
    },
    interimResults: false, // If you want interim results, set this to true
    };

    // Stream the audio to the Google Cloud Speech API
    const recognizeStream = client
    .streamingRecognize(request)
    .on('data', data => {
        console.log(
        `Transcription: ${data.results[0].alternatives[0].transcript}`
        );
        res.json({ transcript: data.results[0].alternatives[0].transcript })
    });

    console.log("about to transcribe file")
    // Stream an audio file from disk to the Speech API, e.g. "./resources/audio.raw"
    fs.createReadStream(filePath).pipe(recognizeStream, { end: true })
})

module.exports = router