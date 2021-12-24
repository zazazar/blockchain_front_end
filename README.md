# blockchain_front_end
区块链项目终端代码 
基于立即执行函数展示

### 效果展示
![](front/存证确权.png)
![](front/监测维权.png)

### 5.12 ajax前后端调通
完成存证确权界面

### 6.02 完成存证确权和监测维权
confirmation.html对应confirmation_index.js

surveillance.html对应surveillance_index.js

sample是没有ajax请求的静态页面

vscode安装open in browser插件 右键->open in default browser 或 command+b 即可打开html

待解决问题：网页自动刷新

思路一：html自动刷新 
```html
<html><meta http-equiv="refresh" content="100"> 每隔100s自动刷新</html>
```

思路二：添加js代码
```javascript
<script>setTimeout(function () { location.reload() }, 3000);</script>
```

问题：Echars同时渲染多组数据导致闪烁 感觉是E-charts同时渲染多个图表导致的问题 网上查了一下还没有找到解决办法

### 6.03 解决数据自动刷新问题并修改line.png的名字
思路：不用网页刷新而让数据自动刷新 

改动：conformation_index.js
```javascript
update();
self.setInterval("update()", 1000);
function update(){
//原来的代码
}
```

### 6.04 ajax在error时写入静态数据，加入draw()优化可读性
分离函数
```javascript
function draw(num_Month, num_CertificateAmount){}
```

### 7.02 surveillance加入自动刷新和假数据
surveillance加入自动刷新和假数据

### 7.06 添加了顶部按钮（存证确权和监测维权可以相互跳转）
改动了css,html文件（没有改动less文件 现在less和css不同步）

### 7.11/12
修改了一些字体的小细节（legend、xAxis、监测维权右上显示）

