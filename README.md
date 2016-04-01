# simpleAudioPlayer
How to use?
---
```css
.audio-progress{ width: 100%;}
.audio-progress div{ width: 0; border-top:1px solid red;}
```
```html
<section id="myAudio1" class="article-audio">
    <div>
        <a id="btnPlay1" href="javascript:;"><span class="icon-audio"></span></a>
    </div>
    <div>
        <h2>弯弯的月亮 - 刘欢</h2>
        <p><span id="audioDuration">00:00</span></p>
    </div>
    <div>
        <a id="btnPlay2" href="javascript:;">正在加载</a>
    </div>
    <div class="audio-progress"><div id="audioProgress"></div></div>
    <audio id="audio1" src="5555.mp3" hidden="hidden"></audio>
</section>
```
```js
audioPlay('audio1','audioDuration', 'audioProgress', 'btnPlay2');
$('#btnPlay1,#btnPlay2').on('click', function () {
    var audio1 = document.getElementById('audio1'),
        audioStatus = audio1.getAttribute('data-status') ;
    var $btnPlay2 = $('#btnPlay2');
    if (parseInt(audioStatus) == 1) {
        audio1.play();
        $btnPlay2.text('暂停');
        audio1.setAttribute('data-status','2');
    } else if (parseInt(audioStatus) == 2) {
        audio1.pause();
        $btnPlay2.text('继续播放');
        audio1.setAttribute('data-status','1');
    } else {
        return false;
    }
});
```
