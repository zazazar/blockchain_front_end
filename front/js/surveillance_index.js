//立即执行函数 mychart是局部变量；
//多个立即执行函数中间有分号
// (function(){
//     mychart = 
// })();

update();
self.setInterval("update()", 10000);

function update() {

    //左上 截止当前不同作品类型发生的侵权数量分布
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/listen/TortCountGroupByWorkType",
            type: "get",
            dataType: "json",
            success: function(response) {
                flagRectrive = true; // 收到有效数据
                console.log('左上success');

                //两个数组
                var workType = [];
                var TortCount = [];

                response.data.forEach(function(value, index, array) {
                    workType.push(array[index]['workType']);
                    TortCount.push(array[index]['TortCount']);
                });

                console.log(workType)
                console.log(TortCount)
                draw(workType, TortCount)
            },
            error: function() {
                console.log('左上error');
                //两个数组
                var workType = ["图形", "文字", "美术", "音乐", "口述", "杂技艺术"];
                var TortCount = [185, 174, 159, 158, 57, 45];
                draw(workType, TortCount)
            }
        });

        function draw(workType, TortCount) {

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
                    data: workType,
                    axisTick: {
                        alignWithLabel: true,
                        show: false,
                        interval: 1
                    },
                    //修改刻度标签
                    axisLabel: {
                        color: "rgba(248,248,255,1)",
                        fontSize: "12"
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
                    name: "侵权数量",
                    type: "bar",
                    // 修改柱子宽度
                    barWidth: "35%",

                    // series 更换数据 一般是通过ajax请求获取的
                    data: TortCount,
                    itemStyle: {
                        // 修改柱子圆角
                        barBorderRadius: 5
                    }
                }]
            };
            //3. 把配置项给实例对象
            myChart.setOption(option);
            //4. 图表与屏幕自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });

        }


    })();

    //柱状图2 右上 当前不同创作类型侵权数量
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/listen/TortCountGroupByCreationType",
            type: "get",
            dataType: "json",
            success: function(response) {

                flagRectrive = true; // 收到有效数据
                console.log('右上success');

                //两个数组
                var creationType = []; //1
                var TortCount = []; //2
                var TortCountPercentage = [];
                var sum = 0;
                var sumArr = new Array(); //3

                response.data.forEach(function(value, index, array) {
                    creationType.push(array[index]['creationType']);
                    TortCount.push(array[index]['TortCount']);
                    sum = sum + array[index]['TortCount'];
                });

                for (var i = 0; i < TortCount.length; i++) {
                    sumArr[i] = sum;
                    TortCountPercentage[i] = parseInt(100 * TortCount[i] / sum);
                }

                console.log(creationType)
                console.log(TortCount)
                console.log(sumArr)

                draw(creationType, TortCount, sumArr);

            },
            error: function() {
                console.log('右上error');
                var creationType = ["原创", "改编", "翻译"]; //1
                var TortCount = [360, 780, 156]; //2
                var sumArr = [940, 940, 940]; //3
                draw(creationType, TortCount, sumArr);
            }
        });

        function draw(creationType, TortCount, sumArr) {

            // 声明颜色数组
            var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

            //1. 实例化对象
            var myChart = echarts.init(document.querySelector('.bar2 .chart'));
            //2. 指定配置和数据
            var option = {

                legend: {
                    data: ['2020年', '2021年']
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
                        data: creationType,
                    },
                    // Y轴的第二组对象，右边的文字
                    {
                        show: true,
                        inverse: true,
                        data: TortCount,
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
                        data: TortCount,
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

                            show: false,
                            // 图形内显示
                            position: "insideLeft",
                            // 文字的显示格式
                            formatter: "{c}",
                            color: "#fff",
                            fontSize: 10

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
                        data: sumArr
                    }
                ]
            };
            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表与屏幕自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        }

    })();

    //折线图1 左中 不同作品类型的侵权数量变化
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/listen/TortCountGroupByWorkTypeEXchange",
            type: "get",
            dataType: "json",
            success: function(response) {

                flagRectrive = true; // 收到有效数据
                console.log('左中success');

                // x轴月份
                var x_num = new Array(); //1
                for (var i = 0; i < response.data.length; i++) {
                    x_num.push(response.data[i][0]['Month'])
                }
                console.log(x_num);


                // 作品类型 ["文字","口述","音乐"]
                var workType = new Array(); //2
                for (var i = 0; i < response.data[0].length; i++) {
                    workType.push(response.data[0][i]['workType'])
                }
                console.log(workType);

                // y轴数据
                var y_num = new Array(); //3
                for (var i = 0; i < response.data[0].length; i++) { //4
                    var a = new Array();
                    for (var j = 0; j < response.data.length; j++) { //3
                        a.push(response.data[j][i]['TortCount']);
                    }
                    y_num.push(a)
                }
                console.log(y_num)

                draw(x_num, workType, y_num);

            },
            error: function() {
                console.log('左中error');
                var x_num = ["八月", "九月", "十月", "十一月", "十二月", "一月", "二月", "三月", "四月", "五月", "六月", "七月"]; //1
                var workType = ["图形", "文字", "美术"]; //2
                var y_num = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 185, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 174, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159, 0]
                ]; //3
                draw(x_num, workType, y_num);
            }
        });

        function draw(x_num, workType, y_num) {

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
                        color: '#fff' // 图例文字颜色
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
                    data: x_num,
                    axisTick: {
                        show: false // 去除刻度线
                    },
                    axisLabel: {
                        color: '#4c9bfd', // 文本颜色
                        textStyle: {
                            color: "rgba(248,248,255,1)",
                            fontSize: 12
                        }

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
                color: ['#00f2f1', '#ed3f35', '#FFFF00'],
                series: [{
                        name: workType[0],
                        data: y_num[0],
                        type: 'line',
                        smooth: true
                    }, {
                        name: workType[1],
                        data: y_num[1],
                        type: 'line',
                        smooth: true

                    },
                    {
                        name: workType[2],
                        data: y_num[2],
                        type: 'line',
                        smooth: true

                    }
                ]
            };
            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表与屏幕自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });

        }

    })();

    //折线图2 右中 不同创作类型的侵权数量变化
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/listen/TortCountGroupByCreationTypeEXchange",
            type: "get",
            dataType: "json",
            success: function(response) {

                flagRectrive = true; // 收到有效数据
                console.log('右中success');

                // x轴月份
                var x_num = new Array(); //1
                for (var i = 0; i < response.data.length; i++) {
                    x_num.push(response.data[i][0]['Month'])
                }
                console.log(x_num);


                // 作品类型 ["文字","口述","音乐"]
                var creationType = new Array(); //2
                for (var i = 0; i < response.data[0].length; i++) {
                    creationType.push(response.data[0][i]['creationType'])
                }
                console.log(creationType);

                // y轴数据
                var y_num = new Array(); //3
                for (var i = 0; i < response.data[0].length; i++) { //4
                    var a = new Array();
                    for (var j = 0; j < response.data.length; j++) { //3
                        a.push(response.data[j][i]['TortCount']);
                    }
                    y_num.push(a)
                }
                console.log(y_num)

                draw(x_num, creationType, y_num)

            },
            error: function() {
                console.log('右中error');
                var x_num = ["八月", "九月", "十月", "十一月", "十二月", "一月", "二月", "三月", "四月", "五月", "六月", "七月"]; //1
                var creationType = ["曲艺", "文字", "舞蹈"]; //2
                var y_num = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 0]
                ]; //3
                draw(x_num, creationType, y_num)
            }
        });

        function draw(x_num, creationType, y_num) {

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
                        color: '#fff', // 图例文字颜色
                        fontSize: "12"
                    },
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
                            color: "rgba(248,248,255,1)",
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
                    data: x_num,
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
                        name: creationType[0],
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
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
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
                        data: y_num[0]
                    },


                    {
                        name: creationType[1],
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "#00d887",
                                width: 2
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
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
                        data: y_num[1]
                    },

                    {
                        name: creationType[2],
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "#DCDCDC",
                                width: 2
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                    [{
                                            offset: 0,
                                            color: "rgba(245, 245, 245, 0.4)"
                                        },
                                        {
                                            offset: 0.8,
                                            color: "rgba(245, 245, 245, 0.1)"
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
                            color: "#DCDCDC",
                            borderColor: "rgba(245, 245, 245, .1)",
                            borderWidth: 12
                        },
                        // 开始不显示拐点， 鼠标经过显示
                        showSymbol: false,
                        // series  第二个对象data数据
                        data: y_num[2]
                    },


                ]
            };

            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表与屏幕自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });

        }

    })();

    //饼形图1 左下 侵权数量前三的站点
    (function test() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/listen/TortCountGroupByTortSite",
            type: "get",
            dataType: "json",
            success: function(response) {

                flagRectrive = true; // 收到有效数据
                console.log('左下success');

                var num = [];
                response.data.forEach(function(value, index, array) {
                    var obj = new Object();
                    obj.name = array[index]['TortSite'];
                    obj.value = array[index]['TortCount'];
                    num.push(obj)
                });
                console.log(num);

                draw(num);

            },
            error: function() {
                console.log('左下error');
                var num = [{ name: "乐视", value: 577 }, { name: "新浪", value: 233 }, { name: "酷狗", value: 187 }];
                draw(num);
            }
        });

        function draw(num) {

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
                        color: "rgba(248,248,255,1)",
                        fontSize: "12"
                    },
                    // legend 中的data  可省略
                    //data: ["视频类平台", "社交网络", "搜索引擎", "小网站", "小网站"],
                },

                series: [{
                    avoidLabelOverlap: false,
                    name: "侵权数量",
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
                    data: num,
                }]
            };
            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表与屏幕自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });

        }

    })();

    //饼形图2 右下 
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/listen/TortCountGroupByTortSiteGroupByWorkType",
            type: "get",
            dataType: "json",
            success: function(response) {

                flagRectrive = true; // 收到有效数据
                console.log('右下success');

                var num = [];
                response.data.forEach(function(value, index, array) {
                    var obj = new Object();
                    obj.name = array[index]['workType'];
                    obj.value = array[index]['TortCount'];
                    num.push(obj)
                });
                console.log(num);

                draw(num);
            },
            error: function() {
                console.log('右下error');
                var num = [{ name: "图形", value: 176 }, { name: "文字", value: 160 }, { name: "美术", value: 147 }, { name: "音乐", value: 142 }, { name: "口述", value: 56 }, { name: "曲艺", value: 43 }]
                draw(num);
            }
        });

        function draw(num) {

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
                        color: "rgba(248,248,248,1)",
                        fontSize: "12"
                    }
                },

                series: [{
                    name: '被侵权作品数量',
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
                    data: num
                }]
            };
            //3. 把配置给实力对象
            myChart.setOption(option);
            //4. 图表适应屏幕
            window.addEventListener("resize", function() {
                myChart.resize();
            });

        }


    })();

    //中间部分
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/listen/Tort_AND_ClaimCountGroupByWorkType",
            type: "get",
            dataType: "json",
            success: function(response) {

                flagRectrive = true; // 收到有效数据
                console.log('中间success');

                var num = [];
                var ClaimCount = [];
                var TortCount = [];

                response.data.forEach(function(value, index, array) {
                    var obj = new Object();
                    obj.name = array[index]['workType'];
                    obj.max = array[index]['TortCount'] + 1;
                    ClaimCount.push(array[index]['ClaimCount'])
                    TortCount.push(array[index]['TortCount'])
                    num.push(obj)
                });

                console.log(ClaimCount);
                // console.log(TortCount);
                console.log(num);

                draw(num, ClaimCount)

            },
            error: function() {
                console.log('中间error');

                var ClaimCount = [80, 100, 20, 70, 10, 3];
                var num = [{ name: "图形", max: 185 }, { name: "文字", max: 174 }, { name: "美术", max: 159 }, { name: "音乐", max: 158 }, { name: "口述", max: 57 }, { name: "曲艺", max: 45 }];

                draw(num, ClaimCount);
            }
        });

        function draw(num, ClaimCount) {

            //1. 实例化对象
            var myChart = echarts.init(document.querySelector(".map .chart"));
            //2. 指定配置和数据
            var option = {
                color: ['#00FFFF'],
                // '#9fe6b8','#32c5e9', 

                title: {
                    text: '侵权数量前三站点发起维权作品类型分布',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: 15
                    },
                    padding: 20,
                    fontWeight: 'normal',
                },

                tooltip: {},
                legend: {
                    // data: ['维权类型数量'],
                    textStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: "15",
                    },
                    top: 'bottom'
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
                    indicator: num
                },
                series: [{
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [{
                        value: ClaimCount,
                        name: '发起维权作品数量'
                    }]
                }]
            };

            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表与屏幕自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });

        }


    })();



}