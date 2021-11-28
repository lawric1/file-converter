window.onload = function() {
    var fileInput = document.getElementById('file');
    var fileList = document.getElementById("fileList");
    var uploadedFiles = [];

    function handleData() {
        let files = Object.entries(fileInput.files);
        files.forEach(file => { 
            let name = file[1]["name"]
            console.log(file)
        });
    }

    fileInput.addEventListener('change', handleData, false);
};