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

// https://champion.gg/champion/Ahri/Middle?

var content = document.getElementById('content');
function run(dataEachChampion) {
    var name = document.getElementById('name');
    var subName = document.getElementById('sub-name');
    var avatar = document.getElementById('avatar');
    var right = document.getElementById('right');
    var role = document.getElementById('role');
    var quote = document.getElementById('quote');
    var story = document.getElementById('story');
    var howtoplay = document.getElementById('howtoplay');
    document.getElementById('body').style.backgroundImage = `url(${dataEachChampion.champion.image.uri})`;
    name.innerHTML = `${dataEachChampion.champion.name.toUpperCase()}`;
    subName.innerHTML = `${dataEachChampion.champion.title}`
    avatar.innerHTML = `<img class="image" src="${dataEachChampion.champion.image.uri}" alt="" srcset="">`
    story.innerHTML = `${dataEachChampion.champion.biography.full}`;
    role.innerHTML = `Vị Trí: ${dataEachChampion.champion.roles[0].name}`;
    quote.innerHTML = `<blockquote>${dataEachChampion.champion.biography.quote}</blockquote>`;
    howtoplay.innerHTML = `<a target="_blank" href="https://champion.gg/champion/${dataEachChampion.champion.name}"><button> How to play </button></a>`
    console.log(dataEachChampion);

}
