import {read, write} from './nfc';

document.addEventListener("DOMContentLoaded", function(){
  const scanButton = document.querySelector("#scan")
  const writeButton = document.querySelector("#write")

  if(scanButton && window.apiUrl) {
    scanButton.addEventListener("click", async (e) => {
      e.preventDefault();
      read()
    });
  }

  if(writeButton && window.apiUrl) {
    writeButton.addEventListener("click", async (e) => {
      e.preventDefault();
      write()
    });
  }
});