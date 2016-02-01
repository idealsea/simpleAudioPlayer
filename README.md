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
audioPlay('audio1','audioDuration', 'audioProgress', 'audio-play2');
```
