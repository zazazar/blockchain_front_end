
$(function () {
	$.ajax({
		type: 'post',
		url: baseUrl + "BIAction/buslineAttendance",//调用后台接口获取折线图上的数据
		dataType: "jsonp",
		success: function (result) {
			var dataList = result.dataList;//这个是Y轴的数据
			var dateList = result.dateList;//这个是X轴的日期

			//基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			option = {
				tooltip: {
					// formatter: '{b0}<br />{a0}:{c0}<br />{a1}:{c1}%',
					trigger: 'axis',
					formatter: function (dataList) {
						var html;
						for (var i = 0; i < dataList.length; i++) {
							html = dataList[i].value + "%";//这里注意两个参数名不一样 data 和 date
						}
						return html;
					}
				},
				title: {
					text: '上座率'
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					boundaryGap: [0, 0.01],
					data: result.dateList,
				},
				yAxis: {
					type: 'value'
				},
				color: ["#7CBBF0"],
				series: [{
					//color: '#275F82', //改变区域颜色
					data: result.dataList,
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					lineStyle: {  //折线图上线的颜色
						normal: {
							color: "#7CBBF0",
							width: 3,
						},
					},
					// 显示数值，折线图上的点
					itemStyle: { normal: { label: { show: true } } }
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		}
	})
})

