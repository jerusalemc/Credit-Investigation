var data = {};
var Province = '贵州省';
var catagroy = 1;


var TimeFn = null;



$(function () {
    var height = $(window).height()-120;
    if($('#map-chart').width()<height){
        height = $('#map-chart').width();
    }
    $('#map-chart').css('height', height);
    $('.half-height').css('height', $('#map-chart').height() / 2);
    $('.mypanel').css('height',height-100);
    $('#show1,#show2').css('height',height-220);
    var data1 = [
    {name:'天津公积金中心	',value:[117.675428,39.152633,1]},
    {name:'乌鲁木齐公积金中心	',value:[89.21836,43.819589,10]},
    {name:'昆明公积金中心	',value:[100.700931,24.988829,13]},
    {name:'杭州市公积金中心	',value:[120.275144,29.168198,29]},
    {name:'西安市公积金中心	',value:[110.021417,35.383852,14]},
    {name:'成都市公积金中心	',value:[105.071571,31.67103,22]},
    {name:'太原公积金中心	',value:[112.535193,37.077485,15]},
    {name:'上海公积金中心	',value:[121.522767,31.225628,1]},
    {name:'潍坊公积金中心	',value:[120.172819,36.718825,17]},
    {name:'银川公积金中心	',value:[106.335279,37.591476,8]},
    {name:'沈阳公积金中心	',value:[124.424367,42.502176,15]},
    {name:'吉林市公积金中心	',value:[127.549686,43.844961,10]},
    {name:'青海省公积金中心	',value:[99.74,36.56,11]},
    {name:'南昌市公积金中心	',value:[115.877549,28.008181,12]},
    {name:'南京市公积金中心	',value:[119.801999,33.054194,18]},
    {name:'湖南省直公积金中心	',value:[111.995591,27.591306,15]},
    {name:'武汉公积金中心	',value:[112.30175,30.665442,22]},
    {name:'河南省直公积金中心	',value:[114.699464,33.773527,22]},
    {name:'哈尔滨公积金中心	',value:[127.649163,46.778089,12]},
    {name:'石家庄市公积金中心	',value:[115.092355,38.96195,10]},
    {name:'海南省直公积金中心	',value:[110.026725,19.074377,2]},
    {name:'贵阳市公积金中心	',value:[107.717386,27.593569,9]},
    {name:'桂林公积金中心	',value:[109.292988,24.277779,15]},
    {name:'广州公积金中心	',value:[115.054323,23.635759,20]},
    {name:'兰州市公积金中心	',value:[104.824427,35.561435,1]},
    {name:'福州市公积金中心	',value:[119.314168,27.078082,10]},
    {name:'重庆公积金中心	',value:[107.864985,29.568903,1]},
    {name:'北京公积金中心	',value:[116.562072,40.327996,2]},
    {name:'安徽省直公积金中心	',value:[118.28866,30.85702,22]},
    {name:'包头公积金中心	',value:[108.92,40.62,8]}
];
    var data2 = [
    {name:'合肥市社保	',value:[117.232368,30.830116,12]},
    {name:'北京居民社保	',value:[116.562072,40.327996,1]},
    {name:'重庆社保	',value:[107.864985,29.568903,1]},
    {name:'福州市社保	',value:[119.314168,27.078082,12]},
    {name:'兰州市社保	',value:[104.824427,35.561435,1]},
    {name:'广州市社保	',value:[115.054323,23.635759,21]},
    {name:'桂林社保	',value:[109.292988,24.277779,10]},
    {name:'贵阳社保	',value:[107.717386,27.593569,7]},
    {name:'三亚社保	',value:[109.522318,18.784105,2]},
    {name:'石家庄市社保	',value:[115.092355,38.96195,6]},
    {name:'哈尔滨社保	',value:[126.697362,46.758992,8]},
    {name:'洛阳社保	',value:[112.401472,33.659022,15]},
    {name:'武汉社保	',value:[112.328723,30.551696,15]},
    {name:'长沙市社保	',value:[111.993127,29.201599,15]},
    {name:'南京市社保	',value:[119.801999,33.054194,16]},
    {name:'南昌市社保	',value:[115.877549,28.008181,6]},
    {name:'长春社保	',value:[125.853269,43.26913,1]},
    {name:'沈阳社保	',value:[124.424367,42.502176,13]},
    {name:'银川社保	',value:[106.335279,37.591476,5]},
    {name:'济南社保	',value:[117.001004,35.67246,16]},
    {name:'上海市社保	',value:[121.507808,31.188046,1]},
    {name:'太原社保	',value:[112.535193,37.077485,11]},
    {name:'成都社保	',value:[105.071571,31.67103,17]},
    {name:'天津社保	',value:[117.675428,39.152633,1]},
    {name:'昆明社保	',value:[100.700931,24.988829,16]},
    {name:'杭州市社保	',value:[120.275144,29.168198,34]},
    {name:'西安市社保	',value:[110.021417,35.383852,11]},
    {name:'乌鲁木齐社保	',value:[87.612268,42.332083,3]},
    {name:'包头社保	',value:[108.92,40.62,12]},

];
    var data4 = {
        '新疆':[85,41],
        '西藏':[88,32],
        '青海':[96,36],
        '甘肃':[98,40],
        '内蒙':[115,44],
        '黑龙':[129,47],
        '吉林':[126,44],
        '辽宁':[123,42],
        '河北':[115,39],
        '山西':[112,38],
        '陕西':[108,35],
        '宁夏':[106,38],
        '四川':[102,31],
        '云南':[101,25],
        '广西':[109,24],
        '广东':[113,24],
        '福建':[118,26],
        '浙江':[120,30],
        '江西':[115,28],
        '湖南':[111,28],
        '贵州':[107,27],
        '重庆':[108,30],
        '湖北':[112,32],
        '河南':[113,34],
        '安徽':[117,32],
        '山东':[118,37],
        '江苏':[120,34],
        '北京':[116,41],
        '天津':[117,40],
        '上海':[121,32],
        '海南':[110,20],
        '台湾':[121,24],
        '香港':[114,23],
        '澳门':[113,21],
        };


    option = {
        title: {
        top: '8%',
        left:'25%',
        text:'覆盖全国373个公积金中心数据',
        textStyle:{
            color:'#ffffff',
            fontSize:23,
            }
        },
        tooltip:{
            formatter:function (obj) {
                return obj.value[2];
            }
        },
    geo: {
            map: 'china',
            roam: false,
            top:'5%',
            width:'80%',
            bottom:'8%',
            layoutCenter: ['100%', '100%'],
            label: {
                normal: {
                    areaColor:'#ffffff',
                    show: true,
                    textStyle: {
                    color: 'rgba(0,0,0,0.4)',
                    },
                }
            },
            itemStyle: {
                normal:{
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                emphasis:{
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
        series : [
            {
                name : 'star',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol:'image://./images/456.png',
                data: [{name:'贵州',value:[107,26]}],
                symbolSize:30,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false,
                        textStyle: {
                            color: '#000'
                        }
                    },
                    emphasis: {
                        show: false,
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'yellow'
                    }
                }
            },

            {
                name : 'star',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol:'image://./images/star.png',
                data: data1,
                symbolSize: function (val) {
                    return val[2]+3;
                },
                // label: {
                //     normal: {
                //         formatter: '{b}',
                //         position: 'right',
                //         show: false,
                //         textStyle: {
                //             color: '#000'
                //         }
                //     },
                //     emphasis: {
                //         show: true
                //     }
                // },
                itemStyle: {
                    normal: {
                        color: 'yellow'
                    }
                }
            },
            {
                    name: 'province',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    selectedMode : 'single',
                    width:'80%',
                    top:'5%',
                    bottom:'8%',
                    itemStyle: {
                        normal: {
                            areaColor:'#ffffff',
                            label: {
                                show: true,
                                textStyle: {
                                color: 'grey',
                            },
                            },
                            type: 'solid',
                            borderColor: '#123456',
                        },
                        emphasis: {
                            label: {show: true},
                            borderColor: '#fff',
                    borderWidth: 1
                        }
                    },
                    data:[
                        {name:'贵州省',selected:true}
                    ]
                }
        ]
};
    $("#scroll").niceScroll({cursorcolor:"#c5e3ff",cursorborderradius:'10px',cursorwidth:'6px'});
    $('#show1,#show2').niceScroll({cursorcolor:"#c5e3ff",cursorborderradius:'10px',cursorwidth:'10px'});
    //$(".myscroll").niceScroll({styler:"fb",cursorcolor:"#c5e3ff",cursorwidth:'6',cursorborderradius:'10px',background:'#f3f3f3',spacebarenabled:false,cursorborder:'0',zindex:'1000'});
    var myChart = echarts.init(document.getElementById('map-chart'));

    myChart.setOption(option, true);
    function init(){
        var selected =Province;
        $('.table-title').text(selected);
        //var str = "<tr><td style='text-align: center'>"+selected+"</td></tr>";
        var str ="";

        for (i in data){
            if (data[i] == selected){
                str += "<tr ><td style='border-radius: 20px;text-align: center'>"+i+"</td></tr>"
            }
        }

        document.getElementById("partTable").innerHTML=str;
    }

    myChart.on('click', function (param) {
        var selected = param['name'].trim();
        var series = param['seriesName'].trim();
        Province = selected;
        if (series == 'province') {
            str = selected[0]+selected[1] ;
            console.log(str);
            option.series[0].data = [{name:str,value:data4[str]}];
            option.series[2].data = [{name:selected,selected:true}];
            myChart.setOption(option, true);
            $('.table-title').text(selected);
            var str = "";
            if (catagroy == 1){
                for (i in data) {
                    if (data[i] == selected) {
                        str += "<tr><td style='border-radius: 20px;text-align: center'>" + i + "</td></tr>"
                    }
                }
            }
            else{
            for (i in data){
                if (data[i][0] == selected[0]&&data[i][1] == selected[1]){
                    str += "<tr ><td style='border-radius:20px;text-align: center'>"+i+"</td></tr>"
                }
            }
        }
            document.getElementById("partTable").innerHTML=str;

        }
    });
//

    $.ajax({
        type: "get",
        url: "http://202.120.32.247:54324/api/v1.0/sources/list/FUND",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (result) {
            for (i in result.data) {
                var province = result.data[i].name;
                for (k in result.data[i].childOrgs){
                 var key = result.data[i].childOrgs[k].name;
                 data[key] = province;
                }
            }
            init();
        }
    });

    $('#n1').click(function () {
        catagroy = 1;
        getFund();
        option.series[1].data = data1;
        option.title.text = '覆盖全国373个公积金中心数据',
        myChart.setOption(option, true);
        $('#n1').css('height','40px');
        $('#n1').css('width','80px');
        $('#n1').css('background','#ffffff');
        $('#n2').css('height','35px');
        $('#n2').css('width','70px');
        $('#n2').css('background-color','#c5e3ff');

        $('#show1').css('display','');
        $('#show2').css('display','none');
        $("#title").text('公积金');
        $('#n3').css('height','40px');
        $('#n3').css('width','80px');
        $('#n3').css('background','#ffffff');
        $('#n4').css('height','35px');
        $('#n4').css('width','70px');
        $('#n4').css('background-color','#c5e3ff');


    })
    $('#n2').click(function () {
        catagroy = 2;
        getSocialSecurity();
        option.series[1].data = data2;
        option.title.text = '覆盖全国292个社保中心数据',
        myChart.setOption(option, true);
        $('#n2').css('height','40px');
        $('#n2').css('width','80px');
        $('#n2').css('background','#ffffff');
        $('#n1').css('height','35px');
        $('#n1').css('width','70px');
        $('#n1').css('background-color','#c5e3ff');

        $('#show1').css('display','none');
        $('#show2').css('display','');
        $("#title").text('社保');
        $('#n4').css('height','40px');
        $('#n4').css('width','80px');
        $('#n4').css('background','#ffffff');
        $('#n3').css('height','35px');
        $('#n3').css('width','70px');
        $('#n3').css('background-color','#c5e3ff');


    })
    $('#img1').click(function () {
        $('#map').css('display','none');
        $('#show').css('display','');
        $('#uparrow').css('display','');

    })
    $('#img2').click(function () {
        $('#map').css('display','');
        $('#show').css('display','none');
        $('#uparrow').css('display','none');
    })
    $('#n3').click(function () {
        $("#title").text('公积金');
        $('#show1').css('display','');
        $('#show2').css('display','none');
        $('#n3').css('height','40px');
        $('#n3').css('width','80px');
        $('#n3').css('background','#ffffff');
        $('#n4').css('height','35px');
        $('#n4').css('width','70px');
        $('#n4').css('background-color','#c5e3ff');

        catagroy = 1;
        getFund();
        option.series[1].data = data1;
        option.title.text = '覆盖全国373个公积金中心数据',
        myChart.setOption(option, true);
        $('#n1').css('height','40px');
        $('#n1').css('width','80px');
        $('#n1').css('background','#ffffff');
        $('#n2').css('height','35px');
        $('#n2').css('width','70px');
        $('#n2').css('background-color','#c5e3ff');


    })
    $('#n4').click(function () {
        button = 1;
        $("#title").text('社保');
        $('#show1').css('display','none');
        $('#show2').css('display','');
        $('#n4').css('height','40px');
        $('#n4').css('width','80px');
        $('#n4').css('background','#ffffff');
        $('#n3').css('height','35px');
        $('#n3').css('width','70px');
        $('#n3').css('background-color','#c5e3ff');

        catagroy = 2;
        getSocialSecurity();
        option.series[1].data = data2;
        option.title.text = '覆盖全国292个社保中心数据',
        myChart.setOption(option, true);
        $('#n2').css('height','40px');
        $('#n2').css('width','80px');
        $('#n2').css('background','#ffffff');
        $('#n1').css('height','35px');
        $('#n1').css('width','70px');
        $('#n1').css('background-color','#c5e3ff');
    });

$('h4.panel-title').click(function () {

    // 取消上次延时未执行的方法
    clearTimeout(TimeFn);
    var that = $(this);
    //执行延时
    TimeFn = setTimeout(function(){
        //do function在此处写单击事件要执行的代码
        var img=that.find('img');
        if(img.hasClass('down')){
            img.attr('src','./images/upArrow.png').removeClass('down');
        }
        else{
            img.attr('src','./images/downArrow.png').addClass('down');
        }

    },10);
    $('.myscroll').niceScroll({autohidemode:'leave',cursorcolor:"#c5e3ff",cursorborderradius:'10px',cursorwidth:'10px'});
    $('#show1,#show2').niceScroll({cursorcolor:"#c5e3ff",cursorborderradius:'10px',cursorwidth:'10px'});

});

$('h4.panel-title').dblclick(function(){
     // 取消上次延时未执行的方法
    clearTimeout(TimeFn);
    //双击事件的执行代码
})


    /*$('h4.panel-title').click(function () {
        var img=$(this).find('img');
        var type = $($(this).attr('href')).css('display');
        if(img.hasClass('down')){
            img.attr('src','./images/upArrow.png').removeClass('down');
        }
        else{
            img.attr('src','./images/downArrow.png').addClass('down');
        }
    })*/


});
function getFund() {
        $.ajax({
        type: "get",
        url: "http://202.120.32.247:54324/api/v1.0/sources/list/FUND",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (result) {
            data = {};
            for (i in result.data)
            {
             var province = result.data[i].name;
             for (k in result.data[i].childOrgs)
             {
                 var key = result.data[i].childOrgs[k].name;
                 data[key] = province;
             }
             }
            var selected = Province;
            $('.table-title').text(selected)
            //var str = "<tr><td style='text-align: center'>"+selected+"</td></tr>";
            var str ="";
            for (i in data){
                if (data[i] == selected){
                    str += "<tr><td style='border-radius:20px;text-align: center'>"+i+"</td></tr>"
                }
            }
            document.getElementById("partTable").innerHTML=str;
            }
    });
    }
function getSocialSecurity () {
        $.ajax({
        type: "get",
        url: "http://202.120.32.247:54324/api/v1.0/sources/list/SOCIALSECURITY",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (result) {
            data = {};
            for (i in result.data)
            {
             var province = result.data[i].name;
             for (k in result.data[i].childOrgs)
             {
                 var key = result.data[i].childOrgs[k].name;
                 data[key] = province;
             }
             }

            var selected = Province;
            $('.table-title').text(selected)
            var str ="";
            for (i in data){
                if (data[i][0] == selected[0]&&data[i][1] == selected[1]){
                    str += "<tr ><td style='border-radius:20px;text-align: center'>"+i+"</td></tr>"
                }
            }
            document.getElementById("partTable").innerHTML=str;
            }
    });

    }
