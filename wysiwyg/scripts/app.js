// Text Rotator

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "pulse",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 4000,
    complete: function () {
        // Called after the entrance animation is executed.
        console.log("Rotated", this)
    }
});

var el1 = $('#big-outline'),
    el2 = $('#left-element'),
    el3 = $('.right-element'),
    el4 = $('.atomic-design-element'),
    el4 = $('.user-flow-element'),
    el5 = $('.message-box');
    el6 = $('.color-theory-element');
    el7 = $('.dashed-hearth-svg');

var layer = $('#scene_one');

layer.mousemove(function (e) {
    var svalueX = (e.pageX * -1 / 60);
    var svalueY = (e.pageY * -1 / 60);

    var ivalueX = (e.pageX * -1 / 30);
    var ivalueY = (e.pageY * -1 / 30);

    var rightvalueX = (e.pageX * -1 / 25);
    var rightvalueY = (e.pageY * -1 / 25);

    var cvalueX = (e.pageX * -1 / 40);
    var cvalueY = (e.pageY * -1 / 60);

    var gvalueX = (e.pageY * -1 / 70);
    var gvalueY = (e.pageY * -1 / 70);
    console.log('ok');
    el1.css('transform', 'translate3d(' + ivalueX + 'px,' + ivalueY + 'px, 0)');
    el2.css('transform', 'translate3d(' + cvalueX + 'px,' + cvalueY + 'px, 0)');
    el3.css('transform', 'translate3d(' + rightvalueX + 'px,' + rightvalueY + 'px, 0)');
    el4.css('transform', 'translate3d(' + gvalueX + 'px,' + gvalueY + 'px, 0)');
    el5.css('transform', 'translate3d(' + gvalueX + 'px,' + gvalueY + 'px, 0)');
    el6.css('transform', 'translate3d(' + gvalueX + 'px,' + gvalueY + 'px, 0)');
    el7.css('transform', 'translate3d(' + gvalueX + 'px,' + gvalueY + 'px, 0)');

});