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
        if (controls==='true') {
            
        };
    } else {
        document.body.innerHTML = '<p class='red1'>Please provide a valid width / height</p>'
    };
};
