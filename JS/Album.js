
var images = new Array();

images[0] = "老石.jpg";
images[1] = "泰国-曼谷.jpg";
images[2] = "风景-泰国-水上市场.jpg";
images[3] = "泰国-曼谷2.jpg";
images[4] = "泰国-曼谷3.jpg";
images[5] = "泰国-曼谷4.jpg";
images[6] = "泰国-曼谷5.jpg";
images[7] = "泰国-丛林.jpg";
images[8] = "泰国-丛林2.jpg";
images[9] = "WechatIMG7712.jpeg";
images[10] = "WechatIMG7713.jpeg";
images[11] = "WechatIMG7714.jpeg";
images[12] = "WechatIMG7715.jpeg";
images[13] = "WechatIMG7716.jpeg";
images[14] = "WechatIMG7717.jpeg";
images[15] = "WechatIMG7718.jpeg";
images[16] = "WechatIMG7719.jpeg";
images[17] = "WechatIMG7734.jpeg";
images[18] = "WechatIMG7735.jpeg";
images[19] = "WechatIMG7736.jpeg";
images[20] = "WechatIMG7737.jpeg";
images[21] = "WechatIMG7738.jpeg";
images[22] = "WechatIMG7742.jpeg";
images[23] = "WechatIMG7748.jpeg";

var Album = {
    init:function(){
        // var path =  getPath();
        
    },
}

window.onload = function(){
    Album.init();
}
function  getPath(){
    // var rootPath = document.getElementById("albumlaoshi");
    rootPath.scr
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0,index+1);
    return result;

}