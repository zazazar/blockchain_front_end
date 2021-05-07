//confirmation
//右上（存证确权数量对比饼图）
(function () {
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector(".upperright .chart"));
    //2. 指定配置和数据
    var option = {

        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            bottom: "0",
            itemHeight: 10,
            itemWidth: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "8"
            }
        },

        series: [{
            name: '数量',
            type: 'pie',
            top: "0%",
            radius: ['10%', '60%'],
            center: ["50%", "50%"],
            roseType: "area",
            // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
            label: {
                fontSize: 13
            },
            //改变两条线
            labelLine: {
                length: 2,
                length2: 8
            },
            itemStyle: {
                borderRadius: 5
            },
            //存证、确权
            data: [{
                    value: 20,
                    name: '存证数量'
                },
                {
                    value: 26,
                    name: '确权数量'
                }
            ]
        }]
    };
    //3. 把配置给实力对象
    myChart.setOption(option);
    //4. 图表适应屏幕
    window.addEventListener("resize", function () {
        myChart.resize();
    });


})();

// //右中
// (function () {
//     //1. 实例化对象
//     var myChart = echarts.init(document.querySelector(".middleright .chart"));
//     //2. 指定配置和数据
//     var option = {

//         color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

//         tooltip: {
//             trigger: 'item',
//             formatter: '{a} <br/>{b} : {c} ({d}%)'
//         },
//         legend: {
//             left: 'center',
//             top: 'bottom',
//             bottom: "0",
//             itemHeight: 5,
//             itemWidth: 5,
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "8"
//             }
//         },

//         series: [{
//             name: '地区分布',
//             type: 'pie',
//             top: "0%",
//             radius: ['10%', '60%'],
//             center: ["50%", "50%"],
//             roseType: "area",
//             // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
//             label: {
//                 fontSize: 10
//             },
//             //改变两条线
//             labelLine: {
//                 length: 2,
//                 length2: 8
//             },
//             itemStyle: {
//                 borderRadius: 5
//             },
//             data: [{
//                     value: 20,
//                     name: '云南'
//                 },
//                 {
//                     value: 26,
//                     name: '北京'
//                 },
//                 {
//                     value: 24,
//                     name: '山东'
//                 },
//                 {
//                     value: 25,
//                     name: '河北'
//                 },
//                 {
//                     value: 20,
//                     name: '江苏'
//                 },
//                 {
//                     value: 25,
//                     name: '浙江'
//                 },
//                 {
//                     value: 30,
//                     name: '四川'
//                 },
//                 {
//                     value: 42,
//                     name: '湖北'
//                 }
//             ]
//         }]
//     };
//     //3. 把配置给实力对象
//     myChart.setOption(option);
//     //4. 图表适应屏幕
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });

// })();

// //右下
// (function () {
//     //1. 实例化对象
//     var myChart = echarts.init(document.querySelector(".lowerright .chart"));
//     //2. 指定配置和数据
//     var option = {

//         color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

//         tooltip: {
//             trigger: 'item',
//             formatter: '{a} <br/>{b} : {c} ({d}%)'
//         },
//         legend: {
//             left: 'center',
//             top: 'bottom',
//             bottom: "0",
//             itemHeight: 5,
//             itemWidth: 5,
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "8"
//             }
//         },

//         series: [{
//             name: '地区分布',
//             type: 'pie',
//             top: "0%",
//             radius: ['10%', '60%'],
//             center: ["50%", "50%"],
//             roseType: "area",
//             // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
//             label: {
//                 fontSize: 10
//             },
//             //改变两条线
//             labelLine: {
//                 length: 2,
//                 length2: 8
//             },
//             itemStyle: {
//                 borderRadius: 5
//             },
//             data: [{
//                     value: 20,
//                     name: '云南'
//                 },
//                 {
//                     value: 26,
//                     name: '北京'
//                 },
//                 {
//                     value: 24,
//                     name: '山东'
//                 },
//                 {
//                     value: 25,
//                     name: '河北'
//                 },
//                 {
//                     value: 20,
//                     name: '江苏'
//                 },
//                 {
//                     value: 25,
//                     name: '浙江'
//                 },
//                 {
//                     value: 30,
//                     name: '四川'
//                 },
//                 {
//                     value: 42,
//                     name: '湖北'
//                 }
//             ]
//         }]
//     };
//     //3. 把配置给实力对象
//     myChart.setOption(option);
//     //4. 图表适应屏幕
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });

// })();

// //左上
// (function () {
//     //1. 实例化对象
//     var myChart = echarts.init(document.querySelector(".upperleft .chart"));
//     //2. 指定配置和数据
//     var option = {

//         color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

