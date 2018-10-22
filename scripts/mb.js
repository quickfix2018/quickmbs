$(function() {
    $(".video > a, a[href='/builder']").magnificPopup({
        type:'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler mb-iframe">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>'
        }
    })

    var animatedScroll = function(top, completed) {
        $('html, body').animate({ scrollTop: top }, 300, completed)
    }

    var respondToHash = function(hash) {
        if (hash && hash != "#find-dealer") {
            animatedScroll($(hash+"-section").offset().top)
        }

        if (hash === "#find-dealer") {
            animatedScroll(0, function() {
                $("#home-carousel").carousel('pause')
                $("#home-carousel").carousel(2)
            })
        }
    }

    respondToHash(document.location.hash)

    $(".navbar a[href^='/#']").bind("click", function(e) {
        respondToHash(this.hash)
        return false
    });
})
