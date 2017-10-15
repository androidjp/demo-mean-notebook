
jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var username = $(this).find('input[name=name]').val();
        var password = $(this).find('input[name=pwd]').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('input[name=name]').focus();
            });
            return false;
        }
        if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('input[name=pwd]').focus();
            });
            return false;
        }
    });

    $('.page-container form .name, .page-container form .pwd').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});
