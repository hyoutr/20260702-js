$(function() {
	// 実行用スクリプトを記述
	$("#bg").hide();

    $("#click").click(function(){
        $("#bg").fadeIn(300);
    });

    $("#ok").click(function(){
        $("#bg").fadeOut(300);
    });
});