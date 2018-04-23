
var windowScreenWidth = window.screen.width;
$(function () {
    var $J_top_content_box = $('.J_top_content_box');
    var timer = null;
    var branChes = ["topCol_2", "topCol_2_1", "topCol_2_2", "topCol_2_3"];
    var branChes1 = ["topCol_3", "topCol_3_1", "topCol_3_2", "topCol_3_3"];

    var Lumps = ["bottomCol_1","bottomCol_1_1","bottomCol_1_2","bottomCol_1_3"];
    var Lumps2 = ["bottomCol_2", "bottomCol_2_1", "bottomCol_2_2", "bottomCol_2_3"];
    var Lumps3 = ["bottomCol_3", "bottomCol_3_1", "bottomCol_3_2", "bottomCol_3_3"];
    var lineNumber = ["bottomCol_last", "bottomCol_last_1", "bottomCol_last_2", "bottomCol_last_3"];
    branChesData(branChes[_.random(0,3)]);
    branChes1Data(branChes1[_.random(0,3)]);

    LumpsData(Lumps[_.random(0,3)]);
    Lumps2Data(Lumps2[_.random(0,3)]);
    Lumps3Data(Lumps3[_.random(0,3)]);
    lineNumberData(lineNumber[_.random(0,3)]);

    timer = setInterval(function () {
        branChesData(branChes[_.random(0,3)]);
        branChes1Data(branChes1[_.random(0,3)]);

        LumpsData(Lumps[_.random(0,3)]);
        Lumps2Data(Lumps2[_.random(0,3)]);
        Lumps3Data(Lumps3[_.random(0,3)]);
        lineNumberData(lineNumber[_.random(0,3)]);
    },1000);

    // 负载
function branChesData(url_) {
        // console.log(11111);
        $.ajax({
            url: 'json/'+ url_+'.json',
            success:function (msg) {
                var  $item_load = $J_top_content_box.find('.item_load');
                // var $health_trend = $J_top_content_box.find('.health_trend');
                //健康度趋势
                // $health_trend.find('.name_box').html(msg.health_trend.title);
                drawBusinessLine(msg.health_trend.draw_line.xAxis, msg.health_trend.draw_line.series_data);
                //负载
                $item_load.find('.name_box').html(msg.item_load.title);
                $item_load.find('.bar_list_box').html('');
                $.each(msg.item_load.bar_list,function (index, item) {
                    var html_ = '<div class="bar_item clear">'+
                        '<div class="fl bar_name_box">'+ item.namer +'</div>'+
                        '<div class="fl bar_box">'+
                        '<div class="bar asas gl_gradient_orange" style="width: '+ item.number +'"></div>'+
                        '</div>'+
                        '<div class="fl per_box">'+ item.number +'</div>'+
                        '</div>';
                    var html2_ = '<div class="bar_item clear">'+
                        '<div class="fl bar_name_box">'+ item.namer +'</div>'+
                        '<div class="fl bar_box">'+
                        '<div class="bar gl_gradient_blue" style="width: '+ item.number +'"></div>'+
                        '</div>'+
                        '<div class="fl per_box">'+ item.number +'</div>'+
                        '</div>';
                    if(parseInt(item.number) > 80){
                        $item_load.find('.bar_list_box').append(html_);
                    }else {
                        $item_load.find('.bar_list_box').append(html2_);
                    }

                });
            }
        })
    }
});

