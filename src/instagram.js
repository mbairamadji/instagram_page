var $commentBox = $('#comment-box');
var $commentBox1 = $('#comment-box1');
var $commentBox2 = $('#comment-box2');
var $commentBox3 = $('#comment-box3');
var $commentBox4 = $('#comment-box4');
var $commentBox5 = $('#comment-box5');

$commentBox.lightGallery({
    appendSubHtmlTo: '.lg-item',
    addClass: 'fb-comments',
    mode: 'lg-fade',
    download: false,
    enableDrag: false,
    enableSwipe: false
});
 $commentBox1.lightGallery({
    appendSubHtmlTo: '.lg-item',
    addClass: 'fb-comments',
    mode: 'lg-fade',
    download: false,
    enableDrag: false,
    enableSwipe: false
});
 $commentBox2.lightGallery({
    appendSubHtmlTo: '.lg-item',
    addClass: 'fb-comments',
    mode: 'lg-fade',
    download: false,
    enableDrag: false,
    enableSwipe: false
});
 $commentBox3.lightGallery({
    appendSubHtmlTo: '.lg-item',
    addClass: 'fb-comments',
    mode: 'lg-fade',
    download: false,
    enableDrag: false,
    enableSwipe: false
});
 $commentBox4.lightGallery({
    appendSubHtmlTo: '.lg-item',
    addClass: 'fb-comments',
    mode: 'lg-fade',
    download: false,
    enableDrag: false,
    enableSwipe: false
});
 $commentBox5.lightGallery({
    appendSubHtmlTo: '.lg-item',
    addClass: 'fb-comments',
    mode: 'lg-fade',
    download: false,
    enableDrag: false,
    enableSwipe: false
});
$commentBox.on('onAfterSlide.lg', function(event, prevIndex, index) {
    if (!$('.lg-outer .lg-item').eq(index).attr('data-fb')) {
        try {
            $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
            FB.XFBML.parse();
        } catch (err) {
            $(window).on('fbAsyncInit', function() {
                $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
                FB.XFBML.parse();
            });
        }
    }
});
$commentBox1.on('onAfterSlide.lg', function(event, prevIndex, index) {
    if (!$('.lg-outer .lg-item').eq(index).attr('data-fb')) {
        try {
            $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
            FB.XFBML.parse();
        } catch (err) {
            $(window).on('fbAsyncInit', function() {
                $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
                FB.XFBML.parse();
            });
        }
    }
});
$commentBox2.on('onAfterSlide.lg', function(event, prevIndex, index) {
    if (!$('.lg-outer .lg-item').eq(index).attr('data-fb')) {
        try {
            $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
            FB.XFBML.parse();
        } catch (err) {
            $(window).on('fbAsyncInit', function() {
                $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
                FB.XFBML.parse();
            });
        }
    }
});
$commentBox3.on('onAfterSlide.lg', function(event, prevIndex, index) {
    if (!$('.lg-outer .lg-item').eq(index).attr('data-fb')) {
        try {
            $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
            FB.XFBML.parse();
        } catch (err) {
            $(window).on('fbAsyncInit', function() {
                $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
                FB.XFBML.parse();
            });
        }
    }
});
$commentBox4.on('onAfterSlide.lg', function(event, prevIndex, index) {
    if (!$('.lg-outer .lg-item').eq(index).attr('data-fb')) {
        try {
            $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
            FB.XFBML.parse();
        } catch (err) {
            $(window).on('fbAsyncInit', function() {
                $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
                FB.XFBML.parse();
            });
        }
    }
});
$commentBox5.on('onAfterSlide.lg', function(event, prevIndex, index) {
    if (!$('.lg-outer .lg-item').eq(index).attr('data-fb')) {
        try {
            $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
            FB.XFBML.parse();
        } catch (err) {
            $(window).on('fbAsyncInit', function() {
                $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
                FB.XFBML.parse();
            });
        }
    }
});