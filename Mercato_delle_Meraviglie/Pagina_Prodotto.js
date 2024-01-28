$('.rombo').children().addClass('p_prodotto');
$('.btn-rombo').children().addClass('p_prodotto');


$('.seemore').on('click', function() {
    $('p.base_text').clone().removeClass('base_text').addClass('prova').appendTo('.descr_card');
    $('.descr_card').addClass('d-block').removeClass('d-none');

    $('.sfondo').on('click', function(){
        $('p.base_text').addClass('base_text');
        $('.descr_card').removeClass('d-block').addClass('d-none');
    })

});

