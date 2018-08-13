(function ($) {

    $.fn.Closable = function (userOptions) {

        var options = $.extend({

            animation: "slideUp" //fadeOut , SlideUp , Hide

        }, userOptions)

        this.each(function () {

            var elm = $(this);
            var pos = elm.css("position");

            if (!pos || pos != "relative") {
                elm.css({ position: "relative" });
            }

            var closeBtn = $("<span>").attr("class", "closeBtn");

            closeBtn.click(function () {
                switch (options.animation) {

                    case "hide":
                        $(this).parent().hide();
                        break;

                    case "slideUp":
                        $(this).parent().slideUp();
                        break;

                    case "fadeOut":
                        $(this).parent().fadeOut();
                        break;
                    default:
                        $(this).parent().slideUp();

                }


                $(this).parent().fadeOut(1000);

            });

            elm.append(closeBtn);

        });

    }

})(jQuery)






//(function ($) {

//    $.fn.slClosable = function (userOptions) {
//        var options = $.extend({
//            animation: "fadeOut", // hide,fadeOut,sildeUp
//            closeIconUrl: ""
//        }, userOptions)
//        this.each(function () {
//            var elm = $(this);
//            var pos = elm.css("position");
//            if (!pos || pos == "static") {
//                elm.css({ position: "relative" });
//            }

//        })
//    }
//})(jQuery)















