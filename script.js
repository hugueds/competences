let selectedSkill = {};
let data = {};
let selectedTab = 0;
let menu = {};

// TODO: change the tab color when selected
// TODO: remove URL style
// TODO: faltou ftp no arquivo da matriz

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
    console.log(selected);
    selected.levels.forEach(element => {
        
    });

}

function changeTab(tab) {

    const selectedTab = 'tab-'+tab;
    const nodeList = document.querySelectorAll('.tab-content');

    nodeList.forEach(node => {
        node.classList.add('tab-hidden');
        if (node.id == selectedTab) {
            node.classList.remove('tab-hidden');
        }
    });
}


