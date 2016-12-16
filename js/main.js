window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("gototop").className = "";
        document.getElementById("header").className = "shrink";
        document.getElementById("headerholder").className = "active";
    } else {
        document.getElementById("gototop").className = "hide-it";
        document.getElementById("header").className = "";
        document.getElementById("headerholder").className = "";
    }
}

function goToTop(){
    window.scrollTo(0, 0);
}