//         tooltip: {
//             trigger: 'item',
//             formatter: '{a} <br/>{b} : {c} ({d}%)'
//         },
//         legend: {
//             left: 'center',
//             top: 'bottom',
//             bottom: "0",
//             itemHeight: 5,
//             itemWidth: 5,
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "8"
//             }
//         },

//         series: [{
//             name: '地区分布',
//             type: 'pie',
//             top: "0%",
//             radius: ['10%', '60%'],
//             center: ["50%", "50%"],
//             roseType: "area",
//             // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
//             label: {
//                 fontSize: 10
//             },
//             //改变两条线
//             labelLine: {
//                 length: 2,
//                 length2: 8
//             },
//             itemStyle: {
//                 borderRadius: 5
//             },
//             data: [{
//                     value: 20,
//                     name: '云南'
//                 },
//                 {
//                     value: 26,
//                     name: '北京'
//                 },
//                 {
//                     value: 24,
//                     name: '山东'
//                 },
//                 {
//                     value: 25,
//                     name: '河北'
//                 },
//                 {
//                     value: 20,
//                     name: '江苏'
//                 },
//                 {
//                     value: 25,
//                     name: '浙江'
//                 },
//                 {
//                     value: 30,
//                     name: '四川'
//                 },
//                 {
//                     value: 42,
//                     name: '湖北'
//                 }
//             ]
//         }]
//     };
//     //3. 把配置给实力对象
//     myChart.setOption(option);
//     //4. 图表适应屏幕
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });

// })();

// //左下左
// (function () {
//     //1. 实例化对象
//     var myChart = echarts.init(document.querySelector(".lowerleftleft .chart"));
//     //2. 指定配置和数据
//     var option = {

//         color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

//         tooltip: {
//             trigger: 'item',
//             formatter: '{a} <br/>{b} : {c} ({d}%)'
//         },
//         legend: {
//             left: 'center',
//             top: 'bottom',
//             bottom: "0",
//             itemHeight: 5,
//             itemWidth: 5,
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "8"
//             }
//         },

//         series: [{
//             name: '地区分布',
//             type: 'pie',
//             top: "0%",
//             radius: ['10%', '60%'],
//             center: ["50%", "50%"],
//             roseType: "area",
//             // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
//             label: {
//                 fontSize: 10
//             },
//             //改变两条线
//             labelLine: {
//                 length: 2,
//                 length2: 8
//             },
//             itemStyle: {
//                 borderRadius: 5
//             },
//             data: [{
//                     value: 20,
//                     name: '云南'
//                 },
//                 {
//                     value: 26,
//                     name: '北京'
//                 },
//                 {
//                     value: 24,
//                     name: '山东'
//                 },
//                 {
//                     value: 25,
//                     name: '河北'
//                 },
//                 {
//                     value: 20,
//                     name: '江苏'
//                 },
//                 {
//                     value: 25,
//                     name: '浙江'
//                 },
//                 {
//                     value: 30,
//                     name: '四川'
//                 },
//                 {
//                     value: 42,
//                     name: '湖北'
//                 }
//             ]
//         }]
//     };
//     //3. 把配置给实力对象
//     myChart.setOption(option);
//     //4. 图表适应屏幕
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });

// })();

// //左下右
// (function () {
//     //1. 实例化对象
//     var myChart = echarts.init(document.querySelector(".lowerleftright .chart"));
//     //2. 指定配置和数据
//     var option = {

//         color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

//         tooltip: {
//             trigger: 'item',
//             formatter: '{a} <br/>{b} : {c} ({d}%)'
//         },
//         legend: {
//             left: 'center',
//             top: 'bottom',
//             bottom: "0",
//             itemHeight: 5,
//             itemWidth: 5,
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "8"
//             }
//         },

//         series: [{
//             name: '地区分布',
//             type: 'pie',
//             top: "0%",
//             radius: ['10%', '60%'],
//             center: ["50%", "50%"],
//             roseType: "area",
//             // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
//             label: {
//                 fontSize: 10
//             },
//             //改变两条线
//             labelLine: {
//                 length: 2,
//                 length2: 8
//             },
//             itemStyle: {
//                 borderRadius: 5
//             },
//             data: [{
//                     value: 20,
//                     name: '云南'
//                 },
//                 {
//                     value: 26,
//                     name: '北京'
//                 },
//                 {
//                     value: 24,
//                     name: '山东'
//                 },
//                 {
//                     value: 25,
//                     name: '河北'
//                 },
//                 {
//                     value: 20,
//                     name: '江苏'
//                 },
//                 {
//                     value: 25,
//                     name: '浙江'
//                 },
//                 {
//                     value: 30,
//                     name: '四川'
//                 },
//                 {
//                     value: 42,
//                     name: '湖北'
//                 }
//             ]
//         }]
//     };
//     //3. 把配置给实力对象
//     myChart.setOption(option);
//     //4. 图表适应屏幕
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });

// })();


