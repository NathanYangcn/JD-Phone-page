// 暂时缺少功能：锁定可拖动方向X/Y、锁定元素不可拖动边框、判定元素是否可拖动出界
function drag(ele, eleCt) {
    this.init(ele, eleCt);
    this.bind();
}

drag.prototype = {
    init: function (ele, eleCt) {
        this.$ele = $(ele);
        this.mouseOffsetX = 0;
        this.isDrag = false;
        this.eleCtWidth = $(eleCt).width();
        this.eleWidth = this.$ele.width();
    },
    bind: function () {
        var self = this;
        this.$ele.on('touchstart', self.startHandler);
        this.$ele.on('swipeLeft', self.moveHandler);
        this.$ele.on('swipeUp', self.moveHandler);
        this.$ele.on('touchend', self.endHandler);
    },
    startHandler: function (e) {
        e.preventDefault();
        self.isDrag = true;
        var touches = e.touches[0];
        self.mouseOffsetX = touches.clientX - self.$ele.offset().left;
    },
    moveHandler: function (e) {
        e.preventDefault();
        var touches = e.touches[0];
        var oLeft = touches.clientX - self.mouseOffsetX;
        if(oLeft>=0){
            self.isDrag = false;
        }
        if(self.isDrag === true) {
            self.$ele.css('left', oLeft+'px')
        }
    },
    endHandler: function () {
        self.isDrag = false;
        if(self.$ele.offset().left > 0) {
            self.$ele.animate({'left': 0});
        }
        if(self.$ele.offset().left < self.eleCtWidth - self.eleWidth) { // 最小临界值
            self.$ele.animate({'left': self.eleCtWidth - self.eleWidth});
        }
    }
};
function Drag(ele, eleCt) {
    return new drag(ele, eleCt)
}


// 面向过程
// var $textblock = $('#textblock');
// var mouseOffsetX = 0;
// var isDrag = false;
// var ctWidth = $('.seckill-container').width();
// var textblockWidth = $textblock.width();
//
// $textblock.on('touchstart', function (e) {
//     isDrag = true;
//     var touches = e.touches[0];
//     mouseOffsetX = touches.clientX - $textblock.offset().left;
// });
// $textblock.on('touchmove', function (e) {
//     var touches = e.touches[0];
//     var oLeft = touches.clientX - mouseOffsetX;
//
//     if(oLeft>=0){
//         isDrag = false;
//     }
//
//     if(isDrag === true) {
//         $textblock.css('left', oLeft+'px')
//     }
// });
// $textblock.on('touchend', function (e) {
//     isDrag = false;
//     if($textblock.offset().left > 0) {
//         $textblock.animate({'left': 0});
//     }
//     if($textblock.offset().left < ctWidth - textblockWidth) { // 最小临界值
//         $textblock.animate({'left': ctWidth - textblockWidth});
//     }
// });