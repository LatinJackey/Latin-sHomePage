

var obj ={
    ChangeStatus :function(){
        var audio = document.getElementById("music");
        if (audio.paused){
            audio.play();
            document.getElementById("ChangeStatus").style.backgroundImage="url('./images/暂停播放.png')";
        }else{
            audio.pause();
            document.getElementById("ChangeStatus").style.backgroundImage="url('./images/开始播放.png')";
        }
    },
    Next :function (){
        MenuClick();
    },
}

window.onload = function () {
    document.getElementById("ChangeStatus").onclick = obj.ChangeStatus;
    document.getElementById("Next").onclick = obj.Next;
}

