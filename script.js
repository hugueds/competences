let selectedSkill = {};
let data = {};
let selectedTab = 0;
let menu = {};

// TODO: change the tab color when selected
// TODO: remove URL style
// TODO: faltou ftp no arquivo da matriz
// TODO: implement a search field
// TODO: hover hand over nav div

window.onload = async function(e) {

    await fetch('skills.json')
        .then(response => response.json())
        .then(x => Object.assign(data, x)) 

    await renderMenu();

    const params = window.location.search;
    const search = new URLSearchParams(params);

    const skill = search.get('skill');

    const selected = data[skill]; // TODO: validate if object was found or not

    document.getElementById('skill-name').textContent = selected.name;
    document.getElementById('skill-weight').textContent = selected.weight;
    document.getElementById('skill-weight').classList.add('weight-level-' + selected.weight);
    // TODO: change the color based on the weight
    document.getElementById('skill-description').textContent = selected.description;

    changeTab(2);
    renderLevels(selected);

    // para cada usedfor criar uma linha
    
}

async function renderMenu() {
    
    await fetch('menu.json')
        .then(response => response.json())
        .then(x => Object.assign(menu, x)) 

    let mainMenu = document.querySelector('#menu-container')
    let html = '';

    for (const [key, group] of Object.entries(menu)) {

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
        level.forEach(l => {
           html += `<div class='skill-level-item'>* ${l}</div>`
        });
        document.getElementById('level-' + key).insertAdjacentHTML('beforeend', html)
    }

}

function changeTab(tab) {

    const selectedTab = 'tab-'+tab;
    const nodeList = document.querySelectorAll('.tab-content');
    const tabList = document.querySelectorAll('.tab-nav');

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