// 云资源池负载Top5 & 大数据主机 & 大数据资产 & 大数据资源容量 & 大数据资源池负载Top5
function branChes1Data(url_) {
    $.ajax({
        url:'json/'+url_+'.json',
        success:function (msg) {
            //云资源池负载Top5
            $.each(msg.cloud_res_top.echart_list,function (index, item) {
                drawBar(item.id, item.namer, item.data);
            });

            //大数据资源容量
            $.each(msg.big_data_res.echart_list,function (index, item) {
                drawBarBig(item.id, item.namer, item.data);
            });

            //大数据资源池负载Top5
            $.each(msg.big_data_res_top.echart_list,function (index, item) {
                drawBar(item.id, item.namer, item.data);
            });

            /**主机服务分布**/
            // $('#bar_01').prev().html(msg.big_data.col_3.namer);
            drawBarH("line2", msg.big_data.col_3.echart_data);
            /**主机状态分布**/
            drawCircle("pie1", msg.big_data.col_1.echart_data);
            var total = 0;
            var $legend_list1 = $('.legend_list1');
            $legend_list1.html('');
            $.each(msg.big_data.col_1.echart_data,function (index, item) {
                total = item.value + total;
                var classArr = ["green","blue","purple"];

                $legend_list1.append('<div class="fs14"><i class="icons_rect '+ classArr[index] +'"></i>'+ item.name +'   '+ item.value +'</div>');

            });
            $legend_list1.find('div:first-child').before('<div class="fs18 J_total">总量'+ total +'</div>');

            /**主机状态分布**/
            drawCircle("pie2", msg.big_data.col_2.echart_data);
            var total1 = 0;
            var $legend_list2 = $('.legend_list2');
            $legend_list2.html('');
            $.each(msg.big_data.col_1.echart_data,function (index, item) {
                total1 = item.value + total1;
                var classArr = ["green","blue","purple"];

                $legend_list2.append('<div class="fs14"><i class="icons_rect '+ classArr[index] +'"></i>'+ item.name +'   '+ item.value +'</div>');

            });
            $legend_list2.find('div:first-child').before('<div class="fs18 J_total">总量'+ total1 +'</div>');
            //大数据资产
            drawCircle("pie3", msg.big_data.col_2.echart_data);
            var total2 = 0;
            var $legend_list3 = $('.legend_list3');
            $legend_list3.html('');
            $.each(msg.big_data.col_1.echart_data,function (index, item) {
                total2 = item.value + total2;
                var classArr = ["green","blue","purple"];

                $legend_list3.append('<div class="fs14"><i class="icons_rect '+ classArr[index] +'"></i>'+ item.name +'   '+ item.value +'</div>');

            });
            $legend_list3.find('div:first-child').before('<div class="fs18 J_total">总量'+ total2 +'</div>');
            /*pie4*/
            drawCircle("pie4", msg.big_data.col_2.echart_data);
            var total3 = 0;
            var $legend_list4 = $('.legend_list4');
            $legend_list4.html('');
            $.each(msg.big_data.col_1.echart_data,function (index, item) {
                total3 = item.value + total3;
                var classArr = ["green","blue","purple"];

                $legend_list4.append('<div class="fs14"><i class="icons_rect '+ classArr[index] +'"></i>'+ item.name +'   '+ item.value +'</div>');

            });
            $legend_list4.find('div:first-child').before('<div class="fs18 J_total">总量'+ total3 +'</div>');
            /*pie5*/
            drawCircle("pie5", msg.big_data.col_2.echart_data);
            var total4 = 0;
            var $legend_list4 = $('.legend_list4');
            $legend_list4.html('');
            $.each(msg.big_data.col_1.echart_data,function (index, item) {
                total4 = item.value + total4;
                var classArr = ["green","blue","purple"];

                $legend_list4.append('<div class="fs14"><i class="icons_rect '+ classArr[index] +'"></i>'+ item.name +'   '+ item.value +'</div>');

            });
            $legend_list4.find('div:first-child').before('<div class="fs18 J_total">总量'+ total4 +'</div>');
        }
    })
}
//云资源池负载Top5
function drawBar(id, title, data_) {
    var myChart = echarts.init(document.getElementById(id));

    //var _boyActual = [66, 36, 21, 17, 17];
    var _boyActual = data_;
    var _bgshow = [100, 100, 100, 100, 100];
    var _college = ['资源池1', '资源池2', '资源池3', '资源池4', '资源池5'];

    var fontSize_ = 18;
    var gridLeft_ = 20;
    var gridRight_ = 20;
    var titleTop_ = -12;

    if(windowScreenWidth <= 1920){
        fontSize_ = fontSize_/2;
        gridLeft_ = gridLeft_*2;
        gridRight_ = gridRight_;
        titleTop_ = titleTop_
    }else {
        gridLeft_ = 30;
        gridRight_ = 15;
        titleTop_ = -3;
    }

    var option = {
        title: {
            text: title,
            top: titleTop_ +'%',
            left:13,
            textStyle: {
                color: '#88c3ff',
                fontSize: fontSize_,
                fontWeight: 'normal'
            }
        },
        grid: {
            left: gridLeft_+'%',
            right: gridRight_+'%',
            bottom: '1%',
            top: '12%',
            containLabel: false
        },
        xAxis: {
            type: 'value',
            show: true,
            max: 100,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: [{
            //type: 'category',
            position: "left",
            inverse: true,
            data: _college,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#3b85ff',
                interval: 0,
                fontSize:9.5
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            name: '背景',
            type: 'bar',
            barWidth: 4,
            barGap: "-100%",
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                    formatter: function (data) {
                        return _boyActual[data.dataIndex] + '%';
                    },
                    position: 'right'
                }
            },
            itemStyle: {
                normal: {
                    color: '#16315E',
                }
            },
            data: _boyActual.map(function (item, index) {
                //console.log(item);
                //return parseInt(item);
                if (item > 60) {
                    return {
                        value: 100,
                        label: {
                            normal: {
                                show: true,
                                color: '#FD8735',
                                formatter: function (data) {
                                    return _boyActual[data.dataIndex] + '%';
                                },
                                position: 'right'
                            }
                        },
                    }
                } else {
                    return {
                        value: 100,
                        label: {
                            normal: {
                                show: true,
                                color: '#0DDCFC',
                                formatter: function (data) {
                                    return _boyActual[data.dataIndex] + '%';
                                },
                                position: 'right'
                            }
                        },
                    }
                }

            })
        }, {
            name: '',
            type: 'bar',
            barWidth: 4,
            /*itemStyle: {
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(12,220,251,0)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(12,220,251,1)' // 100% 处的颜色
                  }],
                  globalCoord: false, // 缺省为 false
                }
              }
            },*/
            data: _boyActual.map(function (item, index) {
                //console.log(item);
                //return parseInt(item);
                if (item > 60) {
                    return {
                        value: item,
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'bar',
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(250,134,54,0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(250,134,54,1)' // 100% 处的颜色
                                    }],
                                    globalCoord: false, // 缺省为 false
                                }
                            }
                        }
                    }
                } else {
                    return {
                        value: item,
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'bar',
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(12,220,251,0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(12,220,251,1)' // 100% 处的颜色
                                    }],
                                    globalCoord: false, // 缺省为 false
                                }
                            }
                        }
                    }
                }

            })
        }]
    };

    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

