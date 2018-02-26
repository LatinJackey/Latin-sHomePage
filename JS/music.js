

var obj ={
    Play :function(){
        console.log("heasdf");
        var player = document.getElementById("music");
        player.play();
    },
    
    Pause :function (){
        console.log("heasdf");
        var player = document.getElementById("music");
        player.pause();
    },
    
    Next :function (){
        MenuClick();
    },
}

window.onload = function () {
    document.getElementById("Pause").onclick = obj.Pause;
    document.getElementById("Play").onclick = obj.Play;
    document.getElementById("Next").onclick = obj.Next;
}

