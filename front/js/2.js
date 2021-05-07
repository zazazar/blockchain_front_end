//confirmation
//右上（存证确权数量对比饼图）

(function () {

    $.ajax({
        url: "http://localhost:3000/db",
        type: "get",
        dataType: "json",
        success: function (response) {
            console.log(response); //object
            console.log(JSON.stringify(response)); 
            console.log(JSON.parse(JSON.stringify(response)))
            console.log(typeof(JSON.parse(JSON.stringify(response))))

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
                        value: data1,
                        name: '存证数量'
                    },
                    {
                        value: data2,
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


        }
    });



})();






