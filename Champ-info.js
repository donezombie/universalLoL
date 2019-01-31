nameChampion = localStorage.getItem("nameChampion");
console.log(nameChampion);
if ( nameChampion === "Ngộ Không") {
    nameChampion = 'monkeyking';
}
if ( nameChampion === 'Nunu &amp; Willump') {
    nameChampion = 'nunu';
}
fetch(`https://universe-meeps.leagueoflegends.com/v1/vn_vn/champions/${nameChampion.replace(".",'').replace("'",'').replace(' ','').toLowerCase()}/index.json?fbclid=IwAR38a_e5munkTWDULbPotyAi7Lg8-ip6MrEySh1wRQA10UZiXph-FYwslro`).then(data => {
    data.json().then(content => {
        run(content);
    })
})

var content = document.getElementById('content');
function run(dataEachChampion) {
    var name = document.getElementById('name');
    var subName = document.getElementById('sub-name');
    var avatar = document.getElementById('avatar');
    document.getElementById('body').style.backgroundImage = `url(${dataEachChampion.champion.image.uri})`;
    name.innerHTML = `${dataEachChampion.champion.name.toUpperCase()}`;
    subName.innerHTML = `${dataEachChampion.champion.title}`
    avatar.innerHTML = `<img class="image" src="${dataEachChampion.champion.image.uri}" alt="" srcset="">`
    console.log(dataEachChampion);

}
