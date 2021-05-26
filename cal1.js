
var dis = $(".display");

function num(i) {

    $(".display").val($(".display").val() + i);

}
function back() {
    dis.val(dis.val().substring(0, dis.val().length - 1));


}
function equal() {
    dis.val(eval(dis.val()));


}
function can(){
   dis.val("");

}