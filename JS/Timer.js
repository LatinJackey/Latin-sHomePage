// var gtimer;

var MyTimer={

    MyTimerMain:function(){
        setInterval(MyTimer.startTimer,1000);
        MyTimer.startTimer();
    }, 
    startTimer:function(){
        MyMusic.isEnd();
        var dom_tiemr = document.getElementById("Timer");
        var currentDate = MyTimer.getCurrentDate();
        dom_tiemr.innerHTML = currentDate["year"]+"年"+currentDate["month"]+"月"+currentDate["day"]+"日"+" "+currentDate["hours"]+":"+currentDate["minutes"]+":"+currentDate["seconds"];
    },
    endTimer:function(){
        window.clearInterval(gtimer);
    },
    getCurrentDate:function(){
        var currentDate = new Date ();//获取当前时间对象
        var year = currentDate.getFullYear();//当前年
        var month = currentDate.getMonth() + 1;//当前月
        var day = currentDate.getDate();//当前日
        console.log('hello',month,day);

        var hours = MyTimer.changeDou(currentDate.getHours());//当前小时 格式:00
        var minutes = MyTimer.changeDou(currentDate.getMinutes());//当前分钟 格式:00
        var seconds = MyTimer.changeDou(currentDate.getSeconds());//当前秒数 格式:00

        return {"year":year,"month":month,"day":day,"hours":hours,"minutes":minutes,"seconds":seconds}
    },
    
    changeDou:function(Num){
        return Num>=10?Num:("0"+Num);
    },
}
