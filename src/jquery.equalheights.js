/**!
 * jquery.equalheights v1.0.0
 * https://github.com/helixgroup/jquery-equalheights
 * 
 * Copyright 2017 Helix Group
 * Released under the MIT License.
 * 
 * Date: February 5, 2017
 */

$.fn.equalHeights = function (options) {
    var equalHeightsConstant = 'equalHeights';
    var _this = this;

    var eh = {};
    eh.options = options || {};
    eh.options.extraHeight = eh.options.extraHeight || 0;
    eh.options.useOuterHeight = eh.options.useOuterHeight || false;
    eh.options.processed = eh.options.processed || function () { };
    eh.options.doProcessing = eh.options.doProcessing || function () { return true; }
    eh.options.callOnce = eh.options.callOnce == undefined ? false : !!eh.options.callOnce;
    eh.list = [];
    _this.each(function () { eh.list.push($(this)); });

    eh.process = function () {
        eh.clearHeights();

        var maxHeight = 0;
        if (eh.options.doProcessing()) {
            $(eh.list).each(function () {
                var height = eh.options.useOuterHeight
                           ? $(this).outerHeight()
                           : $(this).height();
                maxHeight = Math.max(height, maxHeight);
            });
            maxHeight += eh.options.extraHeight

            $(eh.list).each(function () {
                $(this).css('height', maxHeight);
            });
        }

        eh.options.processed();
    }

    eh.clearHeights = function () {

        $(eh.list).each(function () {
            $(this).css('height', '');
        });
    }

    eh.remove = function () {
        eh.clearHeights();
        eh.list = [];
    }

    _this.on('resizeHeights', function () {
        eh.process();
    });

    eh.process();
    if (!eh.options.callOnce) {
        $(document).on('ready', function () { eh.process(); });
        $(window).on('load', function () { eh.process(); });
        $(window).on('resize', function () { eh.process(); });
    }
    setTimeout(function () { eh.process(); }, 100);

    return eh;
};