//大数据资源容量
function drawBarBig(id, title, data_) {
    var myChart = echarts.init(document.getElementById(id));

    //var _boyActual = [350, 500, 600];
    var _boyActual = data_;
    var _bgshow = [1000, 1000, 1000];
    var _college = ['CPU(核)', '内存(GB)', '磁盘(GB)'];

    var fontSize_ = 18;
    var gridLeft_ = 16;
    var gridRight_ = 35;
    var titleTop_ = -10;

    if(windowScreenWidth <= 1920){
        fontSize_ = fontSize_/2;
        gridLeft_ = gridLeft_*2;
        gridRight_ = gridRight_;
        titleTop_ = titleTop_
    }else {
        gridLeft_ = 30;
        gridRight_ = 25;
        titleTop_ = -3;
    }

    var option = {
        title: {
            text: title,
            top: titleTop_+'%',
            textStyle: {
                color: '#88c3ff',
                fontSize: fontSize_,
                fontWeight: 'normal'
            }
        },
        grid: {
            left: gridLeft_+'%',
            right: gridRight_+'%',
            bottom: '0%',
            top: '14%',
            containLabel: false
        },
        xAxis: {
            type: 'value',
            show: true,
            max: 1000,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: [{
            //type: 'category',
            position: "left",
            inverse: true,
            data: _college,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#218fff',
                fontSize:9.5
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            name: '背景',
            type: 'bar',
            barWidth: 4,
            barGap: "-100%",
            label: {
                normal: {
                    show: true,
                    color: '#0ce0ff',
                    fontSize:9.5,
                    formatter: function (data) {
                        return _boyActual[data.dataIndex] + '/1000' ;
                    },
                    position: 'right'
                }
            },
            itemStyle: {
                normal: {
                    color: '#16315E',
                }
            },
            data: _bgshow
        }, {
            name: '',
            type: 'bar',
            barWidth: 3,
            data: _boyActual.map(function (item, index) {
                //console.log(item);
                //return parseInt(item);
                if (item > 900) {
                    return {
                        value: item,
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'bar',
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(250,134,54,0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(250,134,54,1)' // 100% 处的颜色
                                    }],
                                    globalCoord: false, // 缺省为 false
                                }
                            }
                        }
                    }
                } else {
                    return {
                        value: item,
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'bar',
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(12,220,251,0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(12,220,251,1)' // 100% 处的颜色
                                    }],
                                    globalCoord: false, // 缺省为 false
                                }
                            }
                        }
                    }
                }

            })
        }]
    };

    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

