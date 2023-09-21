window.siteData = {}
document.addEventListener('dragover',function(event){
    document.getElementById('drop_zone').hidden = false;
});
document.addEventListener('dragleave',function(event){
    setTimeout(function(){
        document.getElementById('drop_zone').hidden = true;
    },1000);
});
window.funcs = {};
funcs.handleDragOver = function(ev){
    dropzone.handleDragOver(ev,function(ev){
        console.log('File(s) in drop zone');
    });
};
funcs.handleDrop = function(ev){
    dropzone.handleDrop(ev,function(ev){
        if (ev.dataTransfer.items) {
            var files = dropzone.getFiles(ev.dataTransfer.items);
            console.log(files);
            window.siteData.files = files;
        };
    });
};
