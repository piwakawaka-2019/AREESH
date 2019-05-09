const fs = require('fs');

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = new Storage();

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

console.log("About to build request")
const request = {
  config: {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  },
  interimResults: false, // If you want interim results, set this to true
};

// Stream the audio to the Google Cloud Speech API
console.log("About to make API call")
const recognizeStream = client
  .streamingRecognize(request)
  .on('data', data => {
    console.log(
      `Transcription: ${data.results[0].alternatives[0].transcript}`
    );
  });

// Stream an audio file from disk to the Speech API, e.g. "./resources/audio.raw"
fs.createReadStream(filename).pipe(recognizeStream, { end: true });

setTimeout(() => {
    console.log("done")
}, 30000)