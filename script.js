const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

let selectedSkill = {};
let data = {};
let selectedTab = 0;
let menu = {};

// TODO: faltou ftp no arquivo da matriz

window.onload = async function(e) {

    await fetch('./data/skills.json')
        .then(response => response.json())
        .then(x => Object.assign(data, x)) 

    await renderMenu();

    const params = window.location.search;
    const search = new URLSearchParams(params);

    const skill = search.get('skill');

    // TODO: validate if object was found or first enter the page
    const selected = data[skill]; 

    $('#skill-name').textContent = selected.name;
    $('#skill-weight').textContent = selected.weight;
    $('#skill-weight').classList.add('weight-level-' + selected.weight);
    $('#skill-description').textContent = selected.description;

    changeTab(2);
    renderLevels(selected);
    
}

async function renderMenu() {
    
    await fetch('./data/menu.json')
        .then(response => response.json())
        .then(x => Object.assign(menu, x)) 

    let mainMenu = $('#menu-container');
    let html = '';

    for (const [key1, group] of Object.entries(menu)) {

        html += `<div class="menu-group"> <p>${group.name}</p></div>`;
        
        for (const [key2, subgroup] of Object.entries(group.subgroups)) {
            html += `
                <div id="" class="menu-subgroup">
                    <div class="menu-subgroup-title">
                        <p>${subgroup.name}</p>
                    </div>
                <div id="" class="menu-skill">`;

            for (const [key3, skill] of Object.entries(subgroup.skills)) {
                html += `
                        <div id="" class="menu-skill-item">
                            <a class="skill-item" href="?skill=${skill.key}">${skill.name}</a>
                        </div>`;
            }
            html += '</div></div>';
        }
    }
    mainMenu.insertAdjacentHTML('beforeend', html) 
}

function renderLevels(selected) {

    let html = '';

    for (const [key, level] of Object.entries(selected.levels)) {
        html = ''        
        i = 1;
        level.forEach(l => {
           html += `<div class='skill-level-item skill-level-${i}'>* ${l}</div>`
           i++;
        });
        document.getElementById('level-' + key).insertAdjacentHTML('beforeend', html)
    }

}

function changeTab(tab) {

    const selectedTab = 'tab-'+tab;
    const nodeList = $$('.tab-content');
    const tabList = $$('.tab-nav');

    tabList.forEach( navtab => {
        navtab.classList.remove('tab-selected');
        if (navtab.id == 'nav-tab-' + tab)
            navtab.classList.add('tab-selected');
    });

    nodeList.forEach(node => {
        node.classList.add('tab-hidden');
        if (node.id == selectedTab) 
            node.classList.remove('tab-hidden');
    });

}