// 大数据主机
function drawCircle(id, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var option = {
        //color:['#69E4FA', '#1FA8FF', '#7449FF', '#0F47D5'],
        color:['#69E4FA', '#7449FF', '#0F47D5','#1FA8FF',],
        series: [
            {
                type:'pie',
                radius: ['40%', '50%'],
                center:['20%', '45%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                //data:[ 800, 500, 300]
                data: data_
            }
        ]
    };

    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

//机房人员进出情况 & 机柜数和机柜U位空间利用总览
function LumpsData(url_) {
    // console.log(1111);
    $.ajax({
        url: 'json/'+ url_ +'.json',
        success:function (msg) {
            var $row_1 = $('.row_1');
            drawBottomBar1("bar", msg.top_box.echart_data.xAxis, msg.top_box.echart_data.data);
            drawStackBottomBar1("bar2", msg.bottom_box.echart_data.xAxis, msg.bottom_box.echart_data.data);
        }
    });
}


//健康度趋势
function drawBusinessLine(data1, data2) {
    var myChart = echarts.init(document.getElementById('healthTrend'));
    // console.log(111);
    var fontSizeGlobal = 36,
        xAxisFontSize = 32,
        symbolSize_ = 98,
        barWidth_ = 6;


    if (windowScreenWidth <= 1920) {
        fontSizeGlobal = fontSizeGlobal / 2;
        xAxisFontSize = xAxisFontSize / 2;
        symbolSize_ = symbolSize_/2;
        barWidth_ = barWidth_/2;
    }

    var option = {
        color: ['#883C92', '#3481D6'],
        textStyle: {
            color: '#92a2e5'
        },
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        grid: {
            top:'6%',
            left: '1%',
            right: '6%',
            bottom: '18%',
            containLabel: true
        },
        xAxis: {
            z: 0,
            show: true,
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#285489',
                    width: 2
                }
            },
            axisLabel:{
                fontSize: xAxisFontSize
            },
            data: data1
            /*data:[
              {
              value: ''
            }, {
              value: '06age'
            }, {
              value: ''
            }, {
              value: '10age'
            }, {
              value: ''
            }, {
              value: '20age'
            }, {
              value: ''
            }, {
              value: '27age'
            }]*/
        },
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                max: 100,
                axisLine: {
                    lineStyle: {
                        color: '#285489',
                        width: 2
                    }
                },
            }
        ],
        series: [
            {
                type: 'line',

                symbol: 'image://img/tubiao/xingdian.png',
                //symbolSize: 43,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: barWidth_,
                        color: '#00DDFF',
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(28,224,255,.3)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(28,224,255,0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                data: data2
                /*data: [
                  {
                    value: 50,
                    symbolSize: 0
                  }
                  , {
                    value: 40,
                    symbolSize: 0
                  }
                  , {
                    value: 60,
                    symbolSize: 0
                  }
                  , {
                    value: 45,
                    symbolSize: 0
                  }
                  , {
                    value: 70,
                    //symbolSize: symbolSize_
                    symbolSize: 60
                  }
                  , {
                    value: 40,
                    symbolSize: 0
                  }, {
                    value: 48,
                    symbolSize: 0
                  }, {
                    value: 40,
                    symbolSize: 0
                  }
                ]*/
            }
        ]
    };

    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

