const fs = require('fs');

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const torage = new Storage();

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const filename = '../../public/userVoiceRecordings/sonic.m4a';
// const filename = './public/userVoiceRecordings/sonic.m4a';
// const encoding = 'Encoding of the audio file, e.g. LINEAR16';
const encoding = 'LINEAR16';
// const sampleRateHertz = 16000;
const sampleRateHertz = 16000;
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
  .on('error', stuff => {
    console.error('error')
    console.error(stuff)
  })
  .on('pipe', stuff => {
    console.error('pipe')
    console.error(stuff)
  })
  .on('unpipe', stuff => {
    console.error('unpipe')
    console.error(stuff)
  })
  .on('drain', stuff => {
    console.error('drain')
    console.error(stuff)
  })

  .on('finish', stuff => {
    console.error('finish')
    console.error(stuff)
  })

  .on('close', stuff => {
    console.error('close')
    console.error(stuff)
  })
  .on('end', (stuff,stuff2) => {
    console.error('end')
    console.error(stuff,stuff2)
  })
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