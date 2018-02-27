

var Music ={
    /*改变当前播放状态
    @audio:播放器
    @isStartPlay:是否开始播放音乐
    */
    ChangeStatus :function(audio,isStartPlay){
        var Dom_Image = document.getElementById("Music_ChangeStatus");
        if (isStartPlay){
            audio.play();
            Dom_Image.style.backgroundImage="url('./images/暂停播放.png')";
        }else{
            audio.pause();
            Dom_Image.style.backgroundImage="url('./images/开始播放.png')";
        }
    },
}

var NextMusic ={
    ChangeMusic:function(musicName){
        var audio = document.getElementById("Home_Audio");
        if(musicName){
        }else{
            var indexRandom = Math.random() * 7;
            let chooseNum = Math.floor(indexRandom);
            console.log(chooseNum);
            audio.src= "./musics/"+musics[chooseNum]+".mp3";
            Music.ChangeStatus(audio,true);
        }
    }

}
window.onload = function () {
    var audio = document.getElementById("Home_Audio");
    document.getElementById("Music_ChangeStatus").onclick = function(){
        var isStartPlay = audio.paused;
        Music.ChangeStatus(audio,isStartPlay);
    } ;
    document.getElementById("Music_Next").onclick = function(){
        NextMusic.ChangeMusic();
    };
}
