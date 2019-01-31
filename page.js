fetch("https://universe-meeps.leagueoflegends.com/v1/vn_vn/search/index.json?fbclid=IwAR0PQI8wMXoqBpVCo4LvcDHo_cvTJHULMVMgwn53EGkcETCVYktR8Gy2Lc0").then(data => {
    data.json().then(content => {
        run(content);
    })
})


function run(content){
    var listChampion = content.champions;
    for (var i = 0; i < listChampion.length; i ++) {
        var HTML = `
            <a href="./Champ-info.html" target="_blank">
            <div class="eachChampion">
                <p class="nameChampion">${listChampion[i].name}</p>
                <img class="imgAvatar" src=${listChampion[i].image.uri} />
            </div>
            </a>
        `
        document.getElementById("content").insertAdjacentHTML("beforeend", HTML)
    }
    var eachChampionClasses = document.getElementsByClassName('eachChampion');
    for (var j = 0; j < eachChampionClasses.length; j++) {
        eachChampionClasses[j].addEventListener('click', function(event) {
            const nameChampion = event.path[1].childNodes[1].innerHTML;
            if (nameChampion) {
                localStorage.setItem("nameChampion", nameChampion);
            }
        })
    }
}