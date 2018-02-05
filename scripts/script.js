function setCurrentYearToFooter() {
    var now = new Date();
    document.getElementsByClassName("year")[0].innerHTML = now.getFullYear();
};

function openView(view) {
    $('main').load("views/" + view + ".html");
}

setCurrentYearToFooter();
