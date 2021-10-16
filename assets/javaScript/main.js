function start() {
    const span = document.getElementById('user_name');

    span.innerHTML = "Mikolaj"

    var arr = document.getElementsByClassName("notification");
    for (var i = 0; i < arr.length; i++) {
    arr[i].innerHTML = "!";
}
}