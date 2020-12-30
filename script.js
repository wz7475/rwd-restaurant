const generate = () =>{
    const gallery2 = document.getElementById("gallery2");
    for(let i=1; i<5; i++){
        window["col" + i] = document.createElement("div");
        window["col" + i].className = `grid-col grid-col--${i}`;
        gallery2.appendChild(window["col" + i]);
    }

    for(let i=1; i<18; i++){
        window["item" + i] = document.createElement("div");
        window["item" + i].className = `grid-item`;
        window["img" + i] = document.createElement("img");
        window["img" + i].src = `img/${i}.jpg`;
        window["item" + i].appendChild(window["img" + i]);
        gallery2.appendChild(window["item" + i]);
    }
}

window.addEventListener("load", generate);
