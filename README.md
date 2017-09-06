# 预览效果
[预览地址](https://nathanyangcn.github.io/JD-Phone-page/index.html)

## 简要说明
#### 本篇使用动态 rem 制作的页面
#### 一般步骤
1. 动态获取手机屏幕宽度
```
var width = document.documentElement.clientWidth;
```
2. 动态计算页面放大倍数（可省略）
```
var scale = width / 320; /* 即：手机屏幕真实宽度 / 设计稿页面宽度 */
```
3. 动态计算 html 根元素字体大小，并写入页面（可使用ES6字符串，此处没用），此时 `1rem = width/10`
```
/* 若不省略第2步，可直接用此句*/
var css = 'html { font-size:' + scale * 320 / 10 + 'px; }';
document.write('<style>' + css + '</style>');

/* 若省略第2步，可直接用此句*/
var css = 'html{font-size:' + width / 10 + 'px;}';
document.write('<style>' + css + '</style>');
```
4. 将页面中所有 px 单位值修改为 rem单位值，然后大功告成。