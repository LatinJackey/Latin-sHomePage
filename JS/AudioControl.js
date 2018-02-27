
var currentHasMusic = false;

var Music ={
    /*改变当前播放状态
    @audio:播放器
    @isStartPlay:是否开始播放音乐
    */
    ChangeStatus :function(audio,isStartPlay){
        var Dom_Image = document.getElementById("Music_ChangeStatus");
        if (isStartPlay){
            if(!currentHasMusic){
                currentHasMusic = true;
                Music.ChangeMusic();
            }else{
                audio.play();
                Dom_Image.style.backgroundImage="url('./images/暂停播放.png')";
            }
        }else{
            audio.pause();
            Dom_Image.style.backgroundImage="url('./images/开始播放.png')";
        }
    },

    /*更换播放歌曲
    @musicName:要播放音乐的名字，如果不传时，则随机播放
    */
    ChangeMusic:function(musicName){
        var audio = document.getElementById("Home_Audio");
        if(musicName){
            audio.src= "./musics/"+musicName+".mp3";
        }else{
            audio.src= "./musics/"+musics[Music.CreatMusic()]+".mp3";
        }
        Music.ChangeStatus(audio,true);
    },
    
    /*随机选择歌曲
    return:选择的歌曲名字
    */
    CreatMusic:function(){
        var indexRandom = Math.random() * 7;
        let chooseNum = Math.floor(indexRandom);
        return chooseNum;
    }
}

window.onload = function () {
    var audio = document.getElementById("Home_Audio");
    Music.ChangeStatus(audio,true);
    document.getElementById("Music_ChangeStatus").onclick = function(){
        var isStartPlay = !audio.paused;
        isStartPlay = Boolean(isStartPlay);
        Music.ChangeStatus(audio,!isStartPlay);
    } ;
    document.getElementById("Music_Next").onclick = function(){
        Music.ChangeMusic();
    };
}
