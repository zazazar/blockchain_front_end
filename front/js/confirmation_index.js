update();
self.setInterval("update()", 10000); //毫秒

function update() {
    //confirmation
    //右上（当前不同作品类型存证数量分布 饼图）
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/certificateAmountGroupByWorkType",
            type: "get",
            dataType: "json",
            success: function(response) {
                flagRectrive = true; // 收到有效数据
                console.log('右上success')
                var num = [];

                response.data.forEach(function(value, index, array) {
                    var obj = new Object();
                    obj.name = array[index]['workType'];
                    obj.value = array[index]['CertificateAmount'];
                    num.push(obj)
                });

                draw(num);
            },
            error: function() {
                console.log('右上error');

                var num = [];
                var obj0 = { name: "文字", value: 1886 };
                var obj1 = { name: "音乐", value: 1758 };
                var obj2 = { name: "图形", value: 1793 }

                num.push(obj0);
                num.push(obj1);
                num.push(obj2);

                // 还未收到有效数据
                if (flagRectrive == false) {
                    draw(num);
                }
            }
        });

        function draw(num) {
            //1. 实例化对象
            var myChart = echarts.init(document.querySelector(".upperright .chart"));
            //2. 指定配置和数据

            var option = {

                color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

                legend: {
                    left: 'center',
                    top: 'bottom',
                    bottom: "0",
                    itemHeight: 10,
                    itemWidth: 10,
                    textStyle: {
                        color: "rgba(248,248,255,1)",
                        fontSize: "12"
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                    textStyle: {
                        //color: "rgba(255,255,255,.5)",
                        fontSize: "8"
                    }
                },
                series: [{
                    name: '存证数量',
                    type: 'pie',
                    radius: ['45%', '65%'],
                    avoidLabelOverlap: true,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: num
                }]
            };

            //option['series']['data'].push(value: CertificateAmount[0], n

            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表适应屏幕
            window.addEventListener("resize", function() {
                myChart.resize();
            });

        }

    })();

    //右中（个人账户与非个人账户接收者通证数量对比）
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/copyRightAmountGroupByIDtype",
            type: "get",
            dataType: "json",
            success: function(response) {
                flagRectrive = true; // 收到有效数据
                console.log('右中success')

                var num = [];
                var KEY = Object.keys(response.data);
                var obj0 = { value: response.data[KEY[0]], name: KEY[0] };
                var obj1 = { value: response.data[KEY[1]], name: KEY[1] };
                num.push(obj0);
                num.push(obj1);
                draw(num);
            },
            error: function() {
                console.log('右中error');

                var num = [];
                var obj0 = { value: 18950, name: "非个人账户" };
                var obj1 = { value: 28881, name: "个人账户" };

                num.push(obj0);
                num.push(obj1);

                // 还未收到有效数据
                if (flagRectrive == false) {
                    draw(num);
                }
            }
        });

        function draw(num) {
            //1. 实例d化对象
            var myChart = echarts.init(document.querySelector(".middleright .chart"));
            //2. 指定配置和数据

            var option = {
                color: ['#9fe6b8', '#1d9dff'],
                title: {
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                    textStyle: {
                        //color: "rgba(255,255,255,.5)",
                        fontSize: "8"
                    }
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    bottom: "0",
                    itemHeight: 10,
                    itemWidth: 10,
                    textStyle: {
                        color: "rgba(248,248,255,1)",
                        fontSize: "12"
                    }
                },

                series: [{
                    name: '通证数量',
                    type: 'pie',
                    radius: '65%',
                    data: num,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };

            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表适应屏幕
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        }

    })();

    //右下（不同类别通证的数量分布 饼图）
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/copyRightAmountGroupByCopyrightType",
            type: "get",
            dataType: "json",
            success: function(response) {
                flagRectrive = true; // 收到有效数据
                console.log('右下success')

                var num = [];
                var KEY = Object.keys(response.data);
                for (var i = 0; i < KEY.length; i++) {
                    var obj = new Object();
                    obj.value = response.data[KEY[i]]
                    obj.name = KEY[i]
                    num.push(obj)
                }

                draw(num);
            },
            error: function() {
                console.log('右下error');

                var num = [];
                num = [{ value: 10981, name: "复制权" }, { value: 4335, name: "发行权" },
                    { value: 4335, name: "出租权" }, { value: 4335, name: "展览权" },
                    { value: 4335, name: "表演权" }, { value: 4335, name: "放映权" }
                ]

                // 还未收到有效数据
                if (flagRectrive == false) {
                    draw(num);
                }
            }
        });

        function draw(num) {
            //1. 实例化对象
            var myChart = echarts.init(document.querySelector(".lowerright .chart"));
            //2. 指定配置和数据
            var option = {

                color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                    textStyle: {
                        //color: "rgba(255,255,255,.5)",
                        fontSize: "8"
                    }
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    bottom: "0",
                    itemHeight: 10,
                    itemWidth: 10,
                    textStyle: {
                        color: "rgba(248,248,255,1)",
                        fontSize: "12"
                    }
                },

                series: [{
                    name: '通证数量',
                    type: 'pie',
                    top: "0%",
                    radius: ['10%', '50%'],
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
                    //只截取所有取值的前六项
                    data: num.slice(1, 6)
                }]
            };
            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表适应屏幕
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        }

    })();

    //左下（存证总数量随时间变化 折线图）
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/certificateAmountEXchange",
            type: "get",
            dataType: "json",
            success: function(response) {
                flagRectrive = true; // 收到有效数据
                console.log('左下success');

                //两个数组
                var num_Month = [];
                var num_CertificateAmount = [];

                response.data.forEach(function(value, index, array) {
                    num_Month.push(array[index]['Month']);
                    num_CertificateAmount.push(array[index]['CertificateAmount']);
                });

                draw(num_Month, num_CertificateAmount);
            },
            error: function() {
                console.log('左下error');

                var num_Month = ["七月", "八月", "九月", "十月", "十一月", "十二月", "一月", "二月", "三月", "四月", "五月", "六月"];
                var num_CertificateAmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7488, 3472]

                // 还未收到有效数据
                if (flagRectrive == false) {
                    draw(num_Month, num_CertificateAmount);
                }
            }
        });

        function draw(num_Month, num_CertificateAmount) {
            //1. 实例化对象
            var myChart = echarts.init(document.querySelector(".lowerleftleft .chart"));
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
                            color: "rgba(248,248,255,1)",
                            fontSize: 11
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
                    data: num_Month,
                }],
                yAxis: [{
                    type: 'value',
                    min: 30, //设置y轴最小值
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
                        data: num_CertificateAmount,
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
                        //data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
                    },

                ]
            };
            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表适应屏幕
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        }
    })();

    //中下（版权通证总数量随时间变化 折线图）
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/copyRightAmountEXchange",
            type: "get",
            dataType: "json",
            success: function(response) {
                flagRectrive = true; // 收到有效数据
                console.log('中下success');

                var num_Month = [];
                var num_CopyRightAmount = [];

                response.data.forEach(function(value, index, array) {
                    num_Month.push(array[index]['Month']);
                    num_CopyRightAmount.push(array[index]['CopyRightAmount']);
                });

                draw(num_Month, num_CopyRightAmount);
            },
            error: function() {
                console.log('左下error');

                var num_Month = ["七月", "八月", "九月", "十月", "十一月", "十二月", "一月", "二月", "三月", "四月", "五月", "六月"];
                var num_CopyRightAmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14905, 32950]

                // 还未收到有效数据
                if (flagRectrive == false) {
                    draw(num_Month, num_CopyRightAmount);
                }
            }
        });

        function draw(num_Month, num_CopyRightAmount) {
            //1. 实例化对象
            var myChart = echarts.init(document.querySelector(".lowerleftright .chart"));
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
                            color: "rgba(248,248,255,1)",
                            fontSize: 11
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
                    data: num_Month,
                }],
                yAxis: [{
                    min: 30,
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
                        //data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40],
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
                        data: num_CopyRightAmount
                    },

                ]
            };

            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表适应屏幕
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        }
    })();

    //左上最大（不同作品类型的存证数量随时间的变化 柱形图）
    (function() {

        var flagRectrive = false;

        $.ajax({
            url: "http://39.102.93.47:9002/backend/certificateAmountGroupByWorkTypeEXchange",
            type: "get",
            dataType: "json",
            success: function(response) {
                flagRectrive = true; // 收到有效数据
                console.log('左上success');

                // x轴月份
                var x_num = new Array();
                for (var i = 0; i < response.data.length; i++) {
                    x_num.push(response.data[i][0]['Month'])
                }

                // 作品类型
                var workType = new Array();
                for (var i = 0; i < response.data[0].length; i++) {
                    workType.push(response.data[0][i]['workType'])
                }

                // y轴数据
                var y_num = new Array();

                for (var i = 0; i < response.data[0].length; i++) { //4
                    var a = new Array();
                    for (var j = 0; j < response.data.length; j++) { //3
                        a.push(response.data[j][i]['CertificateAmount']);
                    }
                    y_num.push(a)
                }
                draw(x_num, workType, y_num)
            },
            error: function() {
                console.log('左下error');

                var x_num = ["七月", "十月", "一月", "四月"];
                var workType = ["文字", "图形", "音乐"]
                var y_num = [
                    [0, 0, 0, 600],
                    [0, 0, 0, 590],
                    [0, 0, 0, 510]
                ]

                // 还未收到有效数据
                if (flagRectrive == false) {
                    draw(x_num, workType, y_num)
                }
            }
        });

        function draw(x_num, workType, y_num) {
            //1. 实例化对象
            var myChart = echarts.init(document.querySelector(".upperleft .chart"));
            //2. 指定配置和数据
            var option = {

                color: ['#87CEFA', '#6495ED', '#4169E1'],

                legend: {
                    show: true,
                    textStyle: {
                        color: "rgba(248,248,255,1)",
                        fontSize: "12"
                    }
                },
                grid: {
                    left: "0%",
                    top: "10%",
                    right: "0%",
                    bottom: "0%",
                    containLabel: true
                },
                tooltip: {
                    //show: false,
                    trigger: 'item',
                    //formatter: '{a} <br/>{b} : {c} ({d}%)',
                    textStyle: {
                        //color: "rgba(255,255,255,.5)",
                        fontSize: "8"
                    }
                },
                xAxis: {
                    type: 'category',
                    //data: ['二月', '五月', '八月', '十一月']
                    data: x_num,

                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize: '12',
                        }
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                        name: workType[0],
                        data: y_num[0],
                        type: 'bar',
                        barWidth: 35,
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        },
                        itemStyle: {
                            // 修改柱子圆角
                            barBorderRadius: 5
                        }
                    },
                    {
                        name: workType[1],
                        data: y_num[1],
                        type: 'bar',
                        barWidth: 35,
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        },
                        itemStyle: {
                            // 修改柱子圆角
                            barBorderRadius: 5
                        }
                    },
                    {
                        name: workType[2],
                        data: y_num[2],
                        type: 'bar',
                        barWidth: 35,
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        },
                        itemStyle: {
                            // 修改柱子圆角
                            barBorderRadius: 5
                        }
                    }
                ]
            };

            //3. 把配置给实例对象
            myChart.setOption(option);
            //4. 图表适应屏幕
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        }

    })();
}