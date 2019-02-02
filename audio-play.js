function audioPlay(audio, duration, progress, status){
    var myAudio = document.getElementById(audio),
        myDuration = document.getElementById(duration),
        myProgress = document.getElementById(progress),
        myStatus = document.getElementById(status),
        originalTime, factMin, factSec, now;

    myAudio.addEventListener("durationchange", function() {
        originalTime = Math.floor(myAudio.duration);
        factMin = Math.floor(originalTime / 60);
        factSec = Math.round(originalTime % 60);
        if (factMin.toString().length < 2) {
            factMin = "0" + factMin;
        }
        myDuration.innerHTML = factMin +':'+ factSec;
        myAudio.setAttribute('data-status','1');
        myStatus.innerHTML = '开始播放';
    }, true);
    myAudio.addEventListener("timeupdate", function () {
        now = Math.floor(myAudio.currentTime);
        now = now * (100 / originalTime);
        myProgress.style.width = now + '%';
    }, true);
    myAudio.addEventListener("ended", function () {
        myAudio.setAttribute('data-status','1');
        myStatus.innerHTML = '重新播放';
        myProgress.style.width = '0';
    }, true);
}
