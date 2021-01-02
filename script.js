const generate = () => {
    const gallery2 = document.getElementById("gallery2");
    for (let i = 1; i < 5; i++) {
        window["col" + i] = document.createElement("div");
        window["col" + i].className = "column";
        gallery2.appendChild(window["col" + i]);
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



window.addEventListener("load", generate);
