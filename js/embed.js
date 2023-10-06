const tr = window.jsmediatags;

function getQuery(name) {
    var val = null;
    if (window.location.search) {
        var currentQuery = window.location.search.split('?')[1];
        var queryTable = currentQuery.split('&');
        for (var i=0;i<queryTable.length;i++) {
            if (queryTable[i].split('=')[0]!=null) {
                var table = queryTable[i].split('=')
                if (table[0]==name) {
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
    h = (Number(height) || 16)
    w = (Number(width) || 30)
    if (h!=null && w!=null) {
        var objHeight = h;
        var objWidth = w;
        if (vis==='true') {
            container.innerHTML += `
            `
        };
        if (controls==='true') {
            container.innerHTML += `
            <div id='MediaPlayerControls'>\n
                <div id="MediaPlayerIcon-icon-play" class="MediaPlayerIcon icon-play" data-mediathumb-url="src"></div>\n
                <div id="sound_options" class="MediaPlayerIcon icon-volume">\n
                    <input id="volume" class="MediaPlayerControl-volume" type="range" max="100" min="0" val="100" />\n
                </div>\n
                <input id="MediaPlayerControl-seekbar" type="range" name="rng" min="0" value="0">\n
            </div>\n
            `;
        };
    } else {
        container.innerHTML = '<p class="red1">Invalid width / height</p>';
    };
};