//机房人员进出情况
function drawBottomBar1(id, xAxis_, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var fontSize_ = 24;

    if(windowScreenWidth <= 1920){
        fontSize_ = fontSize_/2;
    }

    var option = {
        color: ['#3398DB'],
        grid: {
            top:'10%',
            left: '3%',
            right: '8%',
            bottom: '12%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                //data : ['计划性进出', '异常进出', '突发事件进出'],
                data : xAxis_,
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#072E7A'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#88c3ff',
                    fontSize: fontSize_
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis : [
            {
                name: '人次/月',
                max:100,
                axisLine: {
                    show: false,
                    lineStyle:{
                        color:'#5082ff'
                    }
                },
                interval: 50,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    color: '#88c3ff',
                    fontSize: fontSize_
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color:'#072E7A'
                    }
                }
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '20%',
                //data:[100, 2, 0]
                data: data_
            }
        ],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}',
                color: '#88c3ff',
                fontSize: fontSize_
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,237,255, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(112,21,255, 1)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        }
    };


    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}
//机柜数和机柜U位空间利用总览
function drawStackBottomBar1(id, xAxis_, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var fontSize_ = 18;

    if(windowScreenWidth <= 1920){
        fontSize_ = fontSize_/2;
    }

    var option = {
        color:['#1A46EB', '#815AFF', '#0093F0', '#69E4FA'],
        legend: {
            data:['0-50','51-70','71-90','91-100'],
            itemWidth: 14,
            itemHeight: 14,
            right: '6%',
            // top: '1%',
            textStyle:{
                color:'#88c3ff'
            }
        },
        grid: {
            top:'15%',
            left: '3%',
            right: '4%',
            bottom: '25%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                //data : ['214大楼','宜兴','江阴','大浮','旺庄','国际中心','环科园','国脉'],
                data : xAxis_,
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#65DAF2',
                        width: 1,
                        type: 'dashed',
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#88c3ff',
                    fontSize: fontSize_,
                    interval: 0
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#072E7A'
                    }
                },
                interval: 100,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#88c3ff',
                    fontSize: fontSize_
                },
                splitLine: {
                    show: false,
                    lineStyle:{
                        color:'#072E7A'
                    }
                }
            }
        ],
        series : [
            {
                name:'0-50',
                type:'bar',
                stack: '总量',
                barWidth: '20%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data: [40, 40, 45, 50, 40, 40, 40, 40]
                data: data_[0]
            },
            {
                name:'51-70',
                type:'bar',
                stack: '总量',
                barWidth: '20%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[50, 50, 55, 60, 50, 50, 50, 50]
                data: data_[1]
            },
            {
                name:'71-90',
                type:'bar',
                stack: '总量',
                barWidth: '20%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[60, 60, 65, 70, 60, 60, 60, 60]
                data: data_[2]
            },
            {
                name:'91-100',
                type:'bar',
                stack: '总量',
                barWidth: '20%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[70, 70, 75, 80, 70, 70, 70, 70]
                data: data_[3]
            }
        ]
    };


    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

//主机服务分布
function drawBarH(id, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var option = {
        color: ['#3398DB'],
        grid: {
            left: '-3%',
            right: '2%',
            bottom: '8%',
            top: '0%',
            containLabel: true
        },
        xAxis : [
            {
                //type : 'category',
                data : ['1', '2', '3', '4', '5', '6', '7','8'],
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#072E7A'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis : [
            {
                max: 100,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '25%',
                //data:[36, 35, 45, 15, 30, 35, 18, 36]
                data: data_
            }
        ],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}',
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,249,252, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0,94,255, 1)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        }
    };


    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

/**
 * 能效分析 & 设备类型统计占比数
 */
