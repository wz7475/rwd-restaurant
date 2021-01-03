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

const generate_gallery3 = () => {
    const gallery3 = document.getElementById("gallery3");

    for (let i = 1; i < 18; i++) {
        window["item" + i] = document.createElement("div");
        window["item" + i].className = "item";
        window["img" + i] = document.createElement("img");
        window["img" + i].src = `img/${i}.jpg`;
        window["item" + i].appendChild(window["img" + i]);
        gallery3.appendChild(window["item" + i]);
    }
}

window.addEventListener("load", generate_gallery1);
window.addEventListener("load", generate_gallery3);
