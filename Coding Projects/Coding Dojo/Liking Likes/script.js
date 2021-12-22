var count =(function () {
    var counter = 0;
        return function () {return counter +=1;}
})();

var count2 =(function () {
    var counter = 0;
        return function () {return counter +=1;}
})();

var count3 =(function () {
    var counter = 0;
        return function () {return counter +=1;}
})();

function displaycount() {
    document.getElementById("counter").innerHTML = count() + " like(s)";
}

function displaycount2() {
    document.getElementById("counter-2").innerHTML = count2() + " like(s)";
}

function displaycount3() {
    document.getElementById("counter-3").innerHTML = count3() + " like(s)";
}