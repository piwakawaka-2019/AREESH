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


    // readfile is working;
    // fs.readFile('./server/routes/readMe.txt', 'utf8', (err, data) => {
    //     if (err) throw err;
    //     console.log("Contents of readME file:", data)
    // })

    fs.writeFile('./server/routes/userAudioInput.txt', blobText, (err, data) => {
        if (err) throw err;
        console.log("writeFile.txt has been written to")
    })


    // let textFile = fs.readFileSync('textFile.txt', 'utf8')
    // console.log('Text file: ', textFile)

    // fs.writeFileSync('writeMe.txt', 'text succesfully written', 'utf8', (err) => {
    //     console.log("writeFile executing")
    //     if (err) throw err;
    //     console.log("the file has been saved")
    // })
})

router.post('/transcribe', (req, res) => {

    let {fileName} = req.body

    // Creates a client
    const client = new speech.SpeechClient();

    // will eventually be passed via API call
    const filename = `./public/userVoiceRecordings/${fileName}`

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

    // Stream an audio file from disk to the Speech API, e.g. "./resources/audio.raw"
    fs.createReadStream(filename).pipe(recognizeStream, { end: true })
})

module.exports = router