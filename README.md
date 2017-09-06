# 预览效果
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