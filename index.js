


fetch("/index.json").then((data) => { return data.json() })
    .then((res) => {
        console.log(res)
        for (let i = 0; i < res.length; i++) {
            var title = res[i].title;
            var description = res[i].description;
            var image = res[i].image;
            var link = "/" + res[i].type + "/?art=" + res[i].link;

            document.querySelector(".start-page").innerHTML = `<div onclick = "window.location.href='${link}'">
            <h1>${title}</h1>
            <p>${description}</p>
            </div>`
        }
        document.getElementById("loading").style.display = "none";
        document.getElementById("start-page").style.display = "unset";

    })