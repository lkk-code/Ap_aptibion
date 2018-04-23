$(()=>{
   var insert = new Inserts();
    setTimeout(()=>{
       // insert.Echart1('line1');
       // insert.Echart5('line2');
       // insert.Echart2('pie1','主机状态分布');
       // insert.Echart2('pie2','主机用途分布');
       // insert.Echart3('pie3','存储空间使用量分布(GB)');
       // insert.Echart4('pie4','大数据表数量分布(张)');
       // insert.Echart4('pie5','大数据条数量分布(条)');
       // insert.Echart6('bar');
       // insert.Echart7('pie6');
       insert.Echart8('bar1');
       // insert.Echart9('bar2');
       // insert.Echart10('chart_6','CPU使用率');
       // insert.Echart10('chart_7','内存使用率');
       // insert.Echart10('chart_8','磁盘IO');
       // insert.Echart10('chart_9','网络IO');
       // insert.Echart10('chart_10','CPU分配率');
       // insert.Echart10('chart_11','内存分配率');
       // insert.Echart10('chart_12','磁盘分配率');
       // insert.Echart11('bar3');
       // insert.Echart12('pie7','40','#34b7fa');
       // insert.Echart12('pie8','40','#2df5a6');
       // insert.Echart12('pie9','40','#ffd939');
       // insert.Echart13('bar4');
       // insert.Echart14('line3');
       // insert.Echart15('line4');
       // insert.Echart16('bar13');
       insert.Echart17('bar14');
       // insert.Echart18('bar15');
   },500);
});
var Inserts = function () {};
Inserts.prototype={
    constructor:Inserts,
    init:function () {
    },
    // Echart1:(id)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     console.log(myChart);
    //     var  option = {
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //                 type: 'shadow',
    //                 textStyle: {
    //                     color: '#fff'
    //                 }
    //             },
    //         },
    //         grid: {
    //             borderWidth: 1,
    //             left:'5%',
    //             top: '10%',
    //             bottom: '35%',
    //             right:'5%',
    //
    //         },
    //         xAxis: [
    //             {
    //                 z: 0,
    //                 show: true,
    //                 type: "category",
    //                 boundaryGap: false,
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: '#2C5185',
    //                         width:2
    //                     }
    //                 },
    //                 splitLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 splitArea: {
    //                     show: false
    //                 },
    //                 axisLabel: {
    //                     color:'#2C5185',
    //                     interval: 0,
    //                     textStyle: {
    //                         fontSize: 12,
    //                         color: '#83A2D6'
    //
    //                     }
    //                 },
    //                 boundaryGap: false,
    //                 data: ['','06age','','10age','','20age','','27age']
    //             }
    //         ],
    //         yAxis: [
    //             {
    //                 type: 'value',
    //                 splitLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 max: 100,
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: '#2C5185',
    //                         width: 2
    //                     }
    //                 },
    //             }
    //         ],
    //         series: [
    //             {
    //                 // name:'搜索引擎',
    //                 type:'line',
    //                 // stack: '总量',
    //                 smooth: true,
    //                 symbolSize:false,
    //                 symbol:'',
    //                 itemStyle: {
    //                     normal: {
    //                         color: "#02E2FE",
    //                         width:10
    //
    //                     }
    //                 },
    //                 areaStyle: {
    //                     normal: {
    //                         color: {
    //                             type: 'linear',
    //                             x: 0,
    //                             y: 0,
    //                             x2: 0,
    //                             y2: 1,
    //                             colorStops: [{
    //                                 offset: 0, color: 'rgba(28,224,255,.3)' // 0% 处的颜色
    //                             }, {
    //                                 offset: 1, color: 'rgba(28,224,255,0)' // 100% 处的颜色
    //                             }],
    //                             globalCoord: false // 缺省为 false
    //                         }
    //                     }
    //                 },
    //                 data:[50, 40, 60, 45,{value:70,symbol:'image://img/tubiao/liangdian_1.png',symbolSize:70}, 40, 48, 40]
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart2:(id,text)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     console.log(myChart);
    //     var option ={
    //
    //         title: {
    //             text: text,
    //             textStyle:{
    //                 color:'#8BC1FF',
    //                 fontSize: 10,
    //                 fontWeight: 'normal'
    //             },
    //             top:'-6%',
    //             left:'-2%',
    //             // subtext: '总量1600',
    //             // subtextStyle:{
    //             //     align:'left',
    //             //     color:'#8BC1FF',
    //             //     fontSize: 10,
    //             //     fontWeight: 'normal',
    //             //
    //             // },
    //
    //         },
    //
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)"
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             x: 'left',
    //             y: "10%",
    //             left:'45%',
    //             top:'25%',
    //             itemWidth: 5,
    //             itemHeight: 5,
    //             textStyle: {
    //                 color:'#6981AF',
    //                 fontSize:8,
    //                 padding:-3,
    //             },
    //             data:['良好 800','故障 500','未知 300']
    //         },
    //         // toolbox:{
    //         //     saveAsImage:{backgroundColor:'#6981AF'}
    //         // },
    //         // yAxis:[{
    //         //     type:'value',
    //         //    axisLabel:{
    //         //        backgroundColor:{
    //         //            image:'img/tubiao/tuyuan_22.png'
    //         //        }
    //         //    }
    //         // }],
    //         series: [
    //             {
    //                 name:'访问来源',
    //                 type:'pie',
    //                 right:'5%',
    //                 radius: ['41%', '50%'],
    //                 center: ['20%', '45%'],
    //                 avoidLabelOverlap: false,
    //                 label: {
    //                     normal: {
    //                         show: false,
    //                         position: 'center'
    //                     },
    //                     emphasis: {
    //                         show: true,
    //                         textStyle: {
    //                             fontSize: '3',
    //                             fontWeight: 'bold'
    //                         }
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //
    //                 data:[
    //                     {value:800, name:'良好 800'},
    //                     {value:500, name:'故障 500'},
    //                     {value:300, name:'未知 300'}
    //                 ],
    //                 color:['#6AE4F6','#7449ff','#0f47d5']
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart3:(id,text)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     console.log(myChart);
    //     var option ={
    //
    //         title: {
    //             text: text,
    //             textStyle:{
    //                 color:'#8BC1FF',
    //                 fontSize: 10,
    //                 fontWeight: 'normal'
    //             },
    //             top:'-6%',
    //             left:'-2%',
    //             // subtext: '总量1600',
    //             // subtextStyle:{
    //             //     align:'left',
    //             //     color:'#8BC1FF',
    //             //     fontSize: 10,
    //             //     fontWeight: 'normal',
    //             //
    //             // },
    //
    //         },
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)"
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             x: 'left',
    //             y: "10%",
    //             left:'45%',
    //             top:'35%',
    //             itemWidth: 5,
    //             itemHeight: 5,
    //             textStyle: {
    //                 color:'#6981AF',
    //                 fontSize:8,
    //                 padding:-3,
    //             },
    //             data:['HDFS 800','其他 300']
    //         },
    //         series: [
    //             {
    //                 name:'访问来源',
    //                 type:'pie',
    //                 right:'5%',
    //                 radius: ['41%', '50%'],
    //                 center: ['20%', '45%'],
    //                 avoidLabelOverlap: false,
    //                 label: {
    //                     normal: {
    //                         show: false,
    //                         position: 'center'
    //                     },
    //                     emphasis: {
    //                         show: true,
    //                         textStyle: {
    //                             fontSize: '3',
    //                             fontWeight: 'bold'
    //                         }
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data:[
    //                     {value:800, name:'HDFS 800'},
    //                     {value:300, name:'其他 300'}
    //                 ],
    //                 color:['#6AE4F6','#0f47d5']
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart4:(id,text)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     console.log(myChart);
    //     var option ={
    //
    //         title: {
    //             text: text,
    //             textStyle:{
    //                 color:'#8BC1FF',
    //                 fontSize: 10,
    //                 fontWeight: 'normal'
    //             },
    //             top:'-6%',
    //             left:'-2%',
    //             // subtext: '总量1600',
    //             // subtextStyle:{
    //             //     align:'left',
    //             //     color:'#8BC1FF',
    //             //     fontSize: 10,
    //             //     fontWeight: 'normal',
    //             //
    //             // },
    //
    //         },
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)"
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             x: 'left',
    //             y: "10%",
    //             left:'45%',
    //             top:'23%',
    //             itemWidth: 5,
    //             itemHeight: 5,
    //             textStyle: {
    //                 color:'#6981AF',
    //                 fontSize:8,
    //                 padding:-4,
    //             },
    //             data:['Hbase 800','SparkSQL 500','Elk 300','其他 300']
    //         },
    //         series: [
    //             {
    //                 name:'访问来源',
    //                 type:'pie',
    //                 right:'5%',
    //                 radius: ['41%', '50%'],
    //                 center: ['20%', '45%'],
    //                 avoidLabelOverlap: false,
    //                 label: {
    //                     normal: {
    //                         show: false,
    //                         position: 'center'
    //                     },
    //                     emphasis: {
    //                         show: true,
    //                         textStyle: {
    //                             fontSize: '3',
    //                             fontWeight: 'bold'
    //                         }
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data:[
    //                     {value:800, name:'Hbase 800'},
    //                     {value:800, name:'SparkSQL 500'},
    //                     {value:800, name:'Elk 300'},
    //                     {value:300, name:'其他 300'}
    //                 ],
    //                 color:['#6AE4F6','#17A8FB','#7545FB','#0f47d5']
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart5:(id)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     console.log(myChart);
    //     var option = {
    //         color: [ '#0078FF', '#44D5DF'],
    //         title: {
    //             text: '主机服务分布',
    //             textStyle: {
    //                 color: '#88c3ff',
    //                 fontSize: 10,
    //                 fontWeight: 'bold'
    //             },
    //             top: '-3%',
    //             // left: '1%'
    //         },
    //         tooltip: {
    //             show: true,
    //             trigger: 'axis',
    //             axisPointer: {
    //                 type: 'shadow'
    //             }
    //         },
    //         legend: {
    //             show: false,
    //             itemWidth: 15,
    //             itemHeight: 8,
    //             data: [{
    //                 name: 'Un-subscribers',
    //                 icon: 'rect'
    //             }, {
    //                 name: 'Subscribers',
    //                 icon: 'rect'
    //             }],
    //             top: '15%',
    //             right: '4%',
    //             textStyle: {
    //                 fontSize: 12,
    //                 color: '#8191b8'
    //             }
    //         },
    //         grid: {
    //             borderWidth: 1,
    //             // top: '10%',
    //             // left: '3%',
    //             // right: '25%',
    //             // bottom: '5%',
    //             // containLabel: true
    //         },
    //         xAxis: [{
    //
    //             type: 'category',
    //             boundaryGap: true,
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 show:false,
    //                 textStyle: {
    //                     fontSize: 14,
    //                     color: '#72788a'
    //                 }
    //             },
    //             axisLine: {
    //                 show: true,
    //                 lineStyle: {
    //                     color: '#69AFFF'
    //                 }
    //             },
    //             data: [
    //                 'JAN',
    //                 'FEB',
    //                 'MAR',
    //                 'APR',
    //                 'MAY',
    //                 'MAR1',
    //                 'APR1',
    //                 'MAY1',
    //
    //             ]
    //         }],
    //         yAxis: [{
    //             show:false,
    //             type: 'value',
    //
    //             max: 40,
    //             nameTextStyle: {
    //                 color: '#72788a',
    //                 fontSize: 16
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 show: true,
    //                 lineStyle: {
    //                     color: '#57617B'
    //                 }
    //             },
    //             axisLabel: {
    //                 formatter: '{value}',
    //                 margin: 10,
    //                 textStyle: {
    //                     fontSize: 14,
    //                     color: '#72788a'
    //                 }
    //             },
    //             splitLine: {
    //                 show: false,
    //                 lineStyle: {
    //                     color: '#F2F2F2',
    //                     type: 'dotted'
    //                 }
    //             }
    //         }],
    //         series: [ {
    //             name: 'Un-subscribers',
    //             type: 'bar',
    //             barWidth: '20%',
    //             stack: 'value',
    //             label : {
    //                 normal:{
    //                     show:true,
    //                     position: 'outside',
    //                     formatter: '{c}',
    //                     textStyle : {
    //                         color:'#88c3ff',
    //                         fontSize:10,
    //                         fontFamily: 'akkR',
    //                         fontWeight: 'normal'
    //                     },
    //
    //                 }
    //
    //             },
    //             itemStyle: {
    //                 normal: {
    //
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 0, 1,
    //                         [
    //                             {offset: 0, color: '#00edff'},
    //                             {offset: 0.8, color: '#4a3bff'},
    //                             {offset: 1, color: '#6e16ff'}
    //                         ]
    //                     )
    //                 },
    //
    //                 emphasis: {
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 0, 1,
    //                         [
    //                             {offset: 0, color: '#6e16ff'},
    //                             {offset: 0.7, color: '#4a3bff'},
    //                             {offset: 1, color: '#00edff'}
    //                         ]
    //                     )
    //                 }
    //             },
    //             data: [
    //                 36,
    //                 35,
    //                 45,
    //                 15,
    //                 30,
    //                 35,
    //                 18,
    //                 38
    //             ]
    //         }]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     })
    // },
    // Echart6:(id)=>{
    //     var dataAxis = ['计划性进出', '异常进出', '突发事件进出'];
    //     var data = [100, 2, 0];
    //     var yMax = 100;
    //     var dataShadow = [];
    //     for (var i = 0; i < data.length; i++) {
    //         dataShadow.push(yMax);
    //     }
    //     var myChart = echarts.init(document.getElementById(id));
    //     var option = {
    //         title: {
    //             text: '人次/月',
    //             textStyle: {
    //                 color: '#88c3ff',
    //                 fontSize: 10,
    //                 fontWeight: 'bold'
    //             },
    //         },
    //         top: '-3%',
    //         xAxis: {
    //             data: dataAxis,
    //             axisLabel: {
    //                 inside: true,
    //                 textStyle: {
    //                     color: '#fff'
    //                 }
    //             },
    //             splitLine: {
    //                 show: false
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             splitArea: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 show:true,
    //                 textStyle: {
    //                     fontSize: 14,
    //                     color: '#88c3ff'
    //                 }
    //             },
    //             axisLine: {
    //                 show: true,
    //                 lineStyle: {
    //                     color:'#1080ff'
    //                 }
    //
    //             },
    //
    //         },
    //         yAxis: [{
    //             type: 'value',
    //             min:0,
    //             max:100,
    //             interval:50,
    //
    //             axisLine: {
    //                 show: false
    //             },
    //             splitLine: {
    //                 show: true,
    //                 lineStyle:{
    //                     color:'#1080ff'
    //                 }
    //
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 color:'#1080ff',
    //                 interval: 0,
    //                 textStyle: {
    //                     fontSize: 12,
    //                     color: '#83A2D6'
    //                 }
    //             }
    //         }],
    //         splitLine: {
    //             show: false,
    //             lineStyle: {
    //                 color: '#1080ff',
    //                 type: 'dotted'
    //             }
    //         },
    //         dataZoom: [
    //             {
    //                 type: 'inside'
    //             }
    //
    //         ],
    //         series: [
    //             { // For shadow
    //                 type: 'bar',
    //                 itemStyle: {
    //                     normal: {color: 'rgba(0,0,0,0.05)'}
    //                 },
    //                 areaStyle: {
    //                     normal: {
    //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             offset: 0,
    //                             color: 'rgba(13, 113, 147, 1)'
    //                         }, {
    //                             offset: 0.9,
    //                             color: 'rgba(13, 113, 147, 0)'
    //                         }], false),
    //                         shadowColor: 'rgba(0, 0, 0, 0.1)',
    //                         shadowBlur: 20
    //                     }
    //                 },
    //                 // barGap:'-1%',
    //                 barCategoryGap:'60%',
    //                 data: dataShadow,
    //                 animation: false
    //             },
    //             {
    //                 type: 'bar',
    //                 label: {
    //                     normal: {
    //                         show: true,
    //                         position: 'top',
    //                         color:'#1080ff'
    //                     }
    //                 },
    //                 itemStyle: {
    //                     normal: {
    //
    //                         color: new echarts.graphic.LinearGradient(
    //                             0, 0, 0, 1,
    //                             [
    //                                 {offset: 0, color: '#00edff'},
    //                                 {offset: 0.8, color: '#4a3bff'},
    //                                 {offset: 1, color: '#6e16ff'}
    //                             ]
    //                         )
    //                     },
    //
    //                     emphasis: {
    //                         color: new echarts.graphic.LinearGradient(
    //                             0, 0, 0, 1,
    //                             [
    //                                 {offset: 0, color: '#6e16ff'},
    //                                 {offset: 0.7, color: '#4a3bff'},
    //                                 {offset: 1, color: '#00edff'}
    //                             ]
    //                         )
    //                     }
    //                 },
    //
    //                 data: data
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     })
    // },
    Echart7:(id)=>{
        var myChart = echarts.init(document.getElementById(id));
        console.log(myChart);
        var option ={

            title: {
                text: '',
                textStyle:{
                    color:'#8BC1FF',
                    fontSize: 10,
                    fontWeight: 'normal'
                },
                // top:'66%',
                // left:'25%',
                // subtext: '总量1600',
                // subtextStyle:{
                //     align:'left',
                //     color:'#8BC1FF',
                //     fontSize: 10,
                //     fontWeight: 'normal',
                //
                // },

            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'bottom',
                y: "10%",
                left:'30%',
                top:'60%',
                // bottom:'10%',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color:'#88c3ff',
                    fontSize:12,
                    // padding:-4,
                },
                data:['IT设备          20900kWh','制冷             48616kWh','其他             15276kWh']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    right:'5%',
                    radius: ['41%', '50%'],
                    center: ['50%', '30%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '13',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:800, name:'IT设备          20900kWh'},
                        {value:800, name:'制冷             48616kWh'},
                        {value:300, name:'其他             15276kWh'}
                    ],
                    color:['#0cffce','#4981ff','#1635a8']
                }
            ]
        };
        myChart.setOption(option);
        $(window).resize(function () {
            myChart.resize();
        });
    },
    Echart8:(id)=>{
        var myChart = echarts.init(document.getElementById(id));
        var option={
            color: [ '#1635a8', '#0f47d5','#4967ff','#0093f0','#69e4fa'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color:'#88c3ff',
                    fontSize:12,
                    // padding:-4,
                },
                data: ['0-1years', '1-2years','2-3years','Experied','Unknow']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis:  {
                show:false,
                type: 'value'

            },
            yAxis: {
                axisLine: {
                    show: true,
                    lineStyle: {
                        color:'#1080ff',
                        type:'line',
                        borderWidth:1

                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                type: 'category',
                data: ['Other','Router','Storage','Server','Switch']
            },
            series: [
                {
                    name: '0-1years',
                    type: 'bar',
                    stack: '总量',
                    right:'50%',
                    barCategoryGap:'60%',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight',

                        }
                    },
                    data: [320, 302, 301, 334, 390],

                },
                {
                    name: '1-2years',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 134, 90]
                },
                {
                    name: '2-3years',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: 'Experied',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight',

                        }
                    },
                    data: [150, 212, 201, 154, 190]
                },
                {
                    name: 'Unknow',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [820, 832, 901, 934, 1290],

                }
            ]
        };
        myChart.setOption(option);
        $(window).resize(function () {
            myChart.resize();
        });
    },
    // Echart9:(id)=>{
    //   var myChart = echarts .init(document.getElementById(id));
    //   var option = {
    //       color: [ '#1a46eb', '#815aff','#0093f0','#69e4fa'],
    //       tooltip : {
    //           trigger: 'axis',
    //           axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //               type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //           }
    //       },
    //       legend: {
    //
    //           x: 'top',
    //             left:'30%',
    //           // bottom:'10%',
    //           itemWidth: 10,
    //           itemHeight: 10,
    //           textStyle: {
    //               color:'#88c3ff',
    //               fontSize:12,
    //               // padding:-4,
    //           },
    //           data:['0-50','51-70','71-90','91-100']
    //       },
    //       grid: {
    //           left: '3%',
    //           top:'20%',
    //           right: '4%',
    //           bottom: '20%',
    //           containLabel: true
    //       },
    //       xAxis : [
    //
    //           {
    //               axisLine: {
    //                   lineStyle: {
    //                        color:'#83A2D6',
    //                       type:'line',
    //                       borderWidth:2
    //                   }
    //               },
    //               splitLine: {
    //                   show: false
    //               },
    //               axisTick: {
    //                   show: false
    //               },
    //               splitArea: {
    //                   show: false
    //               },
    //               axisLabel: {
    //                   color:'#2C5185',
    //                   interval: 0,
    //                   textStyle: {
    //                       fontSize: 10,
    //                       color: '#83A2D6'
    //                   }
    //               },
    //               type : 'category',
    //               data : ['214大楼','宜兴','江阴','大浮','旺庄','国际中心','环科园',''],
    //
    //           }
    //       ],
    //       yAxis : [
    //           {
    //
    //               type : 'value',
    //               axisLine: {
    //                   show: false,
    //                   lineStyle: {
    //                       color:'#83A2D6',
    //
    //                       borderWidth:2
    //
    //                   }
    //               },
    //               splitLine: {
    //                   show: false
    //               },
    //               axisTick: {
    //                   show: false
    //               },
    //               splitArea: {
    //                   show: false
    //               },
    //           }
    //
    //       ],
    //       series : [
    //
    //           {
    //               radius: ['41%', '50%'],
    //               center: ['50%', '30%'],
    //               avoidLabelOverlap: false,
    //               name:'0-50',
    //               type:'bar',
    //               barWidth : 15,
    //               stack: '搜索引擎',
    //               data:[20, 32,11,34, 90, 30, 20]
    //           },
    //           {
    //               radius: ['41%', '50%'],
    //               center: ['50%', '30%'],
    //               avoidLabelOverlap: false,
    //               name:'51-70',
    //               type:'bar',
    //               stack: '搜索引擎',
    //               data:[20, 32, 10, 34, 90, 30, 20]
    //           },
    //           {
    //               radius: ['41%', '50%'],
    //               center: ['50%', '30%'],
    //               avoidLabelOverlap: false,
    //               name:'71-90',
    //               type:'bar',
    //               stack: '搜索引擎',
    //               data:[60, 72, 71, 74, 90, 30, 10]
    //           },
    //           {
    //               radius: ['41%', '50%'],
    //               center: ['50%', '30%'],
    //               avoidLabelOverlap: false,
    //               name:'91-100',
    //               type:'bar',
    //               stack: '搜索引擎',
    //               data:[62, 82, 91, 84, 19, 10, 10]
    //
    //           }
    //       ]
    //   };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart10:(id,text)=>{
    //     var myChart = echarts .init(document.getElementById(id));
    //
    //     var appusage_data = [{
    //         name: "",
    //         value: 17
    //     }, {
    //         name: "",
    //         value: 17
    //     }, {
    //         name: "",
    //         value: 21
    //     }, {
    //         name: "",
    //         value: 36
    //     }, {
    //         name: "",
    //         value: 66
    //     }];
    //     var full_data = [ {
    //         name: "app11",
    //         value: 100
    //     }, {
    //         name: "app8",
    //         value: 100
    //     }, {
    //         name: "app3",
    //         value: 100
    //     }, {
    //         name: "app16",
    //         value: 100
    //     }, {
    //         name: "app16",
    //         value: 100
    //     }];
    //     var data1 = [];
    //     var full_data = [ {
    //         name: "app11",
    //         value: 100
    //     }, {
    //         name: "app8",
    //         value: 100
    //     }, {
    //         name: "app3",
    //         value: 100
    //     }, {
    //         name: "app16",
    //         value: 100
    //     }, {
    //         name: "app16",
    //         value: 100
    //     }];
    //     var data1 = [];
    //
    //     var  option = {
    //
    //         color: ['#0cd9f9', '#233f74'],
    //         title: {
    //             text: text,
    //             textStyle: {
    //                 color: "#88c3ff",
    //                 fontWeight: "bold",
    //                 fontSize: 10
    //             },
    //             top: "-10%",
    //             left: "2.2%"
    //         },
    //         tooltip: {
    //             show: false,
    //             trigger: "axis",
    //             axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //                 type: "shadow" // 默认为直线，可选为：line | shadow
    //             }
    //         },
    //         grid: {
    //             left: "30%",
    //             top: "17%",
    //             right: "20%",
    //             bottom: "13%",
    //             // containLabel: true
    //         },
    //         yAxis: [{
    //             type: "category",
    //             data: ["资源池5", "资源池4", "资源池3", "资源池2", "资源池1"],
    //             axisLine: {
    //                 show: false
    //             },
    //             axisTick: {
    //                 show: false,
    //                 alignWithLabel: true
    //             },
    //             axisLabel: {
    //                 textStyle: {
    //                     fontSize: 8,
    //                     color: "#087cff"
    //                 }
    //             }
    //         }],
    //         xAxis: [{
    //             type: "value",
    //             axisLine: {
    //                 show: false
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 show: false
    //             },
    //             splitLine: {
    //                 show: false
    //             }
    //         }],
    //
    //         series: [{
    //             type: "bar",
    //
    //             barWidth: 2,
    //             barGap: '100%',
    //             data: appusage_data,
    //             barCategoryGap: "30%",
    //             z: 2,
    //             itemStyle:{
    //                 normal:{
    //                     barBorderRadius: 1
    //                 }
    //             },
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: "right",
    //                     formatter: function(params) {
    //                         console.log(params.data.value);
    //                         data1.push(params.data.value);
    //                         return params.data.name;
    //                     },
    //                     textStyle: {
    //                         color: "#16325f"
    //                     }
    //                 }
    //             }
    //         },{
    //             type: "bar",
    //             barWidth: 2,
    //             barGap: '-100%',
    //             data: full_data,
    //             barCategoryGap: "30%",
    //             z: 1,
    //             itemStyle:{
    //                 normal:{
    //                     barBorderRadius: 1
    //                 },
    //                 emphasis:{
    //                     color:'#16325f'
    //                 }
    //             },
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: "right",
    //                     formatter: function(params) {
    //                         return data1[params.dataIndex]+'%';
    //                     },
    //                     textStyle: {
    //                         fontSize: 8,
    //                         color: "#0cd3f2"
    //                     }
    //                 }
    //             }
    //         }]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart11:(id)=>{
    //   var myChart = echarts.init(document.getElementById(id));
    //     var option ={
    //
    //         title: {
    //             text: '',
    //             textStyle:{
    //                 color:'#8BC1FF',
    //                 fontSize: 10,
    //                 fontWeight: 'normal'
    //             },
    //             // top:'66%',
    //             // left:'25%',
    //             // subtext: '总量1600',
    //             // subtextStyle:{
    //             //     align:'left',
    //             //     color:'#8BC1FF',
    //             //     fontSize: 10,
    //             //     fontWeight: 'normal',
    //             //
    //             // },
    //
    //         },
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)"
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             x: 'bottom',
    //             y: "10%",
    //             left:'45%',
    //             // top:'60%',
    //             // bottom:'10%',
    //             itemWidth: 10,
    //             itemHeight: 10,
    //             textStyle: {
    //                 color:'#88c3ff',
    //                 fontSize:12,
    //                 // padding:-4,
    //             },
    //             data:['20% / CRAC  / 3802','22% / CRAC  / 3802','40% / CRAC  / 3802','21% / CRAC  / 3802']
    //         },
    //         series: [
    //             {
    //                 name:'访问来源',
    //                 type:'pie',
    //                 right:'5%',
    //                 radius: ['60%', '70%'],
    //                 center: ['25%', '40%'],
    //                 avoidLabelOverlap: false,
    //                 label: {
    //                     normal: {
    //                         show: false,
    //                         position: 'center'
    //                     },
    //                     emphasis: {
    //                         show: true,
    //                         textStyle: {
    //                             fontSize: '13',
    //                             fontWeight: 'bold'
    //                         }
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data:[
    //                     {value:15, name:'20% / CRAC  / 3802'},
    //                     {value:20, name:'22% / CRAC  / 3802'},
    //                     {value:30, name:'40% / CRAC  / 3802'},
    //                     {value:30, name:'21% / CRAC  / 3802'}
    //                 ],
    //                 color:['#0cffce','#0093f0','#4967ff','#1635a8']
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart12:(id, data, color_)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     // console.log(121111111111111111);
    //     var option = {
    //
    //         series: [{
    //             type: 'pie',
    //             radius: ['60%', '85%'],
    //             center:['55%','55%'],
    //             data: [{
    //                 value: data,
    //                 //name: '占有率',
    //                 label: {
    //                     normal: {
    //                         formatter: '',
    //                         verticalAlign: 'middle',
    //                         position: 'center',
    //                         align: 'center',
    //                         textStyle: {
    //                             fontSize: 44,
    //                             color: '#484A52'
    //                         }
    //                     }
    //                 },
    //                 itemStyle: {
    //                     normal: {
    //                         color: color_
    //                     },
    //                     emphasis: {
    //                         color: color_
    //                     }
    //                 },
    //                 hoverAnimation: false
    //             }, {
    //                 value: 100 - data,
    //                 //name: '占位',
    //                 label: {
    //                     /*normal: {
    //                      formatter: '\n完成率',
    //                      textStyle: {
    //                      color: '#555',
    //                      fontSize: 20
    //                      }
    //                      }*/
    //                 },
    //                 tooltip: {
    //                     show: false
    //                 },
    //                 itemStyle: {
    //                     normal: {
    //                         color: 'rgba(0,0,0,0)'
    //                     },
    //                     emphasis: {
    //                         color: 'rgba(0,0,0,0)'
    //                     }
    //                 },
    //                 hoverAnimation: false
    //             }]
    //         }]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart13:(id)=>{
    //   var myChart = echarts.init(document.getElementById(id));
    //
    //     var option = {
    //         color: [ '#0078FF', '#0cffce'],
    //         tooltip : {
    //             trigger: 'axis',
    //             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //                 type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //             }
    //         },
    //         legend: {
    //
    //             x: 'top',
    //             left:'30%',
    //             // bottom:'10%',
    //             itemWidth: 5,
    //             itemHeight: 5,
    //             textStyle: {
    //                 color:'#88c3ff',
    //                 fontSize:9,
    //                 // padding:-4,
    //             },
    //             data:['71-90','91-100']
    //         },
    //         grid: {
    //             left: '3%',
    //             top:'20%',
    //             right: '4%',
    //             bottom: '20%',
    //             containLabel: true
    //         },
    //         xAxis : [
    //
    //             {
    //                 axisLine: {
    //                     lineStyle: {
    //                         color:'#83A2D6',
    //                         // type:'line',
    //                         borderWidth:1
    //                     }
    //                 },
    //                 splitLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 splitArea: {
    //                     show: false
    //                 },
    //                 axisLabel: {
    //                     color:'#2C5185',
    //                     interval: 0,
    //                     textStyle: {
    //                         fontSize: 9,
    //                         color: '#83A2D6'
    //                     }
    //                 },
    //                 type : 'category',
    //                 data : ['A','B','C','D','E','F','G'],
    //
    //             }
    //         ],
    //         yAxis : [
    //             {
    //                 type : 'value',
    //                 axisLine: {
    //                     show: true,
    //                     lineStyle: {
    //                         color:'#83A2D6',
    //                         borderWidth:2
    //
    //                     }
    //                 },
    //                 splitLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 splitArea: {
    //                     show: false
    //                 },
    //             }
    //
    //         ],
    //         series : [
    //
    //
    //             {
    //
    //                 name:'71-90',
    //                 type:'bar',
    //                 barWidth: '30%',
    //                 stack: 'value',
    //                 // label : {
    //                 //     normal:{
    //                 //         show:true,
    //                 //         position: 'insideTop',
    //                 //         formatter: '{c}',
    //                 //         textStyle : {
    //                 //             color:'#087cff',
    //                 //             fontSize:16,
    //                 //             fontFamily: 'akkR',
    //                 //             fontWeight: 'normal'
    //                 //         }
    //                 //     }
    //                 // },
    //                 data:[360, 272, 371, 704, 210, 630, 401]
    //             },
    //             {
    //                 // radius: ['20%', '10%'],
    //                 // center: ['10%', '10%'],
    //
    //                 name:'91-100',
    //                 type:'bar',
    //                 barWidth: '30%',
    //                 stack: 'value',
    //                 // label : {
    //                 //     normal:{
    //                 //         show:true,
    //                 //         position: 'outside',
    //                 //         formatter: '{c}',
    //                 //         textStyle : {
    //                 //             color:'#72788a',
    //                 //             fontSize:16,
    //                 //             fontFamily: 'akkR',
    //                 //             fontWeight: 'normal'
    //                 //         }
    //                 //     }
    //                 // },
    //                 data:[162, 582, 421, 184, 419, 310, 610]
    //
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     });
    // },
    // Echart14:(id)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     var  option = {
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //                 type: 'shadow',
    //                 textStyle: {
    //                     color: '#fff'
    //                 }
    //             },
    //         },
    //         grid: {
    //             borderWidth: 10,
    //             left:'13%',
    //             top: '18%',
    //             bottom: '8%',
    //             right:'5%',
    //
    //         },
    //         legend: {
    //             right: '5%',
    //             top: '8%',
    //             textStyle: {
    //                 color:'#88c3ff',
    //                 fontSize:12,
    //                 // padding:-4,
    //             },
    //             data: ['A','B','C']
    //         },
    //         xAxis: [
    //             {
    //
    //                 type: "category",
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: '#1080ff',
    //
    //                     }
    //                 },
    //                 splitLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 splitArea: {
    //                     show: false
    //                 },
    //                 axisLabel: {
    //                     show:false,
    //                     color:'#767c8d',
    //                     interval: 0,
    //                     textStyle: {
    //                         fontSize: 8,
    //                         color: '#72788a'
    //                     }
    //                 },
    //                 boundaryGap: false,
    //                 data: ['02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00']
    //             }
    //         ],
    //         yAxis: [{
    //             type: 'value',
    //             min:0,
    //             max:3,
    //             interval: 1,
    //             splitLine: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 show:true,
    //                 lineStyle: {
    //                     color: '#077bff',
    //
    //                 }
    //
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 color:'#767c8d',
    //                 interval: 0,
    //                 textStyle: {
    //                     fontSize: 14,
    //                     color: '#72788a'
    //                 }
    //             },
    //             splitArea: {
    //                 show: false
    //             },
    //             splitLine: {
    //                 show: false,
    //                 lineStyle: {
    //                     color: '#e6e6e6',
    //                     type: 'dashed'
    //                 }
    //             },
    //
    //         }],
    //
    //         series: [
    //             {
    //                 name: "C",
    //                 type: "line",
    //                 zlevel:3,
    //                 symbolSize:false,
    //                 smooth: true,
    //                 itemStyle: {
    //                     normal: {
    //                         color: "#0084ff",
    //                     }
    //                 },
    //                 areaStyle: {
    //                     normal: {
    //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             offset: 0,
    //                             color: 'rgba(0, 132, 255, 0.3)'
    //                         }, {
    //                             offset: 0.8,
    //                             color: 'rgba(0, 132, 255, 0)'
    //                         }], false),
    //                         shadowColor: 'rgba(0, 0, 0, 0.1)',
    //                         shadowBlur: 10
    //                     }
    //                 },
    //                 data:[2.16,2.18,2.42,2.58,2.22,2.35,2.58,2.43]
    //             },
    //             {
    //                 name:'A',
    //                 color:'00ffff',
    //                 type: "line",
    //                 zlevel:31,
    //                 smooth: true,
    //                 symbolSize:false,
    //                 symbol:'emptyCircle',
    //                 itemStyle: {
    //                     normal: {
    //                         color: "#00ffff",
    //                     }
    //                 },
    //                 areaStyle: {
    //                     normal: {
    //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             offset: 0,
    //                             color: 'rgba(0, 255, 255, 0.3)'
    //                         }, {
    //                             offset: 0.8,
    //                             color: 'rgba(0, 255, 255, 0)'
    //                         }], false),
    //                         shadowColor: 'rgba(0, 0, 0, 0.1)',
    //                         shadowBlur: 10
    //                     }
    //                 },
    //                 data:[1,1.18,1.01,1.3,1.06,1.18,1.03,1.13]
    //             },
    //             {
    //                 name:'B',
    //                 type: "line",
    //                 zlevel:31,
    //                 symbolSize:false,
    //                 smooth: true,
    //                 itemStyle: {
    //                     normal: {
    //                         color: "#00b7ee",
    //                     }
    //                 },
    //                 areaStyle: {
    //                     normal: {
    //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             offset: 0,
    //                             color: 'rgba(0, 183, 238, 0.3)'
    //                         }, {
    //                             offset: 0.8,
    //                             color: 'rgba(0, 183, 238, 0)'
    //                         }], false),
    //                         shadowColor: 'rgba(0, 0, 0, 0.1)',
    //                         shadowBlur: 10
    //                     }
    //                 },
    //                 data:[2.15,2.4,2.5,2.2,2.1,2.4,2.2,2.15]
    //             },
    //
    //
    //
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //        myChart.resize();
    //     });
    // },
    // Echart15:(id)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     var  option = {
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //                 type: 'shadow',
    //                 textStyle: {
    //                     color: '#1080ff'
    //                 }
    //             },
    //         },
    //         grid: {
    //             borderWidth: 10,
    //             left:'13%',
    //             top: '18%',
    //             bottom: '8%',
    //             right:'5%',
    //
    //         },
    //         legend: {
    //             right: '5%',
    //             top: '8%',
    //             data: ['','','']
    //         },
    //         xAxis: [
    //             {
    //
    //                 type: "category",
    //                 axisLine: {
    //
    //                     lineStyle: {
    //                         color: '#1080ff'
    //                     }
    //                 },
    //                 splitLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 splitArea: {
    //                     show: false
    //                 },
    //                 axisLabel: {
    //                     show:false,
    //                     color:'#767c8d',
    //                     interval: 0,
    //                     textStyle: {
    //                         fontSize: 14,
    //                         color: '#72788a'
    //                     }
    //                 },
    //                 boundaryGap: false,
    //                 data: ['02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00']
    //             }
    //         ],
    //         yAxis: [{
    //             type: 'value',
    //             min:0,
    //             max:65,
    //             interval: 50,
    //             splitLine: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 show:true,
    //                 lineStyle: {
    //                     color: '#077bff',
    //
    //                 }
    //
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 color:'#767c8d',
    //                 interval: 0,
    //                 textStyle: {
    //                     fontSize: 14,
    //                     color: '#72788a'
    //                 }
    //             },
    //             splitArea: {
    //                 show: false
    //             },
    //             splitLine: {
    //                 show: false,
    //                 lineStyle: {
    //                     color: '#e6e6e6',
    //                     type: 'dashed'
    //                 }
    //             },
    //
    //         }],
    //
    //         series: [
    //
    //             {
    //                 name:'A',
    //                 type: "line",
    //                 zlevel:31,
    //                 smooth: true,
    //                 symbolSize:false,
    //                 symbol:'emptyCircle',
    //                 itemStyle: {
    //                     normal: {
    //                         color: "#00ffff",
    //                     }
    //                 },
    //                 areaStyle: {
    //                     normal: {
    //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             offset: 0,
    //                             color: 'rgba(0, 255, 255, 0.3)'
    //                         }, {
    //                             offset: 0.8,
    //                             color: 'rgba(0, 255, 255, 0)'
    //                         }], false),
    //                         shadowColor: 'rgba(0, 0, 0, 0.1)',
    //                         shadowBlur: 10
    //                     }
    //                 },
    //                 data:[50,55,60,62,57,60,50,55,60]
    //             },
    //
    //
    //
    //
    //         ]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //        myChart.resize();
    //     });
    // },
    // Echart16:(id)=>{
    //     var myChart = echarts.init(document.getElementById(id));
    //     var appusage_data = [ {
    //         name: "",
    //         value: 17
    //     }, {
    //         name: "",
    //         value: 41
    //     }, {
    //         name: "",
    //         value: 66
    //     }];
    //     var full_data = [ {
    //         name: "app8",
    //         value: 100
    //     }, {
    //         name: "app3",
    //         value: 100
    //     }, {
    //         name: "app16",
    //         value: 100
    //     }];
    //     var data1 = [];
    //     var  option = {
    //
    //         color: ['#0cd9f9', '#233f74'],
    //
    //         tooltip: {
    //             show: false,
    //             trigger: "axis",
    //             axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //                 type: "shadow" // 默认为直线，可选为：line | shadow
    //             }
    //         },
    //         grid: {
    //             left: '30%',
    //             right: '30%',
    //             top:'70%',
    //             bottom: '105%',
    //
    //         },
    //         yAxis: [{
    //             type: "category",
    //             data: ["CPU(核)", "内存(GB)", "磁盘(GB)"],
    //             axisLine: {
    //                 show: false
    //             },
    //             axisTick: {
    //                 show: false,
    //                 alignWithLabel: true
    //             },
    //             axisLabel: {
    //                 textStyle: {
    //                     fontSize: 8,
    //                     color: "#087cff"
    //                 }
    //             }
    //         }],
    //         xAxis: [{
    //             type: "value",
    //             axisLine: {
    //                 show: false
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 show: false
    //             },
    //             splitLine: {
    //                 show: false
    //             }
    //         }],
    //
    //         series: [{
    //             type: "bar",
    //
    //             barWidth: 3,
    //             barGap: '100%',
    //             data: appusage_data,
    //             barCategoryGap: "30%",
    //             z: 2,
    //             itemStyle:{
    //                 normal:{
    //                     barBorderRadius: 1
    //                 }
    //             },
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: "right",
    //                     formatter: function(params) {
    //                         console.log(params.data.value);
    //                         data1.push(params.data.value);
    //                         return params.data.name;
    //                     },
    //                     textStyle: {
    //                         color: "#16325f"
    //                     }
    //                 }
    //             }
    //         },{
    //             type: "bar",
    //             barWidth: 3,
    //             barGap: '-100%',
    //             data: full_data,
    //             barCategoryGap: "30%",
    //             z: 1,
    //             itemStyle:{
    //                 normal:{
    //                     barBorderRadius: 1
    //                 },
    //                 emphasis:{
    //                     color:'#16325f'
    //                 }
    //             },
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: "right",
    //                     formatter: function(params) {
    //                         return data1[params.dataIndex]+'%';
    //                     },
    //                     textStyle: {
    //                         fontSize: 8,
    //                         color: "#0cd3f2"
    //                     }
    //                 }
    //             }
    //         }]
    //     };
    //
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     })
    // },
    Echart17:(id)=>{
        var myChart = echarts.init(document.getElementById(id));
        var option={
            color: [ '#00ffcc', '#0096ff','#284bff'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                // x: 'bottom',
                y: "20%",
                left:'1%',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color:'#88c3ff',
                    fontSize:10,
                    padding:-4,
                },
                data: ['闲置虚拟机 28%', '已关闭电源的虚拟机 10%','容量过载的虚拟机 62%']
            },
            grid: {
                left: '-12%',
                right: '1%',
                bottom: '160%',
                // top:'-0.5%',
                containLabel: true
            },
            xAxis:  {
                show:false,
                type: 'value'

            },

            yAxis: {
                show: false,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color:'#1080ff',
                        type:'line',
                        borderWidth:2

                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                type: 'category',
                data: ['Other']
            },
            series: [
                {
                    name: '闲置虚拟机 28%',
                    type: 'bar',
                    stack: '总量',
                    // right:'10%',
                    top:'-20%',
                    barCategoryGap:'90%',
                    label: {
                        normal: {
                            show: false,
                            // position: 'insideRight',

                        }
                    },
                    data: [20],

                },
                {
                    name: '已关闭电源的虚拟机 10%',
                    type: 'bar',
                    stack: '总量',
                    barCategoryGap:'90%',
                    label: {
                        normal: {
                            show: false,
                            // position: 'insideRight',

                        }
                    },
                    data: [20]
                },
                {
                    name: '容量过载的虚拟机 62%',
                    type: 'bar',
                    stack: '总量',
                    barCategoryGap:'90%',
                    label: {
                        normal: {
                            show: false,
                            // position: 'insideRight'
                        }
                    },
                    data: [50]
                },


            ]
        };
        myChart.setOption(option);
        $(window).resize(function () {
            myChart.resize();
        })
    },
    // Echart18:(id)=>{
    //     var appusage_data = [{
    //         name: "",
    //         value:17
    //     }, {
    //         name: "",
    //         value:21
    //     }, {
    //         name: "",
    //         value:36
    //     }, {
    //         name: "",
    //         value:66
    //     }];
    //     var data1 = [];
    //     var full_data = [{
    //         name: "app8",
    //         value: 100
    //     }, {
    //         name: "app3",
    //         value: 100
    //     }, {
    //         name: "app16",
    //         value: 100
    //     }, {
    //         name: "app16",
    //         value: 100
    //     }];
    //     var data1 = [];
    //     var myChart = echarts.init(document.getElementById(id));
    //     var  option = {
    //
    //         color: ['#0cd9f9', '#233f74'],
    //         title: {
    //             text: '',
    //             textStyle: {
    //                 color: "#88c3ff",
    //                 fontWeight: "bold",
    //                 fontSize: 10
    //             },
    //             top: "10%",
    //             left: "2.2%"
    //         },
    //         tooltip: {
    //             show: false,
    //             trigger: "axis",
    //             axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //                 type: "shadow" // 默认为直线，可选为：line | shadow
    //             }
    //         },
    //         grid: {
    //             left: "12%",
    //             top: "1%",
    //             right: "15%",
    //             bottom: "10%",
    //             // containLabel: true
    //         },
    //         yAxis: [{
    //             type: "category",
    //             data: ["网络IO", "磁盘IO", "内存", "vCPU"],
    //             axisLine: {
    //                 show: false
    //             },
    //             axisTick: {
    //                 show: false,
    //                 alignWithLabel: true
    //             },
    //             axisLabel: {
    //                 textStyle: {
    //                     fontSize: 12,
    //                     color: "#087cff"
    //                 }
    //             }
    //         }],
    //         xAxis: [{
    //             type: "value",
    //             axisLine: {
    //                 show: false
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 show: false
    //             },
    //             splitLine: {
    //                 show: false
    //             }
    //         }],
    //
    //         series: [{
    //             type: "bar",
    //
    //             barWidth: 4,
    //             barGap: '100%',
    //             data: appusage_data,
    //             barCategoryGap: "30%",
    //             z: 2,
    //             // color:['#f2843a','#0edbfb','#0edbfb','#0edbfb'],
    //             itemStyle:{
    //                 normal:{
    //                     barBorderRadius: 1
    //                 }
    //             },
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: "right",
    //                     formatter: function(params) {
    //                         console.log(params.data.value);
    //                         data1.push(params.data.value);
    //                         return params.data.name;
    //                     },
    //                     textStyle: {
    //                         color: "#16325f"
    //                     }
    //                 }
    //             }
    //         },{
    //             type: "bar",
    //             barWidth: 4,
    //             barGap: '-100%',
    //             data: full_data,
    //             barCategoryGap: "30%",
    //             z: 1,
    //             itemStyle:{
    //                 normal:{
    //                     barBorderRadius: 1
    //                 },
    //                 emphasis:{
    //                     color:'#16325f'
    //                 }
    //             },
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: "right",
    //                     formatter: function(params) {
    //                         return data1[params.dataIndex]+'%';
    //                     },
    //                     textStyle: {
    //                         fontSize: 12,
    //                         color: "#0cd3f2"
    //                     }
    //                 }
    //             }
    //         }]
    //     };
    //     myChart.setOption(option);
    //     $(window).resize(function () {
    //         myChart.resize();
    //     })
    // }
}