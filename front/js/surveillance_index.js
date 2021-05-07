//立即执行函数 mychart是局部变量；
//多个立即执行函数中间有分号
// (function(){
//     mychart = 
// })();

// surveillance
//柱状图1
(function () {

    //1. 实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //2. 指定配置项和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "3%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ["微博", "B站", "抖音", "医疗行业", "B站", "社交行业", "其他"],
            axisTick: {
                alignWithLabel: true,
                show: false,
                interval: 1
            },
            //修改刻度标签
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "10"
            },
            axisLine: {
                show: false
                // 如果想要设置单独的线条样式 
                // lineStyle: {
                //    color: "rgba(255,255,255,.1)",
                //    width: 1,
                //    type: "solid"
            }
        }],
        yAxis: [{
            type: 'value',
            // y 轴文字标签样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            // y轴线条样式
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    // width: 1,
                    // type: "solid"
                }
            },
            // y 轴分隔线样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }

        }],
        series: [{
            name: "直接访问",
            type: "bar",
            // 修改柱子宽度
            barWidth: "35%",

            // series 更换数据 一般是通过ajax请求获取的
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
        }]
    };
    //3. 把配置项给实例对象
    myChart.setOption(option);
    //4. 图表与屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();


//柱状图2
(function () {
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

    //1. 实例化对象
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    //2. 指定配置和数据
    var option = {

        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            top: '10%',
            left: '22%',
            right: '22%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [
            // Y轴的第一组对象，左边的文字
            {
                //不显示y轴线条
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                //y轴文字设置为白色
                axisLabel: {
                    color: "#fff"
                },
                type: 'category',
                inverse: true,
                data: ["作品1", "作品2", "作品3", "作品4", "作品5"],
            },
            // Y轴的第二组对象，右边的文字
            {
                show: true,
                inverse: true,
                data: [702, 350, 610, 793, 664],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            },
        ],
        series: [{
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            name: "条",
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            yAxisIndex: 0,
            // 柱子设为圆角
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    // 此时的color可以修改柱子的颜色
                    // params是六个柱子的对象 dataIndex是当前柱子索引号
                    color: function name(params) {
                        return myColor[params.dataIndex];
                    }
                }
            },
            // 图形上的文本标签
            label: {
                normal: {
                    show: true,
                    // 图形内显示
                    position: "inside",
                    // 文字的显示格式
                    formatter: "{c}%"
                }
            }
        },

        {
            name: "框",
            type: 'bar',
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            itemStyle: {
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 3,
                barBorderRadius: 15
            },
            data: [100, 100, 100, 100, 100],
        }
        ]
    };
    //3. 把配置给实例对象
    myChart.setOption(option);
    //4. 图表与屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();

//折线图1
(function () {
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    //2. 指定配置和数据
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        // 图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
            name: '',
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            type: 'line',
            smooth: true
        }, {
            name: '',
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            type: 'line',
            smooth: true

        }]
    };
    //3. 把配置给实例对象
    myChart.setOption(option);
    //4. 图表与屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//折线图2
(function () {
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    //2. 指定配置和数据
    var option = {

        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },

        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [{
            // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            // x轴线的颜色为   rgba(255,255,255,.2)
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            },
            type: 'category',
            boundaryGap: false,
            // x轴更换数据
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            // 修改分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }

        }],
        series: [{
            name: '',
            type: 'line',
            smooth: true,
            //单独修改当前线条的样式
            lineStyle: {
                color: "#0184d5",
                width: 2
            },
            //设置填充颜色
            areaStyle: {
                // 渐变色，只需要复制即可
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.1)" // 渐变色的起始颜色
                    },
                    {
                        offset: 0.8, //偏移
                        color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                    }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            emphasis: {
                focus: 'series'
            },
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            // series  第一个对象data数据
            data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
        },




        {
            name: "",
            type: "line",
            smooth: true,
            lineStyle: {
                normal: {
                    color: "#00d887",
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"
                        },
                        {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)"
                        }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                }
            },
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 5,
            // 设置拐点颜色以及边框
            itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            // series  第二个对象data数据
            data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
        },

        ]
    };

    //3. 把配置给实例对象
    myChart.setOption(option);
    //4. 图表与屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//饼形图1
(function () {
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    //2. 指定配置和数据
    var option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "9"
            },
            // legend 中的data  可省略
            //data: ["视频类平台", "社交网络", "搜索引擎", "小网站", "小网站"],
        },

        series: [{
            avoidLabelOverlap: false,

            name: "年龄分布",
            type: "pie",
            // 设置饼形图在容器中的位置
            center: ["50%", "43%"],
            //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
            radius: ["40%", "60%"],
            // 不显示标签文字
            label: {
                show: false
            },
            // 不显示连接线
            labelLine: {
                show: false
            },

            //  series 中的数据
            data: [{
                value: 1,
                name: "视频类平台"
            },
            {
                value: 4,
                name: "社交网络"
            },
            {
                value: 2,
                name: "搜索引擎"
            },
            {
                value: 2,
                name: "小网站"
            },
            {
                value: 1,
                name: "小网站"
            }
            ],
        }]
    };
    //3. 把配置给实例对象
    myChart.setOption(option);
    //4. 图表与屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//饼形图2
(function () {
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
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
            itemHeight: 5,
            itemWidth: 5,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "8"
            }
        },

        series: [{
            name: '地区分布',
            type: 'pie',
            top: "0%",
            radius: ['10%', '60%'],
            center: ["50%", "50%"],
            roseType: "area",
            // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
            label: {
                fontSize: 10
            },
            //改变两条线
            labelLine: {
                length: 2,
                length2: 8
            },
            itemStyle: {
                borderRadius: 5
            },
            data: [{
                value: 20,
                name: '云南'
            },
            {
                value: 26,
                name: '北京'
            },
            {
                value: 24,
                name: '山东'
            },
            {
                value: 25,
                name: '河北'
            },
            {
                value: 20,
                name: '江苏'
            },
            {
                value: 25,
                name: '浙江'
            },
            {
                value: 30,
                name: '四川'
            },
            {
                value: 42,
                name: '湖北'
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

//地图部分
(function () {
    //1. 实例化对象
    var myChart = echarts.init(document.querySelector(".map .chart"));
    //2. 指定配置和数据
    var option = {

        tooltip: {},
        legend: {
            data: ['维权类型数量'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "15"
            }
        },
        radar: {
            // shape: 'circle',
            radius: "70%",
            name: {
                textStyle: {
                    color: '#fff',
                    //backgroundColor: '#999',
                    borderRadius: 10,
                    padding: [3, 10]
                }
            },
            indicator: [{
                name: '发行权',
                max: 6500
            },
            {
                name: '展览权',
                max: 16000
            },
            {
                name: '改编权',
                max: 30000
            },
            {
                name: '翻译权',
                max: 38000
            },
            {
                name: '广播权',
                max: 52000
            },
            {
                name: '放映权',
                max: 25000
            }
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '维权类型数量'
            }
            ]
        }]
    };

    //3. 把配置给实例对象
    myChart.setOption(option);
    //4. 图表与屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();

