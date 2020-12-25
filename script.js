const generate = () =>{
    let gallery1= "";
    for (let i =1; i<=8; i++){
        let pic_name = i + ".jpg";
        if (i<10)
            pic_name = "0" + pic_name;
        pic_name = "img/" + pic_name;
        gallery1 += `<div class="pic"><img src="${pic_name}" alt="taco"></div>\n`; 
    }
    document.getElementById("gallery1").innerHTML = gallery1;
}

window.addEventListener("load", generate);
