// Imports the Google Cloud client library
const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const filename = '../../public/userVoiceRecordings/flacSonic.flac';
// const filename = './public/userVoiceRecordings/sonic.m4a';
// const encoding = 'Encoding of the audio file, e.g. LINEAR16';
const encoding = 'FLAC';
// const sampleRateHertz = 16000;
const sampleRateHertz = 44100;
// const languageCode = 'BCP-47 language code, e.g. en-US';
const languageCode = 'en-IE';

const config = {
  encoding: encoding,
  sampleRateHertz: sampleRateHertz,
  languageCode: languageCode,
};
const audio = {
  content: fs.readFileSync(filename).toString('base64'),
};

const request = {
  config: config,
  audio: audio,
};

// Detects speech in the audio file
async function recognizeAsync () {
    try {
        const [response] = await client.recognize(request);
        return response
    }
    catch (err) {
        console.log(err)
    }
}

const transcription = recognizeAsync()
    .then(response => {
        const transcriptionResult = response.results.map(result => result.alternatives[0].transcript)
        .join('\n')
        console.log("Result: ",  transcriptionResult)
    })

  
