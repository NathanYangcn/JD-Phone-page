var $downloadApp = $('#header', '#scroll-wrap');
var $header = $('header', '#top-fixed');
var $searchBox = $('#searchBox-wrap', '#scroll-wrap');
var $window = $(window);

$window.on('touchmove', function () {
    var winTop = $window.scrollTop();
    if(winTop >= 50) {
        $downloadApp.css('transform', 'translateY(-1.3334rem)');
        $header.hide();
        $searchBox.css('background', 'rgba(255,0,0,0.9)')
    } else if (winTop === 0) {
        $downloadApp.css('transform', null);
        $header.show();
        $searchBox.css('background', 'transparent')
    }
});