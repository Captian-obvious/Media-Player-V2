const ID3 = window.jsmediatags;
const sin = Math.sin;
const π = Math.PI;
var urlParameter = false;
function ease(t) {return sin((t * π) / 2);}
function draw(src) {var myRectangle = new Image();myRectangle.src = src;myRectangle.onload = function () {};return myRectangle;};
function replaceurl(paramText){var newurl=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+paramText;window.history.pushState({path:newurl},"",newurl)}function calcRMSColor(rms){return 150*(rms/100)}window.addEventListener("load",(function(){var file=document.getElementById("thefile"),filetitle=document.getElementById("file-label");document.getElementById("media-container").innerHTML='<img id="img2"></img>\n <canvas id="canvas"></canvas>\n<div id="main">\n    <div id="album">\n        <div id="MediaPlayerControls">\n            <div id="MediaPlayerIcon-icon-play" class="MediaPlayerIcon icon-play" data-mediathumb-url="src"></div>\n            <div id="sound_options" class="MediaPlayerIcon icon-volume">\n                <input id="volume" class="MediaPlayerControl-volume" type="range" max="100" min="0" />\n            </div>\n        </div>\n        <input id="MediaPlayerControl-seekbar" type="range" name="rng" min="0" value="0">\n       <div id="time-position"></div>\n    </div>\n</div>\n <script src="../../js/rangeRunner.js"><\/script>\n',replaceurl("player="+urlParameter);var audio=new Audio;console.log(audio);var dur=document.getElementById("MediaPlayerControl-seekbar"),album=document.getElementById("album"),album2=document.getElementById("img2"),dataimage=document.getElementById("MediaPlayerIcon-icon-play"),button=document.getElementById("MediaPlayerIcon-icon-play"),position=document.getElementById("time-position"),setting=document.getElementById("sound_options"),vol=document.getElementById("volume");function formatTime(val){var min=Math.floor(val/60),sec=Math.floor(val-60*min);return sec<10&&(sec="0"+sec),min+":"+sec}file.onchange=function(){var files=this.files;dataimage.setAttribute("data-mediathumb-url",URL.createObjectURL(files[0]));var SRC=dataimage.getAttribute("data-mediathumb-url");audio.src=SRC,audio.load();var input=files[0].name;filetitle.textContent!="Unknown Artist - "+files[0].name&&(filetitle.textContent="Unknown Artist - "+files[0].name),"url(../../images/default/default-album-icon.png)"!=album.style.backgroundImage&&(album.style.backgroundImage="url(../../images/default/default-album-icon.png)"),"../../images/default/default_background.png"!=album2.src&&(album2.src="../../images/default/default_background.png"),ID3.read(files[0],{onSuccess:function(tag){console.log(tag);const data=tag.tags.picture.data,format=tag.tags.picture.format,title=tag.tags.title,artist=tag.tags.artist;if(0!=data.length&&null!=format){let str="";for(var o=0;o<data.length;o++)str+=String.fromCharCode(data[o]);var url="data:"+format+";base64,"+window.btoa(str);album.style.backgroundImage="url("+url+")",album2.src=url}""!=title&&""!=artist&&(filetitle.textContent=artist+" - "+title)},onError:function(error){console.log(error)}}),replaceurl("player=true&input="+input),audio.play();var context=new AudioContext;console.log(context);var src=context.createMediaElementSource(audio),analyser=context.createAnalyser(),loud=0,canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");src.connect(analyser);var gn=context.createGain();const centerX=canvas.width/2,centerY=canvas.height/2;analyser.connect(gn),gn.connect(context.destination);analyser.fftSize=512,analyser.maxDecibels=-3,analyser.minDecibels=-150;var bufferLength=analyser.frequencyBinCount;console.log(bufferLength),console.log(analyser);var barHeight,dataArray=new Uint8Array(bufferLength),dataArray1=new Uint8Array(512),WIDTH=(canvas.height,canvas.width),HEIGHT=canvas.height,barWidth=WIDTH/bufferLength;!function renderFrame(){requestAnimationFrame(renderFrame),analyser.getByteFrequencyData(dataArray),analyser.getByteTimeDomainData(dataArray1);var curtime=formatTime(audio.currentTime),time=formatTime(audio.duration);position.innerHTML=curtime+" / "+time,loud=function getRMS(arr){for(var mean,square=0,n=arr.length,i=0;i<n;i++)square+=Math.pow(arr[i],2);return mean=square/n,Math.sqrt(mean)}(dataArray),ctx.clearRect(0,0,WIDTH,HEIGHT),ctx.fillStyle="#000000",ctx.globalAlpha=.3,ctx.fillRect(0,0,WIDTH,HEIGHT),ctx.globalAlpha=1;let rad=loud/7;gn.gain.setValueAtTime(vol.value/100,audio.currentTime);for(var i=0;i<bufferLength;i++){barHeight=dataArray[i]/255*60,ctx.save(),ctx.translate(centerX,centerY),ctx.rotate(90+i*(2*Math.PI/bufferLength));var g=255-dataArray[i],b=255-dataArray[i];ctx.fillStyle="rgb(255,"+g+","+b+")",ctx.fillRect(0,0+rad,barWidth,barHeight),ctx.fillStyle="rgb(255,0,0)",ctx.fillRect(0,0+rad+barHeight,barWidth,1),ctx.restore()}ctx.beginPath(),ctx.arc(centerX,centerY,rad,0,2*Math.PI,!1),ctx.fillStyle="rgb("+calcRMSColor(loud)+", "+calcRMSColor(loud)+",0)",ctx.fill(),ctx.closePath()}(),audio.play(),dur.addEventListener("change",(function(){audio.currentTime=dur.value})),setting.addEventListener("click",(function(){1==vol.hidden?vol.hidden=!1:vol.hidden=!0})),audio.addEventListener("timeupdate",(function(){dur.value=audio.currentTime,dur.max=audio.duration})),button.addEventListener("click",(function(){"MediaPlayerIcon icon-pause"==this.className?(this.className="MediaPlayerIcon icon-play",audio.pause()):(this.className="MediaPlayerIcon icon-pause",audio.play()),audio.addEventListener("ended",(function(){button.className="MediaPlayerIcon icon-play",dur.value=dur.max}))})),audio.addEventListener("pause",(function(){button.className="MediaPlayerIcon icon-play"})),audio.addEventListener("play",(function(){button.className="MediaPlayerIcon icon-pause"}))}}));
