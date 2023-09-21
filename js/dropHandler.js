window.siteData = {}
window.addEventListener('load',function() {
    document.addEventListener('dragover',function(event){
        document.getElementById('drop_zone').hidden = false;
    });
    document.addEventListener('dragleave',function(event){
        setTimeout(function(){
            document.getElementById('drop_zone').hidden = true
        },1000);
    });
    function handleDragOver(ev){
        dropzone.handleDragOver(ev,function(ev){
            console.log('File(s) in drop zone');
        });
    };
    function handleDrop(ev){
        dropzone.handleDrop(ev,function(ev){
            if (ev.dataTransfer.items) {
                var files = dropzone.getFiles(ev.dataTransfer.items);
                console.log(files);
                window.siteData.files = files;
            };
        });
    };
})
