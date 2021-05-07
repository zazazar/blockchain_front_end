//confirmation


//右上（当前不同作品类型存证数量分布饼图）
(function () {

    $.ajax({
        url: "http://localhost:3000/db",
        type: "get",
        dataType: "json",
        success: function (response) {
            console.log(response); //object
            console.log(JSON.stringify(response));
            console.log(JSON.parse(JSON.stringify(response)))
            console.log(typeof (JSON.parse(JSON.stringify(response))))

            //获取到的数据
            var data1 = JSON.parse(JSON.stringify(response))['posts'][0]['id']
            var data2 = JSON.parse(JSON.stringify(response))['posts'][1]['id']
            console.log(data1)
            console.log(data2)




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
                        value: 367,
                        name: '复制权'
                    },
                    {
                        value: 468,
                        name: '发行权'
                    },
                    {
                        value: 334,
                        name: '出租权'
                    },
                    {
                        value: 494,
                        name: '展览权'
                    },
                    {
                        value: 493,
                        name: '表演权'
                    },
                    {
                        value: 323,
                        name: '放映权'
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


        }
    });



})();

//右中（个人账户与非个人账户接收者通证数量对比）
(function () {

    $.ajax({
        url: "http://localhost:3000/db",
        type: "get",
        dataType: "json",
        success: function (response) {
            console.log(response); //object
            console.log(JSON.stringify(response));
            console.log(JSON.parse(JSON.stringify(response)))
            console.log(typeof (JSON.parse(JSON.stringify(response))))

            var data1 = JSON.parse(JSON.stringify(response))['posts'][0]['id']
            var data2 = JSON.parse(JSON.stringify(response))['posts'][1]['id']
            console.log(data1)
            console.log(data2)




            //1. 实例化对象
            var myChart = echarts.init(document.querySelector(".middleright .chart"));
            //2. 指定配置和数据

            var option = {
                color: ['#9fe6b8', '#1d9dff'],


                title: {
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
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

                series: [
                    {
                        name: '通证接受者',
                        type: 'pie',
                        radius: '60%',
                        data: [
                            { value: 387, name: '个人账户' },
                            { value: 811, name: '非个人账户' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };



            //3. 把配置给实力对象
            myChart.setOption(option);
            //4. 图表适应屏幕
            window.addEventListener("resize", function () {
                myChart.resize();
            });


        }
    });



})();






