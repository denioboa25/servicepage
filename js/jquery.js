(function($) {
    // 
    // 
    // 
    // 
    var slide = function(ele,options) {
        var $ele = $(ele);
        // 
        var setting = {
        		// 
            speed: 1000,
            // 
            interval: 2000,
            
        };
        // 
        $.extend(true, setting, options);
        // 
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        // 
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            //autoPlay();
        });

        move();
        autoPlay();

        // 
        // 
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        // 
        function next() {
            // 
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    //slide()
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        // 
        return this;
    }
    $('h1').hide();
    $('h1').delay('1000');
    $('h1').fadeIn('slow');
    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        if(topo>380){
            $('.flex-items').fadeIn('slow');
        }else{
            $('.flex-items').fadeOut('slow');
        }
    });        
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>100){
            $('.nav').fadeIn('slow');
            $('.nav').css('position','fixed');
        }else{
            $('.nav').fadeOut('slow');
        }
    });
    $('#btn-2').click(function(){
        $('.p-price').text('$120.99')
        $('.p-time').text('Per Yearly');
    });
    $(window).scroll(function(){
        var at = $(window).scrollTop();
        if(at>3420){
            $('.flex-items1').fadeIn('slow');

        }else{
            $('.flex-items1').fadeOut('slow');
        }
    });
})(jQuery);
