const generate_galleries = () => {
    const gallery1 = document.getElementById("gallery1");
    const gallery2 = document.getElementById("gallery2");
    const gallery3 = document.getElementById("gallery3").querySelector(".gallery");
    for (let i = 1; i < 5; i++) {
        window["col" + i] = document.createElement("div");
        window["col" + i].className = "column";
        gallery1.appendChild(window["col" + i]);
    }

    for (let i = 1; i < 18; i++) {
        window["item" + i] = document.createElement("div");
        window["item" + i].className = "item";
        window["img" + i] = document.createElement("img");
        window["img" + i].src = `img/${i}.jpg`;
        window["item" + i].appendChild(window["img" + i]);
        const cln1 = window["item" + i].cloneNode(true);
        const cln2 = window["item" + i].cloneNode(true);
        gallery2.appendChild(cln1);
        gallery3.appendChild(cln2);
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

const change_class = (obj) => {
    //deactivate previous one
    document.querySelector(".chosen").classList.remove("chosen");
    obj.classList.add("chosen");
    obj.classList.remove("onhover");
    const num_of_col = obj.textContent;
    const gallery = document.getElementById("gallery3").querySelector(".gallery");
    gallery.setAttribute("style", `column-count:${num_of_col}`);
}

const mouseover = (obj) => {
    if (!(obj.classList.contains("chosen"))) {
        obj.classList.add("onhover");
    }
}

const mouseout = (obj) =>{
    obj.classList.remove("onhover");
}

window.addEventListener("load", generate_galleries);

const menu = document.querySelectorAll(".option");
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() { change_class(this); });
    menu[i].addEventListener("mouseover", function() { mouseover(this); });
    menu[i].addEventListener("mouseout", function() { mouseout(this); });
}