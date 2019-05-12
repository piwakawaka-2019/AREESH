// Transcribes audio from streamed from a local file

const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

const filename = '../../public/userVoiceRecordings/flacSonic.flac';
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
  interimResults: true, // If you want interim results, set this to true
};

// Stream the audio to the Google Cloud Speech API
const recognizeStream = client
  .streamingRecognize(request)
  .on('data', data => {
    console.log(
      `Transcription: ${data.results[0].alternatives[0].transcript}`
    );
  });

// Stream an audio file from disk to the Speech API, e.g. "./resources/audio.raw"
fs.createReadStream(filename).pipe(recognizeStream, { end: true });
