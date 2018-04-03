var Main = {
    initMain:function(){
        var myResume = document.getElementById("Main_MyResume");
        myResume.onclick = function(){
            window.location.href = './HTML/MyResume.html';
            console.log("点击我的简历");
        };

        var myResume = document.getElementById("Main_MyAlbum");
        myResume.onclick = function(){

            window.location.href = './HTML/MyAlbum.html';
            console.log("点击我的相册");
        };

        var myResume = document.getElementById("Main_MyShare");
        myResume.onclick = function(){
            window.location.href = './HTML/MyShare.html';
            console.log("点击我的分享");
        };
    },
}