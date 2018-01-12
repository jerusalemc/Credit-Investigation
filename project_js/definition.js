$(function () {
    var dom = document.getElementById("definition");
    $('#definition,.introduce').css('height',$('#definition').width()+40);
    var myChart = echarts.init(dom);
    var option = {
        title: {
            text: '通宝分定义关系图',
            left: 'center'
        },
        tooltip: {},
        legend: {
            show: false
            //data: ['个人得分'],
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '身份（A）', max: 0.5},
                { name: '资产（B）', max: 0.5},
                { name: '履约（C）', max: 0.5},
                { name: '关系（D）', max: 0.5},
                { name: '偏好（E）', max: 0.5},
            ]
        },
        series: [{
            name: '个人得分',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [0.2, 0.3, 0.3, 0.1, 0.1],
                    name : '通宝分定义'
                }
            ]
        }]
    };

    myChart.setOption(option, true);

});