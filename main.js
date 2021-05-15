stream => {
const mediaRecorder= new MediaRecorder(stream);
}

function start() {
navigator.mediaDevices.getUserMedia({audio:true})
.then(stream => {
    mediaRecorder= new MediaRecorder(stream);
    mediaRecorder.start();

    const audioChunks=[];
    mediaRecorder.addEventListener("dataavailable",event =>{
       audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop",() =>{
        const audioBlob= new Blob(audioChunks);
        const audioURL= URL.createObjectURL(audioBlob);
        const audio= new Audio(audioURL);
        audio.play();
    });

});
}

function stop() {
    mediaRecorder.stop();
}

function mahaop() {
    mediaRecorder.stop();
}
