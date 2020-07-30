/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Count Up function
    const countUp = (selector) => {
        const countAction = (callback) => {
            var scrollOffset = $(document).scrollTop();
            //console.log("scrollOffset " + scrollOffset);
            //console.log("Counter offset top "+ counter.offset().top + " - window inner height " + window.innerHeight)
            var containerOffset = counter.offset().top - window.innerHeight;
            //console.log(selector + " scroll offset " + scrollOffset + " containerOffset " + containerOffset);
			if (scrollOffset > containerOffset) {
                //console.log("OK! foi no " + selector);
				var from = parseInt(counter.attr("count-from")) || 0;
				var to = parseInt(counter.attr("count-to"));
				if (from >= to) {
					throw console.error(
						"Error in counter " +
							selector +
							", 'from' value must be smaller than 'to' value"
					);
				}
				var duration = parseInt(counter.attr("duration")) || 1500;
				var steps = 0,
					aux = from;
				while (aux < to) {
					steps++;
					var del = Math.ceil((to - aux) / 10);
					del = Math.max(1, del);
					del = Math.min(to - aux, del);
					aux += del;
				}
				var interval = duration / steps;
				var sig = counter.attr("signBeforeNumber") ?? "";
				counter.text(sig + from);
				var intervalID = setInterval(() => {
					from = parseInt(counter.text());
					if (from === to) {
						clearInterval(intervalID);
						return;
					}
					var del = Math.ceil((to - from) / 10);
					del = Math.max(1, del);
					del = Math.min(to - from, del);
					from += del;
					counter.text(sig + from);
                }, interval);
                //console.log(selector + " chamou o callback");
                callback();
			}
        };

        var counter = $(selector);
        if (counter != null) {
            var counted = false;
            countAction(() => counted = true);
            if (counted === false) {
				$(document).bind("scroll", () => {
					//console.log("Scrolling " + selector);
					countAction(() => $(document).unbind("scroll"));
				});
			}
        }
    };

    countUp("#counterAlunes");
    countUp("#counterVoluntaries");
    countUp("#counterTurmas");

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li:not(.dropdown) a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    new WOW().init();
})(jQuery); // End of use strict
