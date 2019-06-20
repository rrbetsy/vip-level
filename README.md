# 项目名称：仿大众点评会员等级页面的部分内容
**1、该项目使用jquery开发，实现了元素锚定、页面弹窗等功能。**
（1）保证是在文档加载之后运行jquery代码
```
$(document).ready(function() {
      //jquery代码
});
```
（2）使用each()遍历匹配的导航栏元素，获取对应索引和元素<br>（3）使用offset().top，offset().left获取匹配元素距离视口顶部和左边的距离<br>（4）使用width()和height()，获取匹配元素本身的宽和高<br>（5）通过设置匹配元素距离视口左边的距离，来控制下划线的移动距离；同样地，设置匹配元素距离视口顶部的距离，点击对应tab页面滚动到对应元素。
**2、使用jquery监听页面滚动位置，控制是否显示右侧小菜单，回顶部功能。**
（1）使用scrollTop()获取元素滚动的垂直距离<br>（2）当文档滚动到一定距离后导航栏固定在顶部，右侧出现小菜单，点击回顶部，把document的scrollTop()设置为0就可以回到顶部。
## CSS部分
1、使用flex实现页面布局。<br>2、使用css3属性实现弹窗动画效果和tab高亮下划线移动动画。<br>（1）transition设置动画<br>（2）transform:translate设置移动距离<br>3、利用transform的scale属性实现视网膜屏下的1px。
## 效果图
#### 1.主页
![vip-level-index](https://github.com/rrbetsy/vip-level/blob/master/image/vip-level1.jpg?raw=true)
#### 2.滚动后tab固定住
![vip-level-index](https://github.com/rrbetsy/vip-level/blob/master/image/vip-level-fix.jpg?raw=true)
#### 3.弹窗效果
![vip-level-index](https://github.com/rrbetsy/vip-level/blob/master/image/vip-level-dialog.jpg?raw=true)
