var Album = {
    init:function(){
        var path =  getPath();
    },
}

window.onload = function(){
    Album.init();
}
function  getPath(){
    var rootPath = document.getElementById("albumlaoshi");
    rootPath.scr
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0,index+1);
    return result;

}