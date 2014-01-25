#waterfall 瀑布布局 （jQuery插件）#


##使用方法##
1. 页面引入jQuery和waterfall插件。
2. 加入 `$('selector').waterfall(options);`即可。


##HTML结构要求##
    <ul class="" id="idWaterfall">
		<li class="item" style="background-color: rgb(66, 66, 66); color: rgb(255, 255, 255);">
		<p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试测试测试测试</p>
		</li>
		<li class="item" style="background-color: rgb(102, 34, 68); color: rgb(255, 255, 255);">
			<p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
		</li>
	</ul>

**说明：**要求每个list元素外层包一个大元素。不局限于例子中的`<ul><li></li></ul>`，你用div结构`<div id="idWaterfall"><div class="item"></div></div>`亦可。

##可选参数##

<table style="border-collapse:collapse">
<tr><th>参数名</th><th>类型</th><th>用途</th></tr>
<tr><td>item</td><td>string</td><td>瀑布布局元素</td></tr>
<tr><td>column</td><td>int</td><td>瀑布布局栏数</td></tr>
<tr><td>horizontal</td><td>int</td><td>元素水平间距(px)</td></tr>
<tr><td>vertical</td><td>int</td><td>元素垂直间距(px)</td></tr>
<tr><td>animateDuringTime</td><td>int</td><td>动画时间(ms)</td></tr>
</table>
例：

	$('selector').waterfall({
		item : '.item',//瀑布布局元素
		column : 3, //瀑布布局栏数
		horizontal : 10,//瀑布布局水平间距
		vertical : 10,//瀑布布局垂直间距
		animateDuringTime : 600//动画时间	
	});

