const param = new URLSearchParams(window.location.search);

const art = param.get("art");
const display = document.querySelector("article");
var show
if(art == undefined || art == null){
    show = "imprint_en"
}
else{
     show = art;
}


fetch("/post/" + show + ".md")
    .then((data) => {

        return data.text()
    }).then((res) => {
        if (res.includes("GET")) {
            display.innerHTML = `<h2>Article not found</h2>`
        }
        else {


            const text_md = res.split("\n")

            for (let i = 0; i < text_md.length; i++) {
                destructData(text_md[i]);
            }
        }
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            document.querySelector("article").style.display = "unset"
        }, 2000);




    })


function destructData(input) {
    if (input.includes("#")) {
        var temp = input.split("#");
        if (temp.length == 2) {
            display.innerHTML += `<h1>${temp[1]}</h1>`
        }
        else if (temp.length == 3) {
            display.innerHTML += `<h2>${temp[2]}</h2>`
        }
        else if (temp.length == 4) {
            display.innerHTML += `<h3>${temp[3]}</h3>`
        }
    }
    else {
        display.innerHTML += `<p>${input}</p>`
    }



}