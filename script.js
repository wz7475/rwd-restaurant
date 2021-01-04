const generate_gallery1 = () => {
    const gallery1 = document.getElementById("gallery1");
    for (let i = 1; i < 5; i++) {
        window["col" + i] = document.createElement("div");
        window["col" + i].className = "column";
        gallery1.appendChild(window["col" + i]);
    }

    for (let i = 1; i < 18; i++) {
        window["item" + i] = document.createElement("div");
        window["item" + i].className = `grid-item`;
        window["img" + i] = document.createElement("img");
        window["img" + i].src = `img/${i}.jpg`;
        window["item" + i].appendChild(window["img" + i]);
        if (i < 6)
            window["col1"].appendChild(window["item" + i]);
        else if (i < 10)
            window["col2"].appendChild(window["item" + i]);
        else if (i < 14)
            window["col3"].appendChild(window["item" + i]);
        else
            window["col4"].appendChild(window["item" + i]);
    }
}

const generate_gallery2 = () => {
    const gallery2 = document.getElementById("gallery2");

    for (let i = 1; i < 18; i++) {
        window["item" + i] = document.createElement("div");
        window["item" + i].className = "item";
        window["img" + i] = document.createElement("img");
        window["img" + i].src = `img/${i}.jpg`;
        window["item" + i].appendChild(window["img" + i]);
        gallery2.appendChild(window["item" + i]);
    }
}

const change_class = (obj) => {
    //deactivate previous one
    document.querySelector(".chosen").classList.remove("chosen");
    obj.classList.add("chosen");
    obj.classList.remove("onhover");
}

const mouseover = (obj) => {
    if (!(obj.classList.contains("chosen"))) {
        obj.classList.add("onhover");
    }
}

const mouseout = (obj) =>{
    obj.classList.remove("onhover");
}

//window.addEventListener("load", generate_gallery1);
//window.addEventListener("load", generate_gallery2);

const menu = document.querySelectorAll(".option");
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() { change_class(this); });
    menu[i].addEventListener("mouseover", function() { mouseover(this); });
    menu[i].addEventListener("mouseout", function() { mouseout(this); });
}