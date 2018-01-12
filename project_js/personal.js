$(function () {
    var dom = document.getElementById("score");
    $('#score').css('height', $('#score').width() + 40);
    var myChart = echarts.init(dom);
    option = null;
    option = {
        title: {
            text: '个人得分',
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
                {name: '身份（A）', max: 1},
                {name: '履约（B）', max: 1},
                {name: '历史（C）', max: 1},
                {name: '关系（D）', max: 1},
                {name: '偏好（E）', max: 1},
                {name: '扶贫专项因子（F）', max: 1}
            ]
        },
        series: [{
            name: '个人得分',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [0, 0, 0, 0, 0, 0],
                    name: '当前得分: 0分'
                }
            ]
        }]
    };
    ;

    /*$.post( "http://202.120.32.247:54324/api/v1.0/user/login", { "mobile": "15316761529", "password": "123" })
     .done(function( data ) {*/
    $.post("http://202.120.32.247:54324/api/v1.0/personal/self/summary", {
        "mobile": Cookies.get,
        "token": JSON.parse(data).token
    })
        .done(function (result) {
            var res = JSON.parse(result).data
            option.series[0].data[0].name = '当前得分: '.concat(res.total).concat('分')
            option.series[0].data[0].value = [res.A, res.B, res.C, res.D, res.E, res.F]

            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        });

    /*});*/


    var historyDom = document.getElementById("history");
    $('#history').css('height', $('#history').width() + 40);
    var history = echarts.init(historyDom);
    var historyOption = {
        title: {
            text: '历史得分变化',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            name: 'x(时间)',
            splitLine: {show: false},
            data: []
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            name: 'y(分)',
            max: 600,
            min: 400,
            show: true
        },
        series: [
            {
                name: '历史得分',
                type: 'line',
                data: [],
                label: {normal: {show: true}}
            },
        ]
    };

    $.post("http://202.120.32.247:54324/api/v1.0/user/login", {"mobile": "15316761529", "password": "123"})
        .done(function (data) {
            $.post("http://202.120.32.247:54324/api/v1.0/personal/self/history/scores", {
                "mobile": "15316761529",
                "token": JSON.parse(data).token
            })
                .done(function (result) {
                    var res = JSON.parse(result).data
                    for (var i = 0; i < res.length; i++) {
                        historyOption.series[0].data.push(res[i].total)
                        historyOption.xAxis.data.push(res[i].time)
                    }
                    historyOption.yAxis.min = parseInt(res[0].total) - 50
                    historyOption.yAxis.max = parseInt(res[res.length - 1].total) + 50
                    if (historyOption && typeof historyOption === "object") {
                        history.setOption(historyOption, true);
                    }
                });

        });
});
