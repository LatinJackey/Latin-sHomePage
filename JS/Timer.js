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
        dom_tiemr.innerHTML = currentDate["year"]+"年"+currentDate["month"]+"月"+currentDate["day"]+"日"+" "+"星期"+currentDate["week"]+" "+currentDate["hours"]+":"+currentDate["minutes"]+":"+currentDate["seconds"];
    },
    endTimer:function(){
        window.clearInterval(gtimer);
    },
    getCurrentDate:function(){
        var currentDate = new Date ();//获取当前时间对象
        var year = currentDate.getFullYear();//当前年
        var month = currentDate.getMonth() + 1;//当前月
        var day = currentDate.getDate();//当前日

        var week = MyTimer.changeWeek(currentDate.getDay());//当前星期
        var hours = MyTimer.changeDou(currentDate.getHours());//当前小时 格式:00
        var minutes = MyTimer.changeDou(currentDate.getMinutes());//当前分钟 格式:00
        var seconds = MyTimer.changeDou(currentDate.getSeconds());//当前秒数 格式:00

        return {"year":year,"month":month,"day":day,"week":week,"hours":hours,"minutes":minutes,"seconds":seconds}
    },
    
    changeDou:function(Num){
        return Num>=10?Num:("0"+Num);
    },

    changeWeek:function(week){
        var changedWeek;
        week = parseInt(week);
        switch (week){
            case (1):{
                changedWeek = "一";
            }
            break;
            case (2):{
                changedWeek = "二";
            }
            break;
            case (3):{
                changedWeek = "三";
            }
            break;
            case (4):{
                changedWeek = "四";
            }
            break;
            case (5):{
                changedWeek = "五";
            }
            break;
            case (6):{
                changedWeek = "六";
            }
            break;
            case (0):{
                changedWeek = "日";
            }
            break;

        };
        return changedWeek;
    },
}
