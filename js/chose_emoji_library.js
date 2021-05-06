function chose_emoji(DivId) {
    let BigDad = $(DivId), emojiDiv = $(DivId+" .emoji_section"),firstTouch = false;

    emojiDiv.each(function() {
        $(".emoji_active", this).addClass('active');
    });

    $(DivId+' .emoji_section .emoji').on('click',function() {
        console.log("i'm clicked");
        $(DivId+" .emoji_section .emoji").removeClass('active');
        $(DivId+" .emoji_section .emoji_disactive").addClass('active');
        $(this).parent().find('.emoji_input').prop("checked", true);
        if($(this).hasClass('emoji_active')) {
            if(firstTouch) {
                $(this).parent().find('.emoji_input').prop("checked", false);
                $(this).removeClass('active');
                $(DivId+" .emoji_section .emoji_disactive").removeClass('active');
                $(DivId+" .emoji_section .emoji_active").addClass('active');
                firstTouch = false;
            } else {
                firstTouch = true;
                $(this).parent().find('.emoji_disactive').removeClass('active');
                $(this).addClass('active');
            }
        } else {
            $(this).parent().find('.emoji_active').addClass('active');
            $(this).removeClass('active');
        }
        

    });
}