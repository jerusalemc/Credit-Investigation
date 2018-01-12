$(function () {
    var provincemap = {};
    var citymap = {};
    var score = ['420-440', '440-460', '460-480', '480-500', '500-520', '520-540'];
    ;
    var region = ['黔西南州', '六盘水', '毕节', '铜仁', '黔东南州', '黔南州', '安顺', '遵义', '贵阳'];
    var total = [283.82, 290.69, 664.18, 314.07, 350.74, 326.12, 232.86, 622.84, 469.68];
    var userNumber = [];
    var userPercent = [];
    var cityScore = {};
    var toatalScore = [];
    var scorePercent = [];
    var data;
    
    barOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: function (name) {
                return name[0].name + '<br>人口总数' + name[0].value + '万人<br>通宝分人数: ' + name[1].value + '万人<br>通宝分人数所占百分比: ' + name[2].value;
            }

        },
        grid: {},
        color: ['rgb(255,255,255)', 'rgb(255,220,60)', 'rgb(250,110,145)'],
        toolbox: {
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                //saveAsImage: {show: true}
            },
            iconStyle: {
                normal: {
                    color: '#ffffff',
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderColor: '#ffffff',
                    shadowOffsetY: '#ffffff',
                }
            }
        },
        legend: {
            data: ['人口总数', '通宝分人数', '百分比'],
            textStyle: {
                color: '#ffffff',
            }
        },
        grid: {
            right: 70
        },
        yAxis: [
            {
                type: 'category',
                data: region,
                axisLabel: {
                    color: '#ffffff'
                },
                axisLine: {
                    lineStyle: {
                        color: '#bfbfbf',
                    }
                }
            }
        ],
        xAxis: [
            {
                axisLine: {
                    lineStyle: {
                        color: '#bfbfbf',
                    }
                },
                splitLine: {show: false},
                type: 'value',
                name: '人数(万人)',
                nameTextStyle: {
                    color: '#ffffff',
                },
                min: 0,
                max: 700,
                interval: 100,
                axisLabel: {
                    formatter: '{value}',
                    color: '#ffffff'
                }
            },
            {
                axisLine: {
                    lineStyle: {
                        color: '#bfbfbf',
                    }
                },
                splitLine: {show: false},
                type: 'value',
                name: '百分比(%)',
                nameTextStyle: {
                    color: '#ffffff',
                },
                min: 0,
                max: 50,
                interval: 10,
                axisLabel: {
                    formatter: '{value}',
                    color: '#ffffff'
                }
            }
        ],
        series: [
            {
                name: '人口总数',
                type: 'bar',
                data: total
            },
            {
                name: '通宝分人数',
                type: 'bar',
                data: [24.9030, 37.4176, 40.8103, 24.2153, 22.1525, 23.2088, 21.9760, 59.8562, 21.976]
            },
            {
                name: '百分比',
                type: 'line',
                xAxisIndex: 1,
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [8.77, 12.87, 6.14, 7.71, 6.32, 7.12, 9.44, 9.61, 17.97]
            }
        ]
    };

    scoreOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: function (name) {
                return name[0].name + '<br>' + name[0].seriesName + ': ' + name[0].value + '万人<br>' + name[1].seriesName + ': ' + name[1].value + '万人<br>人数所占百分比: ' + name[2].value;
            }
        },
        legend: {
            data: ['全省', '贵阳', '百分比'],
            textStyle: {
                color: '#ffffff',
            }
        },
        color: ['rgb(255,255,255)', 'rgb(255,220,60)', 'rgb(250,110,145)'],
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                //saveAsImage: {show: true}
            },
            iconStyle: {
                normal: {
                    color: '#ffffff',
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderColor: '#ffffff',
                    shadowOffsetY: '#ffffff',
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                axisLine: {
                    lineStyle: {
                        color: '#bfbfbf',
                    }
                },
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E', 'F'],
                axisLabel: {
                    color: '#ffffff'
                }
            }
        ],
        yAxis: [
            {
                axisLine: {
                    lineStyle: {
                        color: '#bfbfbf',
                    }
                },
                splitLine: {show: false},
                type: 'value',
                name: '人数(万人)',
                nameTextStyle: {
                    color: '#ffffff',
                },
                min: 0,
                max: 80,
                interval: 20,
                axisLabel: {
                    formatter: '{value}',
                    color: '#ffffff'
                }
            },
            {
                axisLine: {
                    lineStyle: {
                        color: '#bfbfbf',
                    }
                },
                splitLine: {show: false},
                type: 'value',
                name: '百分比(%)',
                nameTextStyle: {
                    color: '#ffffff',
                },
                min: 0,
                max: 50,
                interval: 10,
                axisLabel: {
                    formatter: '{value}',
                    color: '#ffffff'
                }
            }
        ],
        series: [
            {
                name: '全省',
                type: 'bar',
                barWidth: 15,
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7],

            },
            {
                name: '贵阳',
                type: 'bar',
                barWidth: 15,
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7],

            },
            {
                name: '百分比',
                type: 'line',
                yAxisIndex: 1,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: [8.77, 12.87, 6.14, 7.71, 6.32, 7.12]

            }
        ]
    };


    var geoCoordMap = [
        {name: '贵阳', value: [106.713478, 26.78]}, //
        {name: '六盘水', value: [104.846743, 26.58]}, //
        {name: '遵义', value: [106.937265, 27.95]},
        {name: '安顺', value: [105.932188, 26.24]}, //
        {name: '毕节', value: [105.28501, 27.30]}, //
        {name: '铜仁', value: [108.491555, 27.72]},
        {name: '黔西南州', value: [104.997971, 25.3]}, //
        {name: '黔东南州', value: [108.477488, 26.58]},
        {name: '黔南州', value: [107.417156, 26.26]} //
    ];
    var geoCoordMap2 = [
        {name: '贵阳', value: [106.713478, 26.78]},
        {name: '六盘水', value: [104.846743, 26.58]},
        {name: '遵义', value: [106.937265, 27.95]},
        {name: '安顺', value: [105.932188, 26.24]},
        {name: '毕节', value: [105.28501, 27.30]},
        {name: '铜仁', value: [108.491555, 27.72]},
        {name: '黔西南州', value: [104.997971, 25.3]},
        {name: '黔东南州', value: [108.477488, 26.58]},
        {name: '黔南州', value: [107.417156, 26.26]}
    ];
    var data = [];

    option = {
        tooltip: {
            trigger: 'item',
            formatter: function (param) {
                var series = param['seriesName'].trim();
                var area = param['name'].trim();
                return area + '<br>' + series + ":" + param['data']['count'] + '万次';
            }
        },
        animation: false,
        geo: {
            map: '贵州',
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true
                },

            },
            roam: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgb(200,200,200)',
                    areaColor: '#fff'
                },
                emphasis: {
                    areaColor: 'rgb(255,220,60)',
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param) {
                    var series = param['seriesName'].trim();
                    var area = param['name'].trim();
                    return area + '<br>' + series + ":" + param['data']['count'] + '万次';
                }
            },
            left: 0,
            top: 0,
            bottom: 30,
            right: 50
        },
        series: [
            {
                name: '通宝分调用次数',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'image://./images/droplet.png',
                symbolSize: function (val) {
                    return 45 + 5 * parseInt(parseFloat(val[2]) / 100);
                },
                //data: [{name:'贵阳',value:[106.713478,26.71],count:12,label:{normal:{posotion:[13,10]}}}],
                label: {
                    normal: {
                        formatter: function (params) {
                            return params['data']['count'];
                        },
                        position: 'inside',
                        offset: [0, -10],
                        color: '#fff',
                        show: true,

                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(255,150,120)',
                        shadowBlur: 10,
                        shadowColor: 'rgb(255,150,120)'
                    }
                },
                zlevel: 1
            },
            {
                name: '通宝分调用次数',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: geoCoordMap,
                formatter: function (params) {
                    return params['data']['count'];
                },
                symbolSize: function (val) {
                    return 30 + 5 * parseInt(parseFloat(val[2]) / 100);
                },
                showEffectOn: 'emphasis',
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(100,220,255)',
                        shadowBlur: 10,
                        shadowColor: 'rgb(100,220,255)'
                    }
                },

            },
            {
                name: '通宝分调用次数',
                type: 'map',
                geoIndex: 0,
                tooltip: {show: true},
                data: [{'name': '贵阳', count: 12}]
            }

            /*{
             name: 'Top5',
             type: 'map',
             mapType: '贵州',
             roam: true,
             scaleLimit: {
             max: 2,
             min: 0.5
             },
             width: '100%',
             itemStyle: {
             normal: {
             label: {
             show: false,
             },
             type: 'solid',
             borderColor: '#fff',
             },
             emphasis: {
             label: {show: true},
             borderColor: '#fff',
             }
             },
             data: [
             {name: '贵阳','value':1300000},
             ],
             markPoint: {
             symbol: 'circle',
             symbolSize: 25,
             silent:true,
             itemStyle: {
             normal: {
             color:'rgb(100,220,255)',
             label: {show: false}
             },
             emphasis: {
             show:false
             }
             },
             data: [
             {name: "贵阳", coord: [106.713478,26.578343]},
             ]
             }
             },
             {
             name: '市',
             type: 'map',
             mapType: '贵州',

             markPoint: {
             //type:'effectScatter',
             symbolSize: 50,
             showEffectOn: 'emphasis',
             rippleEffect: {
             brushType: 'stroke'
             },
             hoverAnimation: true,
             label: {
             normal: {
             formatter: '{c}',
             position: 'insideTop',
             show: true,
             offset:[0,3]
             }
             },
             itemStyle: {
             normal: {
             color:'rgb(255,150,190)',
             },
             emphasis: {
             borderColor: 'rgb(255,150,190)',
             borderWidth: 5,
             label: {
             show: false
             }
             }
             },
             data : [
             {name: "贵阳", value:33,coord: [106.713478,26.578343]},

             ],

             },


             },
             */
        ]
    };

    var height = $(window).height()-120;
    if($('#map-chart').width()<height){
        height = $('#map-chart').width();
    }
    $('#map-chart').css('height', height);
    $('.half-height').css('height', $('#map-chart').height() / 2);
    var mapChart = echarts.init(document.getElementById('map-chart'));
    var barChart = echarts.init(document.getElementById('bar-chart'));
    var scoreChart = echarts.init(document.getElementById('bar1-chart'));
    mapChart.setOption(option, true);

    $.ajax({
        type: "GET",
        url: "http://202.120.32.247:54324/api/v1.0/statistics/guizhou",
        dataType: "json",
        success: function (response) {
            if (response['code'] == 200) {
                data = response['data'];
                getUserNumber(data);
                getProviceScore(data, '贵阳');
            }

        }
    });

    var mapData = [];

    function setMap() {
        $.ajax({
            type: "GET",
            url: "http://202.120.32.247:54324/api/v1.0/statistics/apicount",
            dataType: "json",
            success: function (response) {
                if (response['code'] == 200) {
                    data = response['data'];
                    for (var i in data) {
                        var json = {};
                        json['name'] = data[i]['area']
                        json['count'] = (data[i]['count'] / 10000).toFixed(1);
                        mapData.push(json);
                        for (var j in geoCoordMap2) {
                            if (geoCoordMap2[j]['name'] == data[i]['area']) {
                                var num = (data[i]['count'] / 10000).toFixed(1);
                                geoCoordMap2[j]['count'] = num;
                                geoCoordMap[j]['count'] = num;
                                geoCoordMap[j]['value'][2] = num;
                                geoCoordMap2[j]['value'][2] = num;
                                var length = parseInt(num).toString().length;
                                geoCoordMap2[j]['label'] = {};
                                geoCoordMap2[j]['label']['normal'] = {}
                                var coord = parseInt(parseFloat(num) / 100);
                                geoCoordMap2[j]['value'][1] = geoCoordMap[j]['value'][1] + 0.02 + parseFloat(40 + 5 * coord) / 500;
                                if (length == 2) {
                                    //geoCoordMap2[j]['label']['normal']['position']=[17,15];
                                } else if (length == 3) {
                                    //geoCoordMap2[j]['label']['normal']['position']=[13,14];
                                }

                            }
                        }

                    }

                    //if(json['name']=='贵阳')
                    //    json['selected']=true;
                    //mapData.push(json);
                    //console.log(mapData)
                    option.series[0].data = geoCoordMap2;
                    option.series[1].data = geoCoordMap;
                    option.series[2].data = mapData;
                    mapChart.setOption(option, true);

                }

            }
        });
    }

    mapChart.on('click', function (params) {
        getScorePercent(params.name)
    });
    setMap();
    setInterval(setMap, 60000);

    $(window).resize(function () {
        window.location.reload();
    })
    function getProviceScore(data, city) {
        for (var i in data) {
            if (data[i]['地州'] == '合计人数') {
                for (var j in score) {
                    for (var sc in data[i]) {
                        if (sc.trim().substr(1).replace('_', '-') == score[j]) {
                            toatalScore[j] = Number(data[i][sc]);
                        }
                    }
                }
            }
        }
        for (var i in toatalScore) {
            toatalScore[i] /= 10000;
        }
        scoreOption.series[0].data = toatalScore;
        getCityScore(data, city);

    }

    function getCityScore(data, city) {
        for (var r in region) {
            var tmpScore = [];
            for (var i in data) {
                if (region[r] == data[i]['地州']) {
                    for (var s in score) {
                        if (isNaN(tmpScore[s]))
                            tmpScore[s] = 0;
                        for (var sc in data[i]) {
                            if (sc.trim().substr(1).replace('_', '-') == score[s]) {
                                tmpScore[s] += Number(data[i][sc]);
                            }
                        }
                    }

                }
            }
            for (var i in tmpScore) {
                tmpScore[i] /= 10000;
            }
            cityScore[region[r]] = tmpScore;

        }

        getScorePercent(city);
    }

    function getScorePercent(city) {
        var score = cityScore[city];
        var all = 0;
        for (var i in score) {
            all += score[i];
        }
        for (var i in score) {
            scorePercent[i] = (score[i] / all * 100).toFixed(2);
        }

        setBarOptionScore(score, city);
    }

    function setBarOptionScore(score, city) {
        scoreOption.legend.data[1] = city;
        scoreOption.series[1].name = city;
        scoreOption.series[1].data = score;
        scoreOption.series[2].data = scorePercent;
        scoreChart.setOption(scoreOption, true);
    }

    function getUserNumber(data) {
        for (var i in region) {
            userNumber[i] = 0;
            for (var j in data) {
                if (region[i] == data[j]['地州']) {
                    userNumber[i] += Number(data[j]['总计'].trim());
                }
            }

        }
        getUserPercent(userNumber);
        barOption.series[1].data = userNumber;
        barOption.series[2].data = userPercent;
        barChart.setOption(barOption, true);
    }

    function getUserPercent(userNumber) {
        for (var i in userNumber) {
            userNumber[i] /= 10000;
            userPercent[i] = (userNumber[i] / total[i] * 100).toFixed(2);
        }
    }


});
