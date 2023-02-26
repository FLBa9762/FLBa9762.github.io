 function page_scroll(event){
    let container = document.querySelector(".box");
    var y = event.deltaY;
    if (y>0) {
        container.scrollHeight;
        window.scrollTo(0);
    }
    // else if (y>0) {
    //   container.scrollTo({
    // }
}


function cal_height(){
    let box1 = document.querySelector("#box1");
    var css_height = window.getComputedStyle(box1, null).getPropertyValue("background-color")
    // console.log(box1);
    // console.log(css_height);
    return css_height;
}

window.onload = function() {

}