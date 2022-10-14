var windinsWith=300;
var num = 0;
function checkWindinsWith() {
    windinsWith= window.innerWidth;
    $(".jUYtMW").css({
        'padding-left': windinsWith+"px"
    })
    var divlist=$(".jUYtMW").find('a');
    for(var i=0;i<divlist.length;i++){
        windinsWith+=divlist[i].offsetWidth;
    }
}
function init_title(){
    $('.lcMmtLName').children().remove();

    var dt = new Date();
    var m=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec");
    var mn=dt.getMonth();
    var wn=dt.getDate();
    //21-Jul-02 2002年7月21日
    $('.lcMmtLName').append(wn+"-"+m[mn]+"-"+dt.getFullYear());
}
function init_officialWebsitePriceNotice(){
    $('.jUYtMW').children().remove();
    //var urlPrefix="http://forwar.com";
    //var urlPrefix="http://forwarderone.91tests.net";
    var urlPrefix="https://portal.forwarderone.com";
    $.ajax({
        url: urlPrefix + "/api/Notice/officialWebsitePriceNotice",
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if (data.code == 0) {
                var list=data.data.list;
                var html="";
                for(var q=0;q<list.length;q++){
                    var obj=list[q];
                    if(obj.list.length>0){
                        for(var i=0;i<obj.list.length;i++){
                            var item=obj.list[i];
                            var qianzhui="";
                            if (i==0){
                                qianzhui=obj.notice_name
                                if (item.amazon_warehouse!=""){
                                    qianzhui=obj.notice_name+" - "
                                }
                            }
                            var path="<path fill=\"#5BB1E7\" fill-rule=\"nonzero\" d=\"M10 5H6.25V0h-2.5v5H0l5 5z\"></path>";
                            var color="#5BB1E7";
                            if (item.pricing_change_type==0){
                                path="<path fill=\"#ff352d\" fill-rule=\"nonzero\" d=\"M0 5h3.75v5h2.5V5H10L5 0z\"></path>";
                                color="#ff352d";
                            }
                            html+='<a class="marker">' +
                                '                                    <span class="lhSeIL">'+qianzhui+item.amazon_warehouse+':</span>' +
                                '                                    $'+item.new_price+' / '+item.charge_type +
                                '                                    <span class="cLBIHT">' +
                                '                                        <span style="color: '+color+'">'+item.pricing_change_range+'%</span>' +
                                '                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 -4 10 14">' + path +
                                '                                        </svg>' +
                                '                                    </span>' +
                                '                                </a>';
                        }
                    }else{
                        var qianzhui=obj.notice_name
                        html+='<a class="marker"><span class="lhSeIL">'+qianzhui+'</span></a>';
                    }

                    /*
                    <a className="marker">
                        <span className=" lhSeIL">Ocean Fast - ONT8/LGB8/LAX9:</span>
                        $x,xxx / kg
                        <span className="cLBIHT">
                                        xx%
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                             viewBox="0 -4 10 14">
                                            <path fill="#5BB1E7" fill-rule="nonzero"
                                                  d="M10 5H6.25V0h-2.5v5H0l5 5z"></path>
                                        </svg>
                                    </span>
                    </a>*/
                }
                $('.jUYtMW').append(html);
            }
            checkWindinsWith();
            modelInterval();
        },
        error: function (xhr, errorType, error) {
        }
    });
}
function goLeft() {
    if (num == -windinsWith) {//120是根据你给的尺寸，可变的
        num = 0;
    }
    num -= 1;
    $(".jUYtMW").css({
        left: num
    })
}
function modelInterval(){
    //滚动速度
    var timer = setInterval(goLeft, 10);
    //鼠标经过时滚动停止
    $(".hMDgDw").hover(
        function() {
            clearInterval(timer);
        },
        function() {
            timer = setInterval(goLeft, 10);
        }
   )
}


$(function() {
    init_title();
    init_officialWebsitePriceNotice();
    window.addEventListener('resize',function(){
        checkWindinsWith();
    });
})
