window.onload = function() {
    let wINdo = ["Blossom", "fern", "moss", "petal", "root", "meadow", "evergreen", "vine", "cedar", "pollen", "stem", "seedling", "thistle", "orchid", "bud", "canopy", "sprout", "cypress", "bamboo", "lotus", "wildflower", "ivy", "dandelion", "grove", "leaflet", "herb", "saffron", "sprig", "juniper", "blossom"];
    
    document.getElementById("reloj").onclick = function() {
        document.getElementById("llanto").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
    }

    document.getElementById("star").onmouseover = function() {
        document.getElementById("muerte").style.color = "blue";

    }

    document.getElementById("muerte").style.backgroundImage = function() {
        document.getElementById("muerte").style.color = "red";
    }
};