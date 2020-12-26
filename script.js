const generate = () =>{
    let gallery1= "";
    for (let i =0; i<17; i++){
        let pic_name = `${i + 1}.jpg`;
        if (i<10-1)
            pic_name = "0" + pic_name;
        pic_name = "img/" + pic_name;
        if (((i - 1) % 4 == 0 || i == 0) && i != 1){
            gallery1 += '<div class="column">\n';
        }
        /* gallery1 += `<div class="pic"><img src="${pic_name}" alt="taco"></div>\n`; */ 
        gallery1 += `<img src="${pic_name}" alt="taco">\n`;
        if (i % 4 == 0 && i != 0){
            gallery1 += '</div>\n';
        }
    }
    document.getElementById("gallery1").innerHTML = gallery1;
}

window.addEventListener("load", generate);
