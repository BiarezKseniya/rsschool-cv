function onMenuButtonClick() {
    if (document.getElementById("idUl").style.display) {
        document.getElementById("idUl").style.display="";
    } else {
        document.getElementById("idUl").style.display="grid";
    }
};

function onMainClick() {
    document.getElementById("idUl").style.display="";
};

document.getElementsByTagName("body")[0].onscroll = function() {
    if(document.documentElement.scrollTop>200)
    {
        document.getElementById("idUpButton").style.display="block";
    } else {
        document.getElementById("idUpButton").style.display="";
    }
    
};

function onUpButtonClick() {
    document.documentElement.scrollTop = 0;
}