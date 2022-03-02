# 一、margin负值应用

详见 margin负值应用.html

1.让每个盒子margin 往左侧移动 -1px 正好压住相邻盒子边框
2.鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有有定位，则加相对定位（保留位置），如
果有定位，则加z-index）

# 二、文字围绕浮动元素

![image-20220301191946991](/Users/pengxy/Library/Application Support/typora-user-images/image-20220301191946991.png)

# 三、巧用行内块元素

![image-20220301210254456](/Users/pengxy/Library/Application Support/typora-user-images/image-20220301210254456.png)

## 四、CSS初始化

以京东代码为例：

`*{margin:0;padding:0}em,i{font-style:normal}li{list-style:none}img{border:0;vertical-align:middle}button{cursor:pointer}a{color:#666;text-decoration:none}a:hover{color:#c81623}button,input{font-family:Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif}body{-webkit-font-smoothing:antialiased;background-color:#fff;font:12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;color:#666}.hide,.none{display:none}.clearfix:after{visibility:hidden;clear:both;display:block;content:".";height:0}.clearfix{*zoom:1}`