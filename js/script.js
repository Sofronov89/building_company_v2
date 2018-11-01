$(function () {
    $('div.burger').click(function () {
        $('div.mobile_bar_button_div').toggleClass('mobile_bar_button_div_active');
        $('div.mobile_bar_button_div_back').toggleClass('mobile_bar_button_div_back_active');
    })
});
