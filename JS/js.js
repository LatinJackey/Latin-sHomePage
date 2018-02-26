
function helloworld(){
    document.getElementById("secondimg").src="./images/3.jpg";
}
var musics = new Array();
musics[0] = "Calvo,Noubya - Light It Up (Original Mix)";
musics[1] = "EDX - High On You";
musics[2] = "Josh Turner - Your Man";
musics[3] = "Moguai,Cheat Codes - Hold On (Radio Edit)";
musics[4] = "刘允乐 - 太早";
musics[5] = "北极星";
musics[6] = "谭茜 - 光明";
    
function MenuClick(){
    var getNum = Math.random();
    let chooseNum = Math.floor(getNum *7);
    console.log(chooseNum);
    document.getElementById("music").src= "./musics/"+musics[chooseNum]+".mp3";
   
    // alert("点击了菜单");
}