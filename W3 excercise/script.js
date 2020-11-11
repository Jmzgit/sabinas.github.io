var page = require('webpage').create();
page.viewportSize = { width: 1920, height: 1500 };
page.open("<span class="wtb-ew-v1" style="width: 369px; display:inline-block"><script src="https://www.worldtimebuddy.com/clock_widget.js?h=0&bc=8BA1BB&cn=&wt=c2"></script><i><a href="https://www.worldtimebuddy.com/">World Clock</a></i><noscript><a href="https://www.worldtimebuddy.com/">World Clock</a></noscript><script>window[wtb_event_widgets.pop()].init()</script></span>");
page.onLoadFinished = function(status) {
    page.evaluate(function() {
        document.body.style.background = 'transparent';
    });

    page.render('render.png');
    phantom.exit();
};
