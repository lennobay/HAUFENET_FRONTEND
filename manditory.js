function menuopen() {
    document.querySelector(".content").style.display = "none";
    document.querySelector("#menubotton-open").style.display = "none";
    document.querySelector("#menubotton-close").style.display = "unset"

    const button = document.getElementById("menubutton_open")
    document.querySelector("#menu").innerHTML = `
     <p onclick='window.location = "/"' >Projects</p>
    `



}
function menuclose() {
    document.querySelector(".content").style.display = "unset";
    document.querySelector("#menu").innerHTML = ``;
        document.querySelector("#menubotton-open").style.display = "unset";
    document.querySelector("#menubotton-close").style.display = "none   "

}


document.querySelector(".header-up").innerHTML = ` <header>
            <div class="header-sub">
                <h2  onclick='window.location = "/"' >haufenet.com</h2>
            </div>
            <div onclick='window.location = "/"' id="header-options" class="header-sub-options">
               

            </div>
            <div  class="header-sub">
                <h3 onclick='window.location = "https://id.haufenet.com"'>Portal</h3>
                <div id="menubutton-up"> <img src="/icons/menu.svg" id="menubotton-open" onclick="menuopen()"> <img id="menubotton-close" onclick="menuclose()" src="/icons/x.svg"></div>
            </div>
        </header>`

document.querySelector(".footer-up").innerHTML = `  <footer>


                <a href="/imprint">Imprint</a>
                <p>|</p>
                <a href="/imprint">Privacy</a>
                <p>|</p>
                <a href="https://github.com/lennobay">Created by lennobay</a>
            </footer>`