## 1、鼠标样式 cursor

`li{cursor:pointer}`

| 属性值      | 描述      |
| ----------- | --------- |
| default     | 默认 小白 |
| pointer     | 小手      |
| move        | 移动      |
| text        | 文本      |
| not-allowed | 禁止      |

## 2、轮廓线

给表单添加outline:0；或者outline:none样式之后，就可以去掉默认的蓝色边框

`input{outline:none}`

## 3、 防止拖拽文本域

实际开发中，我们文本域右下角是不可以拖拽的

`textarea{resize:none;}`

## 4、vertical-align 属性应用

CSS的vertical-align属性应用场景：经常用于设置图片或者表单（行内块元素）和文字垂直对齐。

官方解释：用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效

语法：

`vertical-align:baseline|top|middle|bottom`

| 值       | 描述                                   |
| -------- | -------------------------------------- |
| baseline | 默认；元素放置在父元素的基线上         |
| top      | 把元素的顶端与行中最高元素的顶端对齐   |
| middle   | 把此元素放置在父元素的中部             |
| bottom   | 把元素的顶端与行中最低的元素的顶端对齐 |

## 5、解决图片底部默认空白缝隙问题

bug：给图片加上border时，图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。
主要解决方法有两种：

1. 给图片添加vertical-align.middle/ top/ bottom等。（提倡使用的）
2. 把图片转换为块级元素 display: block



## 6、溢出的文字省略号显示

 **1、单行文本溢出显示省略号--必须满足三个条件**

- 先强制一行内显示文本
- 超出的部分隐藏
  overflow: hidden;
- 文字用省略号替代超出的部分
  text-overflow: ellipsis;

**2、多行文本溢出显示省略号**

多行文本溢出显示省略号，有较大兼容性问题，适合于webKit刘览器或移动端（移动端大部分是webkit内核）
		` overflow : hidden;
	  text-overflow:ellipsis;
      display: -webkit-box;
    /* 限制在一个块元素显示的文本的行数*/
    -webkit-line-clamp: 2；
    /* 设置或检索伸缩盒对象的子元素的排列方式 */
   -webkit-box-orient: vertical`

**更推荐后端人员来做这个效果**