//const tr = window.jsmediatags;

function getQuery(name) {
    var val = null;
    if (window.location.search!=null) {
        var currentQuery = window.location.search.substr(1);
        var queryTable = currentQuery.split('&');
        for (var i=0;i<queryTable.length;i++) {
            if (queryTable[i].split('=')[0]!=null) {
                var table = queryTable[i].split('=')
                if (table[0]===name) {
                    val = table[1];
                    break;
                };
            };
        };
    };
    return val;
};

window.addEventListener("load", function () {
    var container = document.getElementById('app-container');
    var width = getQuery('width');
    var height = getQuery('height');
    var controls = getQuery('controls');
    var info = getQuery('info');
    var vis = getQuery('visual');
    var visType = getQuery('vType');
    var theurl = getQuery('src');
    var a = new Audio();
    if (height!=null && width!=null) {
        h = (Number(height) || 16);=
        w = (Number(width) || 30);
        var objHeight = h;
        var objWidth = w;
        offset = (info) && 162 || 0;
        barofs = offset + 8;
        container.style.top = offset+'px';
        container.style.width = objWidth+'px';
        container.style.height = objHeight+'px';
        if (vis!=null && vis==='true') {
            container.innerHTML += `<canvas id="canvas" style="bottom: `+offset+`px;width:100%;height:100%;"></canvas>\n`;
            offset = 0;
            barofs = offset + 8;
        };
        if (info!=null && info==='true') {
            container.innerHTML += `
            <div id='filetitle'></div>\n
            <div id="album"></div>\n
            `;
        };
        if (controls!=null && controls==='true') {
            container.innerHTML += `
            <div id='MediaPlayerControls'>\n
                <div id="MediaPlayerIcon-icon-play" class="MediaPlayerIcon icon-play" data-mediathumb-url="src" style="bottom: `+offset+`px;"></div>\n
                <div id="sound_options" class="MediaPlayerIcon icon-volume" style="bottom: `+offset+`px;">\n
                    <input id="volume" class="MediaPlayerControl-volume" type="range" max="100" min="0" val="100" style="bottom: `+barofs+`px;"/>\n
                </div>\n
                <input id="MediaPlayerControl-seekbar" type="range" name="rng" min="0" value="0" style="bottom: `+barofs+`px;">\n
            </div>\n
            `;
        };
        if (info!=null && info==='true') {
            container.innerHTML += `<div id="time-position"></div>\n`;
        };
        var ft = document.getElementById('filetitle');
        var al = document.getElementById('album');
        var bu = document.getElementById('MediaPlayerIcon-icon-play');
        var sb = document.getElementById('sound_options');
        var vo = document.getElementById('volume')
        var tp = document.getElementById('time-position')
        if (theurl!=null){
            a.src = theurl
            a.load()
        } else {
            container.innerHTML = '<p class="red1">Invalid audio source.</p>'
        };
    } else {
        container.innerHTML = '<p class="red1">Invalid width / height</p>';
    };
});
