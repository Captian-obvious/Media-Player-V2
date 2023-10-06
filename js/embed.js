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
    var controls = getQuery('controls');
    var info = getQuery('info');
    var vis = getQuery('visual');
    var visType = getQuery('vType');
    if (controls==='true') {
        
    };
};
