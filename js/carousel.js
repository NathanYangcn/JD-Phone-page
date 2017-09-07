// 面向对象方法
function carsouel(ct, dur, auto) {
    this.init(ct, dur, auto);
    this.bind();
    this.autoPlay();
}
carsouel.prototype = {
    init: function (ct, dur, auto) {
        this.carsouel = $('.carsouel', ct);
        this.$itemCt = $('.carsouel .carsouel-itemCt', ct);
        this.$item = $('.carsouel .carsouel-item', ct);
        this.itemWidth = this.$item.width();
        this.$bullet = $('.carsouel .carsouel-btn', ct);
        this.curIndex = 0;
        this.duration = dur || 3;
        this.auto = auto || 'true'; // 设置 true false 初始值的反复
    },
    bind: function () {
        var self = this;
        this.carsouel.on('swipeLeft', function () {
            clearInterval(self.timer);
            self.playNext();
            self.autoPlay();
        });
        this.carsouel.on('swipeRight', function () {
            clearInterval(self.timer);
            self.playPre();
            self.autoPlay();
        });
        this.playNext = function () {
            self.setIndex('swipeLeft'); // 下一张 左划
            self.play();
        };
        this.playPre = function () {
            self.setIndex('swipeRight'); // 上一张 右划
            self.play();
        };
    },
    play: function() {
        this.$itemCt.css('left', -this.curIndex * this.itemWidth + 'px');
        this.setBullet();
    },
    setIndex: function (type) {
        if (type === 'swipeLeft'){
            if (this.curIndex === this.$item.length-1) {
                this.curIndex = 0;
            } else {
                this.curIndex++;
            }
        }
        if (type === 'swipeRight'){
            if (this.curIndex === 0) {
                this.curIndex = this.$item.length-1;
            } else {
                this.curIndex--;
            }
        }
    },
    setBullet: function () {
        this.$bullet.removeClass('carsouel-curbtn');
        this.$bullet.eq(this.curIndex).addClass('carsouel-curbtn');
    },
    autoPlay: function () {
        var self = this;
        if (this.auto === 'true') {
            this.timer = setInterval(function () {
                self.playNext();
            }, this.duration * 1000)
        }
    }
};
function Carsouel (ct, dur, auto) {
    return new carsouel(ct, dur, auto);
}

// // 面向过程方法
// var carsouel = $('.carsouel');
// var $itemCt = $('.carsouel .carsouel-itemCt');
// var $item = $('.carsouel .carsouel-item');
// var itemWidth = $item.width();
// var $bullet = $('.carsouel .carsouel-btn');
//
// var curIndex = 0;
// var duration = 3;
//
// carsouel.on('swipeLeft', function (e) {
//     playNext();
// });
// carsouel.on('swipeRight', function (e) {
//     playPre();
// });
//
// function playNext() {
//     setIndex('swipeLeft'); // 下一张 左划
//     play();
// }
// function playPre() {
//     setIndex('swipeRight'); // 上一张 右划
//     play();
// }
// function play() {
//     $itemCt.css('left', -curIndex*itemWidth+'px');
//     setBullet();
// }
// function setIndex(type) {
//     if (type === 'swipeLeft'){
//         if (curIndex === $item.length-1) {
//             curIndex = 0;
//         } else {
//             curIndex++;
//         }
//     }
//     if (type === 'swipeRight'){
//         if (curIndex === 0) {
//             curIndex = $item.length-1;
//         } else {
//             curIndex--;
//         }
//     }
// }
// function setBullet() {
//     $bullet.removeClass('carsouel-curbtn');
//     $bullet.eq(curIndex).addClass('carsouel-curbtn');
// }
// function autoPlay() {
//     setInterval(function () {
//         playNext();
//     }, duration * 1000)
// }
// autoPlay();