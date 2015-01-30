
   
    /* Disable Right click menu */
    $("#game-box")[0].oncontextmenu = function() {return false;}  

    /* Start button menu */
    $("#game-box").hide();
    $("#start-game").click(function(){
        $("#game-box").show();
        $("#start-window").fadeOut(200);
    });

    var sniper = $("#sniper");
    var rocket = $('.rocket')
    var explosion = $('.explosion')

    explosion.hide();
    rocket.hide();


$("#game-box").mousedown(function(e) {

    /* Sniper Moving */
       
    if(e.which == 3)  {  

        sniper.animate({position:"absolute", top: e.pageY, left: e.pageX}, 700);
        sniper.animateSprite('restart'); 
         
    }

    
    /* Sniper Shooting */

    if(e.which == 1)  {
        explosion.hide();

        /* Count clicks */
        var clickCount = (rocket.data("click-count") || 0) + 1;

        rocket.data("click-count", clickCount);
            
        if (clickCount == 2) {
                clickCount != 0;
            }
        if (clickCount == 1) {
             rocket.animateSprite('restart'); 
                rocket.stop(true, true).show().animate({
                    top: e.pageY,
                    left: e.pageX
                }, 400,function(){
                        rocket.hide();
                        explosion.animateSprite('restart');
                        explosion.animateSprite('fps',60);
                        explosion.stop(true, true).show().css({
                            top: e.pageY,
                            left: e.pageX
                        });
                    }
                 )
            } else {
                rocket.animateSprite('restart')
                    var sniperPos = sniper.position();
                    rocket.animate({left:sniperPos.left, top:sniperPos.top}, 1);               
                rocket.stop(true, true).show().animate({
                    top: e.pageY,
                    left: e.pageX
                    }, 400,function(){
                        rocket.hide();
                        explosion.animateSprite('restart');
                        explosion.animateSprite('fps',60);
                        explosion.stop(true, true).show().css({
                            top: e.pageY,
                            left: e.pageX
                        });                 
                    }
                )
            }
        }  
    
   /* Sniper Turning */
    var sniperCenter=[sniper.offset().left+sniper.width()/2, sniper.offset().top+sniper.height()/2];

    $("#game-box").mousemove(function(e){    
        
        var angle = Math.atan2(e.pageX- sniperCenter[0],- (e.pageY- sniperCenter[1]) )*(150/Math.PI);     
        
        sniper.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
        sniper.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
        sniper.css({ 'transform': 'rotate(' + angle + 'deg)'});
    });

    /* Rocket Turning */
    var rocketCenter=[rocket.offset().left+rocket.width()/2, rocket.offset().top+rocket.height()/3];

    $("#game-box").mousemove(function(e){    
            
        var angle = Math.atan2(e.pageX- rocketCenter[0],- (e.pageY- rocketCenter[1]) )*(180/Math.PI);     
        
        rocket.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
        rocket.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
        rocket.css({ 'transform': 'rotate(' + angle + 'deg)'});
    });       

});   
    
    /* Animations */

        /* Sniper */
    sniper.animateSprite({
            fps: 12,
            animations: {
                walk: [1, 2, 3, 4, 5, 6, 7, 8]
            },
            loop: false,
    });

        /* Rocket */
    rocket.animateSprite({
            fps: 12,
            animations: {
                exl: [1, 2, 3, 4]
            },
            loop: false,
    });  

        /* Explosion */
    explosion.animateSprite({
            fps: 12,
            animations: {
                exp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
            },
            loop: false,
    });  

   