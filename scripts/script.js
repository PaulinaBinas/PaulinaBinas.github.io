function setCurrentYearToFooter() {
    var now = new Date();
    document.getElementsByClassName("year")[0].innerHTML = now.getFullYear();
};

setCurrentYearToFooter();