import log from '../utils/log'
import postData from '../http/post'
import ndefFixture from '../fixtures/ndef'

const doPost = (message) => {
  postData(window.apiUrl, message)
  .then(data => {
    log(data); // JSON data parsed by `data.json()` call
  });
}

const scan = async () => {
  const ndef = new NDEFReader();
  await ndef.scan();
  log("> Scan started");

  ndef.addEventListener("readingerror", () => {
    log("Argh! Cannot read data from the NFC tag. Try another one?");
  });

  ndef.addEventListener("reading", ({ message, serialNumber }) => {
    log(`> Serial Number: ${serialNumber}`);
    
    doPost(message)
    log(`> Records: (${message.records.length})`);
  });
}

const mock = async () => {
  doPost(ndefFixture)
}

export default async () => {
  log("User clicked scan button");

  try {
    if (typeof(NDEFReader) !== 'undefined') {
      scan()
    } else {
      mock()
    }
  } catch (error) {
    log("Argh! " + error);
  }
}