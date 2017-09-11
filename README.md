# 预览效果
需要使用 chrome 模拟器查看页面效果，或者使用手机查看页面效果。
[预览地址](https://nathanyangcn.github.io/JD-Phone-page/index.html)


## 简要说明
#### 本篇使用动态 rem 制作的页面
#### 一般步骤
1. 添加 meta:vp 标签 —— 适配移动端
```
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
2. 动态获取手机屏幕宽度
```
var width = document.documentElement.clientWidth;
```
3. 动态计算页面放大倍数（可省略）
```
var scale = width / 320; /* 即：手机屏幕真实宽度 / 设计稿页面宽度 */
```
4. 动态计算 html 根元素字体大小，并写入页面（可使用ES6字符串，此处没用），此时 `1rem = width/10`
```
/* 若不省略第2步，可直接用此句*/
var css = 'html { font-size:' + scale * 320 / 10 + 'px; }';
document.write('<style>' + css + '</style>');

/* 若省略第2步，可直接用此句*/
var css = 'html{font-size:' + width / 10 + 'px;}';
document.write('<style>' + css + '</style>');
```
5. 将页面中所有 px 单位值修改为 rem单位值，然后大功告成。

#### 额外替代方法
1. 新单位：vw
2. 新布局：flex

#### 额外知识点
1. 一像素问题（需要再想想）
2. [淘宝flexible方案](https://github.com/amfe/lib-flexible)（需要再看看）

#### 目前完成的内容
1. 横向拖拽——封装完成，可通过 new Drag() 复用代码，但有待扩展
```
Drag() 接受两个参数：ele / eleCt
    1.1 ele ：需要拖动的元素
    1.2 eleCt ：拖动元素的容器 —— 用于边界检验，使拖动元素不会消失
    注：暂时缺少功能：锁定可拖动方向X/Y、锁定元素不可拖动边框、判定元素是否可拖动出界
```
2. 轮播——封装完成，可通过 new Carousel() 复用代码
```
Carousel() 接受三个参数：ct / dur / auto
    2.1 ct ：轮播DOM结构的容器，因为轮播可能会存在多个而且具有相同的DOM结构和class样式，传入参数加以区分。
    2.2 dur ：自动播放下一个的时间间隔，默认值 3秒。
    2.3 auto ：是否需要自动播放，'true' 为自动播放； 'false' 为不会自动播放； 默认值为 'true'.
```
3. 倒计时——封装完成，可通过 new Countdown() 复用代码，但有待扩展
```
Countdown() 接受三个参数：ct / endLine / startLine
    3.1 ct ：倒计时DOM结构的容器，因为倒计时可能会存在多个而且具有相同的DOM结构和class样式，传入参数加以区分。
    3.2 endLine ：结束时间字符串，例：'2017-09-10T15:00:00'，必须是此格式时间
    3.3 startLine ：开始时间字符串，例：'2017-09-10T15:00:00'，必须是此格式时间，默认值 Date.now()
```
4. 商品展示模块——可通过添加相同的类名和 DOM 结构增加商品的展示