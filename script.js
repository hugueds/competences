let selectedSkill = {};
let data = {};
let selectedTab = 0;
let menu = {};


window.onload = async function(e) {

    await fetch('skills.json')
        .then(response => response.json())
        .then(x => Object.assign(data, x)) 

    await renderMenu();

    const params = window.location.search;
    const search = new URLSearchParams(params);

    // selecionar o objeto adequado baseado nos parametros
    // renderizar o menu lateral baseado no arquivo menu.js

    let g = search.get('group')
    let sg = search.get('subgroup')

    let selected = data
    // verificar a tab selecionada

    
}

async function renderMenu() {
    await fetch('menu.json')
        .then(response => response.json())
        .then(x => Object.assign(menu, x)) 

    let mainMenu = document.querySelector('#menu-container')
    let html = '';

    for (const [key, value] of Object.entries(menu)) {
        // append this to level 1 
        html += `<div class="menu-group"> <p>${value.name}</p></div>`;
        // mainMenu.insertAdjacentHTML('beforeend', group)

        let sub = value;
        
        for (const [key2, value2] of Object.entries(sub.subgroups)) {
            console.log(value2);
            html += `
                <div id="" class="menu-subgroup">
                    <div class="menu-subgroup-title">
                        <p>${value2.name}</p>
                    </div>
                    <div id="" class="menu-skill">`;
            // mainMenu.insertAdjacentHTML('beforeend', sgroup)

            let sub2 = value2;

            for (const [key3, value3] of Object.entries(sub2.skills)) {
                console.log(value3);
                html += `
                        <div id="" class="menu-skill-item">
                            <a href="?skill=${value3}">${value3}</a>
                        </div>`;
                
                // mainMenu.insertAdjacentHTML('beforeend', skill)
            }
            html += '</div></div>';

            // mainMenu.insertAdjacentHTML('beforeend', '</div>')

        }

    }
    mainMenu.insertAdjacentHTML('beforeend', html) 

}