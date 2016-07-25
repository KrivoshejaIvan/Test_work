$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });
    $('.jcarousel-prev').jcarouselControl({ target: '-=1' });
    $('.jcarousel-next').jcarouselControl({ target: '+=1' });
    $("<div class='panel_news'><h2>Our</h2> <span>New Tours</span><p>At Naturetour we are constantly adding to and improving our portfolio of wildlife holidays to provide you with an even greater choice of wildlife viewing experiences.</p> <a href='#'>View new tours...</a> </div>>").appendTo($(".jcarousel"));
    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            page -= 1;
            return '<a class = "number" href="#' + page + '">'+ page +'</a>';
        }
    })

        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        });
    $('.number:first').addClass('active');


    //.jcarouselAutoscroll({
    //	interval: 3000,
    //	target: '+=1',
    //	autostart: true
    //});
    $('.jcarousel').jcarousel({ wrap: 'circular' });

    $("#select,#select1").sb({
        animDuration: 500
    });
    $("select").sb("refresh");
    $("select").sb({
        animDuration: 500
    });
    $("select").sb("refresh");
    $.ionTabs("#tabs_1, #tabs_2, #tabs_3");

    });