function Lumps2Data(url_) {
    $.ajax({
        url: 'json/'+ url_ +'.json',
        success:function (msg) {
            var $row_1 = $('.row_1');
            // console.log(msg.top_box.echart_data.id);
            // $J_bottom_content_box.find('.col_box_2 .top_box .name_box').html(msg.top_box.title);
            // $J_bottom_content_box.find('.col_box_2 .bottom_box .name_box').html(msg.bottom_box.title);
            drawCircleBottom(msg.top_box.echart_data.id, msg.top_box.echart_data.data);
            drawCircleBottom(msg.bottom_box.echart_data.id, msg.bottom_box.echart_data.data);

            $row_1.find('.col_1_1 .left_1_1 .legend_list').html('');
            $.each(msg.top_box.echart_data.data, function (index, item) {
                var classArr = ["green", "blue", "dark_blue"];
                var html_ = '<li class="legend_item clear">'+
                    '<i class="icons_rect '+ classArr[index] +'"></i><span class="dl legend_name">'+ item.name +'</span><span class="dl">'+ item.value +'kWh</span>'+
                    '</li>';
                $row_1.find('.col_1_1 .left_1_1 .legend_list').append(html_)

            });
            $row_1.find('.col_1_1 .right_1_2 .legend_list5').html('');
            $.each(msg.bottom_box.echart_data.data, function (index, item) {
                var classArr = ["green", "blue", "dark_blue"];
                var html_ = '<li id="itesad" class="legend_item clear ">'+
                    '<i class="icons_rect blue_'+ (index+1) +'"></i><div class="dl legend_name">'+ item.value  +'% <span class="name_middle">/ CRAC  /</span> 3802</div>'+
                    '</li>';
                $row_1.find('.col_1_1 .right_1_2 .legend_list5').append(html_)

            });

        }
    });
}
function drawCircleBottom(id, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var option = {
        //color:['#69E4FA', '#1FA8FF', '#7449FF', '#0F47D5'],
        color:['#0DFFCF', '#4980FF', '#1734A9','#4A67FF',],

        series: [
            {
                type:'pie',
                right:'5%',
                radius: ['40%', '50%'],
                center: ['50%', '30%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                //data:[ 800, 500, 300]
                data: data_
            }
        ]
    };

    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

//设备维保数据统计
function Lumps3Data(url_) {
    $.ajax({
        url: 'json/'+ url_ +'.json',
        success: (msg)=> {
            var $row_1 = $('.row_1');
            drawStackBottomBarH(msg.top_box.echart_data.id, msg.top_box.echart_data.yAxis, msg.top_box.echart_data.data);

            $.each(msg.bottom_box.circle_list,function (index, item) {
                drawBottomPieArr(item.id, item.color, item.number);
                $('#'+item.id).next('.per_box').find('.fs28').html(item.number);
                $('#'+item.id).nextAll('.per_name').html(item.name);
            });
            drawStackBottom2(msg.bottom_box.draw_bar.id, msg.bottom_box.draw_bar.xAxis, msg.bottom_box.draw_bar.data);


        }
    });
}
//设备维保数据统计
function drawStackBottomBarH(id, yAxis_, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var fontSize_ = 24,
        fontSize2_ = 24.5;

    if(windowScreenWidth <= 1920){
        fontSize_ = fontSize_/2;
        fontSize2_ = fontSize2_/2;
    }

    var option = {
        color:['#1635A8', '#0F47D5', '#4967FF', '#0093F0', '#69E4FA'],
        legend: {
            data:['0-1years','1-2years','2-3years','Experied', 'Unknow'],
            //right: '6%',
            itemWidth: 14,
            itemHeight: 14,
            top: '6%',
            textStyle:{
                color:'#88c3ff',
                fontSize: fontSize2_
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis : [
            {
                type : 'category',
                //data : ['Other','Router','Storage','Server','Switch'],
                data : yAxis_,
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#65DAF2',
                        width: 1,
                        type: 'dashed',
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#88c3ff',
                    fontSize: fontSize_,
                    interval: 0
                },
                splitLine: {
                    show: false
                }
            }
        ],
        xAxis : [
            {
                type : 'value',
                axisLine: {
                    show: false,
                    lineStyle:{
                        color:'#072E7A'
                    }
                },
                interval: 50,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    color: '#88c3ff',
                    fontSize: fontSize_
                },
                splitLine: {
                    show: false,
                    lineStyle:{
                        color:'#072E7A'
                    }
                }
            }
        ],
        series : [
            {
                name:'0-1years',
                type:'bar',
                stack: '总量',
                barWidth: '40%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[40, 40, 45, 50, 40]
                data:data_[0]
            },
            {
                name:'1-2years',
                type:'bar',
                stack: '总量',
                barWidth: '40%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[50, 50, 55, 60, 50]
                data:data_[1]
            },
            {
                name:'2-3years',
                type:'bar',
                stack: '总量',
                barWidth: '40%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[60, 60, 65, 70, 60]
                data:data_[2]
            },
            {
                name:'Experied',
                type:'bar',
                stack: '总量',
                barWidth: '40%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[70, 70, 75, 80, 70]
                data:data_[3]
            },
            {
                name:'Unknow',
                type:'bar',
                stack: '总量',
                barWidth: '40%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[70, 70, 75, 80, 70]
                data:data_[4]
            }
        ]
    };


    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}
//机柜利用率
function drawStackBottom2(id, xAxis_, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var fontSize_ = 22;

    if(windowScreenWidth <= 1920){
        fontSize_ = fontSize_/2;
    }

    var option = {
        color:['#329DFF', '#0CFFCE'],
        legend: {
            data:['未启动','已启动'],
            itemWidth: 8,
            itemHeight: 8,
            right: '-4%',
            // padding:'12%',
            // top: '12%',
            textStyle:{
                color:'#88c3ff',
                fontSize:8,
            }
        },
        grid: {
            top:'23%',
            left: '3%',
            right: '4%',
            bottom: '18%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                //data : ['A','B','C','D','E','F','G'],
                data : xAxis_,
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#2A7DBA',
                        width: 2
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#88c3ff',
                    fontSize: fontSize_,
                    interval: 0
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                max: 1000,
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#2A7DBA',
                        width: 2
                    }
                },
                interval: 500,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#88c3ff',
                    fontSize: fontSize_
                },
                splitLine: {
                    show: false,
                    lineStyle:{
                        color:'#072E7A'
                    }
                }
            }
        ],
        series : [
            {
                name:'未启动',
                type:'bar',
                stack: '总量',
                barWidth: '40%',
                itemStyle:{
                    normal:{
                        border: 1,
                        borderColor: '#15275C'
                    }
                },
                //data:[200, 210, 220, 250, 400, 350, 220]
                data: data_[0]
            },
            {
                name:'已启动',
                type:'bar',
                stack: '总量',
                barWidth: '40%',
                itemStyle:{
                    normal:{
                        border: 4,
                        borderColor: '#15275C'
                    }
                },
                //data:[200, 210, 220, 250, 400, 350, 220]
                data: data_[1]
            }
        ]
    };


    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}


