$('#mappa img').on("mouseenter", function(){
    $('#mappa').addClass('d-none');
    $('#mappa_2').removeClass('d-none').addClass('d-block');
    $('#blur').addClass('blur');
});

$('#bg_home2').on('click', function() {
    $('#mappa').removeClass('d-none');
    $('#mappa_2').addClass('d-none').removeClass('d-block');
    $('#blur').removeClass('blur');
});