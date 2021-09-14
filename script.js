let selectedSkill = {};
let data = {};
let selectedTab = 0;


window.onload = async function(e) {

    await fetch('skills.json')
        .then(response => response.json())
        .then(x => Object.assign(data, x)) 

    const params = window.location.search;
    const search = new URLSearchParams(params);

    // selecionar o objeto adequado baseado nos parametros
    // renderizar o menu lateral baseado no arquivo menu.js

    let g = search.get('group')
    let sg = search.get('subgroup')

    let selected = data
    // verificar a tab selecionada

    
}

