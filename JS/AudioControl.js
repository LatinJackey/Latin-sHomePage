
var currentHasMusic = false;

var musics = new Array();
musics[0] = "Calvo,Noubya - Light It Up (Original Mix)";
musics[1] = "EDX - High On You";
musics[2] = "Josh Turner - Your Man";
musics[3] = "Moguai,Cheat Codes - Hold On (Radio Edit)";
musics[4] = "刘允乐 - 太早";
musics[5] = "北极星";
musics[6] = "谭茜 - 光明";

var Music ={

    MusicMain:function(){
        MyMusic.isEnd();
        //鼠标移动提示
        var getDom = document.getElementById("Music_ChangeStatus");
        getDom.onmouseover = function(){
            Music.Music_OnMouseover();
        }
        getDom.onmouseout = function(){
            Music.Music_OnMouseOut();
        }

        //点击事件
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
    },

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
            audio.src= "./Musics/"+musicName+".mp3";
        }else{
            audio.src= "./Musics/"+musics[Music.CreatMusic()]+".mp3";
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
    },

    Music_OnMouseover:function(){
        document.getElementById("Music_tip").style.display = "block";
    },
    Music_OnMouseOut:function(){
        document.getElementById("Music_tip").style.display = "none";
    }
}


//=========================定时器检测状态函数=======================
var MyMusic = {
    isEnd:function(){
        var audio = document.getElementById("Home_Audio");
        var isEnd = audio.ended;
        if (!audio.paused&&audio.ended){
            Music.ChangeMusic(audio,true);
        }
    }
}
