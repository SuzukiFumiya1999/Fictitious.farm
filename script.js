$(function() {
    //モーダルをクリックしたときの処理
    $('#open-modal').click(function() {
        $('#farm-modal').fadeIn();
        $('#close-modal').css("display", "block");
        $('#open-modal').css("visibility", "hidden");
    });

    //モーダルを消す処理
    $('#close-modal').click(function() {
        $('#farm-modal').fadeOut();
        $('#open-modal').css("visibility", "visible");
        $('#close-modal').css("display", "none");
    });
});