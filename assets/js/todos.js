/**
 * Created by mk_1 on 5/3/17.
 */
//!!!!второй аргумент говорит что слушать его в контексте первого элемента, к которому привязан слушатель
//это важно помнить при создании новых элементов. Click - к готовым. on - если будут новые и второй арг. Слушать элементы которые с начала страницы.
$("ul").on("click", "li", function () {
    $(this).toggleClass("clicked");
});

$("ul").on("click", "i", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function () {
        this.remove();
    });
});

$("input[type='text']").keypress(function (event) {
    if(event.which ===13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").prepend("<li><i class='fa fa-trash-o'></i>" + todoText + "</li>");

    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});