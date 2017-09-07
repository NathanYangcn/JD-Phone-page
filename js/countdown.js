// 暂时缺少检测开始时间、结束时间的功能;缺少时间记忆功能
function countdown(ct, endLine, startLine) {
    this.init(ct, endLine, startLine);
    this.autoPlay();
}
countdown.prototype = {
    init: function (ct, endLine, startLine) {
        this.clockHours = $('.seckill-hours', ct);
        this.clockMinutes = $('.seckill-minutes', ct);
        this.clockSeconds = $('.seckill-seconds', ct);
        this.endLine = Date.parse(endLine);
        this.startLine = Date.parse(startLine) || Date.now();
        this.restTime = this.endLine - this.startLine;
    },
    autoPlay: function () {
        var self = this;
        this.timer = setInterval(
            function () {
                self.computeTime();
                self.renderTime(); // render()
                self.updateTime(); // update()
            },
            1000
        )
    },
    computeTime: function () {
        if(this.restTime <= 0) {
            clearInterval(this.timer);
            return
        }
        this.clock = this.format(this.restTime);
    },
    renderTime: function () {
        this.clockHours.text(this.clock.hour);
        this.clockMinutes.text(this.clock.minute);
        this.clockSeconds.text(this.clock.second);
    },
    updateTime: function () {
        this.restTime = this.restTime - 1000;
    },
    format: function (msec) {
        var secondTotal = Math.floor(msec/1000);
        var second = secondTotal % 60 + '';
        var minuteTotal = Math.floor(secondTotal/60);
        var minute = minuteTotal % 60 + '';
        var hourTotal = Math.floor(minuteTotal/60);
        var hour = hourTotal + '';
        hour = hour.length<2 ? '0'+hour : hour;
        minute = minute.length<2 ? '0'+minute : minute;
        second = second.length<2 ? '0'+second : second;
        return {
            hour: hour,
            minute: minute,
            second: second
        }
    }
};
function Countdown(ct, endLine, startLine) {
    return new countdown(ct, endLine, startLine)
}


// // 面向对象
// var clockHours = $('.seckill-hours');
// var clockMinutes = $('.seckill-minutes');
// var clockSeconds = $('.seckill-seconds');
// // countdown('2017-09-10', '2017-09-07');
// var autoPlay = setInterval(function () {
//     countdown('2017-09-10', Date.now());
// }, 1000);
// function countdown(endLine, startLine) {
//     endLine = Date.parse(endLine);
//     startLine = Date.parse(startLine) || Date.now();
//     var restTime = endLine - startLine;
//     var clock = format(restTime);
//     if (restTime <= 0) {
//         clearInterval(autoPlay);
//     }
//     renderTime(clock);
// }
// function format (time) {
//     var secondTotal = Math.floor(time/1000);
//     var second = secondTotal % 60 + '';
//     var minuteTotal = Math.floor(secondTotal/60);
//     var minute = minuteTotal % 60 + '';
//     var hourTotal = Math.floor(minuteTotal/60);
//     var hour = hourTotal % 24 + '';
//     hour = hour.length<2 ? '0'+hour : hour;
//     minute = minute.length<2 ? '0'+minute : minute;
//     second = second.length<2 ? '0'+second : second;
//     return {
//         hour: hourTotal,
//         minute: minute,
//         seconde: second
//     }
// }
// function renderTime(clock) {
//     clockHours.text(clock.hour);
//     clockMinutes.text(clock.minute);
//     clockSeconds.text(clock.seconde);
// }