//三相电流谐波畸变率
function lineNumberData(url_) {
    $.ajax({
        url: 'json/'+ url_ +'.json',
        success:function (msg) {
            // console.log(msg.line1.id);
            // $J_bottom_content_box.find('.col_box_4 .bottom_box .name_box').html(msg.line1.title);
            // $J_bottom_content_box.find('.col_box_5 .bottom_box .name_box').html(msg.line2.title);

            drawElectricLine(msg.line1.id, msg.line1.data);

            drawAirLine(msg.line2.id, msg.line2.data);
        }
    });
}
//三相电流谐波畸变率
function drawElectricLine(id, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var fontSizeGlobal = 36,
        xAxisFontSize = 36,
        barWidth_ = 4,
        itemWidth = 14,
        textStyleSize = 14;


    if (windowScreenWidth <= 1920) {
        fontSizeGlobal = fontSizeGlobal / 2;
        xAxisFontSize = xAxisFontSize / 2;
        barWidth_ = barWidth_/2;
        itemWidth = itemWidth/2;
        textStyleSize = 12;
    }

    var option = {
        color: ['#00FFFF', '#00B7EE', '#0084FF'],
        legend: {
            data:[{
                name: 'A',
                icon:'rect'
            },{
                name: 'B',
                icon:'rect'
            },{
                name: 'C',
                icon:'rect'
            }],
            itemWidth: itemWidth,
            itemHeight: itemWidth,
            right: '6%',
            top: '5%',
            textStyle:{
                color:'#88c3ff',
                fontSize: textStyleSize
            }
        },
        textStyle: {
            fontSize: fontSizeGlobal,
            color: '#92a2e5'
        },
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '14%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            z: 0,
            show: true,
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#285489',
                    width: 2
                }
            },
            data: [{
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }]
        },
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                max: 3,
                interval: 1,
                axisLine: {
                    lineStyle: {
                        color: '#285489',
                        width: 2
                    }
                },
                axisLabel:{
                    formatter:'{value}%'
                }
            }
        ],
        series: [
            {
                type: 'line',
                /*label: {
                 normal: {
                 show: true,
                 position: 'top',
                 formatter: function (item) {
                 //console.log(item);
                 if (item.data.value !== 0) {
                 return item.data.value;
                 } else {
                 return '';
                 }
                 }
                 }
                 },*/
                name: 'A',
                //symbol: 'image://../img/data_center/echart_point.png',
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: barWidth_,
                        color: '#00DDFF',
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(28,224,255,.3)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(28,224,255,0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                //data: [1.25,1, 1.5,1.125,1.75, 1,1.2,1]
                data: data_[0]
            },
            {
                type: 'line',
                /*label: {
                 normal: {
                 show: true,
                 position: 'top',
                 formatter: function (item) {
                 //console.log(item);
                 if (item.data.value !== 0) {
                 return item.data.value;
                 } else {
                 return '';
                 }
                 }
                 }
                 },*/
                name: 'B',
                //symbol: 'image://../img/data_center/echart_point.png',
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: barWidth_,
                        color: '#00B7EE',
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(28,224,255,.3)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(28,224,255,0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                //data: [1.25, 2, 1.5,  0.85 ,1.75,1,1.9,1]
                data: data_[1]
            },
            {
                type: 'line',
                /*label: {
                 normal: {
                 show: true,
                 position: 'top',
                 formatter: function (item) {
                 //console.log(item);
                 if (item.data.value !== 0) {
                 return item.data.value;
                 } else {
                 return '';
                 }
                 }
                 }
                 },*/
                name: 'C',
                //symbol: 'image://../img/data_center/echart_point.png',
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: barWidth_,
                        color: '#0084FF',
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(28,224,255,.3)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(28,224,255,0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                //data: [2.25,2,2.5,2.125, 2.75,2,2.2,2]
                data: data_[2]
            }
        ]
    };

    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

//空调均值负载率
function drawAirLine(id, data_) {
    var myChart = echarts.init(document.getElementById(id));

    var fontSizeGlobal = 36,
        xAxisFontSize = 36,
        barWidth_ = 4;


    if (windowScreenWidth <= 1920) {
        fontSizeGlobal = fontSizeGlobal / 2;
        xAxisFontSize = xAxisFontSize / 2;
        barWidth_ = barWidth_/2;
    }

    var option = {
        color: ['#00FFFF', '#00B7EE', '#0084FF'],
        legend: {
            show:false,
            data:[{
                name: 'A',
                icon:'rect'
            },{
                name: 'B',
                icon:'rect'
            },{
                name: 'C',
                icon:'rect'
            }],
            itemWidth: 14,
            itemHeight: 14,
            right: '6%',
            top: '12%',
            textStyle:{
                color:'#88c3ff'
            }
        },
        textStyle: {
            fontSize: fontSizeGlobal,
            color: '#92a2e5'
        },
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '14%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            z: 0,
            show: true,
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#285489',
                    width: 2
                }
            },
            data: [{
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }, {
                value: '',
                textStyle: {
                    fontSize: xAxisFontSize,
                }
            }]
        },
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                min: 50,
                max: 65,
                interval: 5,
                axisLine: {
                    lineStyle: {
                        color: '#285489',
                        width: 2
                    }
                },
                axisLabel:{
                    formatter:'{value}%'
                }
            }
        ],
        series: [
            {
                type: 'line',
                /*label: {
                 normal: {
                 show: true,
                 position: 'top',
                 formatter: function (item) {
                 //console.log(item);
                 if (item.data.value !== 0) {
                 return item.data.value;
                 } else {
                 return '';
                 }
                 }
                 }
                 },*/
                name: 'A',
                //symbol: 'image://../img/data_center/echart_point.png',
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: barWidth_,
                        color: '#00DDFF',
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(28,224,255,.3)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(28,224,255,0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                //data: [60,55,60,55,60,56,58,53]
                data: data_
            }
        ]
    };

    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

// 资源状态
function drawBottomPieArr(id, color, value) {
    var myChart = echarts.init(document.getElementById(id));

    var option = {
        series: [{
            type: 'pie',
            radius: ['65%', '80%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: value,
                name: '占有率',
                label: {
                    normal: {
                        show:false,
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 10
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: color
                    }
                },
                hoverAnimation: false
            }, {
                value:100-value,
                name: '占位',
                label: {
                    normal: {
                        show:false,
                        formatter: '\n完成率',
                        textStyle: {
                            color: '#555',
                            fontSize: 10
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(53,75,134,0.6)'
                    }
                },
                hoverAnimation: false
            }]
        }]
    };

    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}