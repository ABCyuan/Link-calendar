/**
 * Created by Administrator on 2017/5/19.
 */
window.onload=function () {
    var aInput=document.getElementsByTagName("input");
    var oDiv=document.getElementById("data");
    var aTd=document.getElementsByTagName("td");
    var bBtn=true;
    var onowTime=document.getElementById("nowTime")
    var onextTime=document.getElementById("nextTime");
    var onowSpan=onowTime.getElementsByTagName("span");
    var onextSpan=onextTime.getElementsByTagName("span");
    /*点击出现表格*/
    aInput[2].onclick=function () {
        var oDate=new Date();
        if(bBtn){
            oDiv.style.display="block";
            if(oDate.getMonth()+1==12){
                showDate(onowTime,oDate.getFullYear(),oDate.getMonth()+1,true);
                showDate(onextTime,oDate.getFullYear()+1,1);}
            else {
                showDate(onowTime,oDate.getFullYear(),oDate.getMonth()+1,true);
                showDate(onextTime,oDate.getFullYear(),oDate.getMonth()+2);}
            showColor(oDate.getDate());
            showBtn();
            showClick();
            hideLastTr();
        }
        else {
            oDiv.style.display="none";
        }
        bBtn=!bBtn;//点击的开关
    };
    /*绘制表单样式*/
    function showDate(obj,year,month,bBtn) {
        var oDate = new Date();
        var dayNum = 0;
        if (!obj.bBtn) {
            obj.oTitle = document.createElement("div");
            obj.oTitle.className = "title";
            obj.appendChild(obj.oTitle);
            obj.bBtn = true;
            var oTable = document.createElement("table");
            var oThead = document.createElement("Thead");
            var oTr = document.createElement("tr")
            var arry = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
            /*创建星期*/
            for (var i = 0; i < 7; i++) {
                var oTh = document.createElement("th");
                oTh.innerHTML = arry[i]
                if (i == 5 && i == 6) {
                    oTh.className = "red"
                }
                oTr.appendChild(oTh);
            }
            oThead.appendChild(oTr);
            oTable.appendChild(oThead);
            obj.appendChild(oTable);
            var oTbody = document.createElement("tBody");
            /*创建具体时间日期*/
            for (var i = 0; i < 6; i++) {
                var oTr = document.createElement("tr");
                for (var j = 0; j < 7; j++) {
                    var oTd = document.createElement("td");
                    oTr.appendChild(oTd);
                }
                oTbody.appendChild(oTr);
            }
            oTable.appendChild(oTbody);
            obj.appendChild(oTable);
            obj.bBtn = true;
        }
        /*插入表头信息*/
        obj.oTitle.innerHTML = ( bBtn ? "<div class='l'><span>" + (month - 1) + "</span>月</div>" : "<div class='r'><span>" + (month + 1) + "</span>月</div>")
            + "<div class='c'><span>" + year + "</span>年<span>" + month + "</span>月</span></div>";
        var aTd = obj.getElementsByTagName("td");
        /*每次清空表单*/
        for (var t = 0; t < aTd.length; t++) {
            aTd[t].innerHTML = "";
        }
        /*对月份的天数进行判断*/
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            dayNum = 31;
        }
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
            dayNum = 30;
        }
        else if (month == 2 && isLeapYear(year)) {
            dayNum = 29;
        }
        else {
            dayNum = 28;
        }
        ;
        oDate.setFullYear(year);//闰年判断
        oDate.setMonth(month - 1);
        oDate.setDate(1);
        /*对具体日期的插入地方进行判断*/
        switch (oDate.getDay()) {
            case 0:
                for (var i = 0; i < dayNum; i++) {
                    aTd[i + 6].innerHTML = i + 1;
                }
                break;
            case 1:
                for (var i = 0; i < dayNum; i++) {
                    aTd[i].innerHTML = i + 1;
                }
                break;
            case 2:
                for (var i = 0; i < dayNum; i++) {
                    aTd[i + 1].innerHTML = i + 1;
                }
                break;
            case 3:
                for (var i = 0; i < dayNum; i++) {
                    aTd[i + 2].innerHTML = i + 1;
                }
                break;
            case 4:
                for (var i = 0; i < dayNum; i++) {
                    aTd[i + 3].innerHTML = i + 1;
                }
                break;
            case 5:
                for (var i = 0; i < dayNum; i++) {
                    aTd[i + 4].innerHTML = i + 1;
                }
                break;
            case 6:
                for (var i = 0; i < dayNum; i++) {
                    aTd[i + 5].innerHTML = i + 1;
                }
                break;
        }
        /*var a=document.getElementsByTagName("a")[0];
         a.onclick=function () {
         //创建XMLHttpRequest对象
         var request=new XMLHttpRequest
         //准备发送数据的请求
         var method="GET";
         var url=this.href
         //调用XMLHttpRequest的open方法
         request.open(method,url)
         //调用XMLHttpRequest的send方法
         request.send(null);
         //为XMLHttpRequest添加onReadyStateChang函数
         request.onreadystatechange=function () {
         if(request.readyState==4){
         if(request.status==200||request.status==304){
         var result=request.responseText;
         var j=eval("("+result+")");
         var now=0;
         for(var i=0;i<aTd.length;i++){
         if(aTd[i].innerHTML==1){
         now=i;
         }
         }
         if(j.code){
         for(var i=0;i<j.list.length;i++){
         if(j.list[i]){
         var op=document.createElement("p")
         op.innerHTML=j.list[i];
         aTd[i+now].appendChild(op);
         }
         }
         }
         }
         }
         }
         return false
         }*/
        /*ajax异步请求*/
        /*ajax('add.js',Math.random(),function (str) {
         var j=eval('('+str+')');
         var now=0;
         for(var i=0;i<aTd.length;i++){
         if(aTd[i].innerHTML==1){
         now=i;
         }
         }
         if(j.code){
         for(var i=0;i<j.list.length;i++){
         if(j.list[i]){
         var op=document.createElement("p")
         op.innerHTML=j.list[i];
         aTd[i+now].appendChild(op);
         }
         }
         }
         })*/
        /*对表头信息的变换判定和限制*/
        if (month == 1 && bBtn) {
            obj.oTitle.getElementsByTagName("span")[0].innerHTML = 12;
        }
        else if (month == 12 && !bBtn) {
            obj.oTitle.getElementsByTagName("span")[0].innerHTML = 1;
        }
    }
    /*闰年判定函数*/
    function isLeapYear(year) {
        if (year % 4 == 0 && year % 100 !== 0) {
            return true
        }
        else {
            if (year%400 == 0) {
                return true
            }
            else {
                return false
            }
        }
    }
    /*日期颜色判定函数*/
    function showColor(date) {
        var oDate=new Date();
        var result=[];
        var re=new RegExp(''+date+'(<p>)*');
        var bBtn=true;
        var index=0;
        for(var i=0;i<aTd.length;i++){
            if(aTd[i]!==""){
                result.push(aTd[i])
            }
        }
        if(onowSpan[1].innerHTML==oDate.getFullYear()&&
            onowSpan[2].innerHTML==oDate.getMonth()+1){
            for(var i=0;i<result.length;i++){
                if(re.test(result[i].innerHTML)&&bBtn){
                    result[i].className="red";//当前日期为红色
                    index=i;
                    bBtn=false;
                }
            }
            for(len=index+11;index+1<len;index++){
                result[index+1].className="blue";//当前日期后十天为蓝色
            }
        }
        else {
            for(var i=0;i<result.length;i++){
                result[i].className="";
            }
        }
    }
    /*表头点击事件函数*/
    function showBtn() {
        var leftMonth=parseInt(onowSpan[0].innerHTML);
        var leftYear=parseInt(onowSpan[1].innerHTML);
        var rightMonth=parseInt(onextSpan[0].innerHTML);
        var rightYear=parseInt(onextSpan[1].innerHTML);
        /*当前时间表头*/
        onowSpan[0].parentNode.onclick=function () {
            if(leftMonth==12){
                showDate(onowTime,leftYear-1,leftMonth,true);
                showDate(onextTime,leftYear,1);
            }
            else {
                showDate(onowTime,leftYear,leftMonth,true);
                showDate(onextTime,leftYear,leftMonth+1);
            }

            /*启动函数可以让连续点击*/
            showBtn();
            showColor(new Date().getDate());
        }
        /*下个月表头点击事件*/
        onextSpan[0].parentNode.onclick=function () {
            if(rightMonth==1){
                showDate(onowTime,rightYear,12,true);
                showDate(onextTime,rightYear+1,rightMonth);
            }
            else {
                showDate(onowTime,rightYear,rightMonth-1,true);
                showDate(onextTime,rightYear,rightMonth);
            }
            showBtn();
            showColor(new Date().getDate());
            hideLastTr();
        }
    }
    /*点击日期表单出现时间及相对应的价格*/
    function showClick() {
        var re=/(\d+)*/;//如果有价格用正则表达式进行删选
        var oDtae=new Date();
        for(var i=0;i<aTd.length;i++){
            aTd[i].index=i;
            aTd[i].onclick=function () {
                if(this.className=='blue' || this.className=='red'){
                    if(this.index>aTd.length/2){//对左右进行判断
                        if((oDtae.getMonth()+2)==1){
                            aInput[0].value=(oDtae.getFullYear()+1)+"-"+(oDtae.getMonth()+2)+"-"+this.innerHTML;
                        }
                        else {
                            aInput[0].value=oDtae.getFullYear()+"-"+(oDtae.getMonth()+2)+"-"+this.innerHTML;
                        }
                    }
                    else {
                        aInput[0].value=oDtae.getFullYear()+"-"+(oDtae.getMonth()+1)+"-"+this.innerHTML;
                    }
                }
                oDiv.style.display="none";
                bBtn=true;
            }

        }
    }
    /*多出来的tr隐藏函数*/
    function hideLastTr() {
        var bBtn=true;
        var bBtn2=true;
        for(var i=35;i<42;i++){
            if(aTd[i].innerHTML!=""){
                bBtn=false;
            }
        }
        if(bBtn){
            for(var i=35;i<42;i++){
                aTd[i].style.display="none"
            }
        }
        else {
            for(var i=35;i<42;i++){
                aTd[i].style.display="";
            }
        }
        for(var i=77;i<84;i++){
            if(aTd[i].innerHTML!=""){
                bBtn2=false;
            }
        }
        if(bBtn2){
            for(var i=77;i<84;i++){
                aTd[i].style.display="none"
            }
        }
        else {
            for(var i=77;i<84;i++){
                aTd[i].style.display="";
            }
        }
    }
}