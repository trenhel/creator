const characterName = document.getElementById(`character-name`);
const race = document.getElementById(`race`);
const background = document.getElementById(`background`);
const characterClass = document.getElementById(`main-class-name`);
const level = document.getElementById(`main-class-level`);
const multiClass = document.getElementById(`multi-class`);
const secondClass = document.getElementById(`multi-class-name`);
const secondLevel = document.getElementById(`multi-class-level`);
const initiative = document.getElementById(`initiative-number`);
const armorClass = document.getElementById(`ac-number`);
const currentHP = document.getElementById(`hp-current-number`);
const maxHP = document.getElementById(`hp-max-number`);
const proficiency = document.getElementById(`proficiency`);
const speed = document.getElementById(`speed`);
const passivePerception = document.getElementById(`passive-perception`);
const currentHD = document.getElementById(`hit-dice-current`);
const maxHD = document.getElementById(`hit-dice-max`)
const hitDice = document.getElementById(`hit-dice-dice-number`);
// place inspiration stuff here, make inspiration a radio or checkbox
const strStat = document.getElementById(`strength`);
const strMod = document.getElementById(`strength-mod`);
const strSave = document.getElementById(`strength-save`);
const dexStat = document.getElementById(`dexterity`);
const dexMod = document.getElementById(`dexterity-mod`);
const dexSave = document.getElementById(`dexterity-save`);
const conStat = document.getElementById(`constitution`);
const conMod = document.getElementById(`constitution-mod`);
const conSave = document.getElementById(`constitution-save`);
const intStat = document.getElementById(`intelligence`);
const intMod = document.getElementById(`intelligence-mod`);
const intSave = document.getElementById(`intelligence-save`);
const wisStat = document.getElementById(`wisdom`);
const wisMod = document.getElementById(`wisdom-mod`);
const wisSave = document.getElementById(`wisdom-save`);
const chaStat = document.getElementById(`constitution`);
const chaMod = document.getElementById(`constitution-mod`);
const chaSave = document.getElementById(`constitution-save`);
const weapon1 = document.getElementById(`weapon-1`);
const attack1 = document.getElementById(`attack-1`);
const damageRoll1 = document.getElementById(`damage-roll-1`);
const damageMod1 = document.getElementById(`damage-mod-1`);
const damageRoll2 = document.getElementById(`damage-roll-2`);
const damageMod2 = document.getElementById(`damage-mod-2`);
const damageRoll3 = document.getElementById(`damage-roll-3`);
const damageMod3 = document.getElementById(`damage-mod-3`);
const skillsTab = document.getElementById(`skills-tab`);
const equipTab = document.getElementById(`equip-tab`);
const spellsTab = document.getElementById(`spells-tab`);
const editTab = document.getElementById(`edit-tab`);


function clickCheck() {
    alert(`This tab is working, but not implemented yet.`);
}
skillsTab.onclick = function(){clickCheck()};
equipTab.onclick = function(){clickCheck()};
spellsTab.onclick = function(){clickCheck()};
editTab.onclick = function(){clickCheck()};


class classList {
    constructor(className, hitDice, saveThrows, skills) {
        this.className = className;
        this.hitDice = hitDice;
        this.saveThrows = saveThrows;
        this.skills = skills;
    }
}

const artificer = new classList(
    `Artificer`,
    8,
    ['Constitution', 'Intelligence'],
    ['Choose two from', ['Arcana','History','Investigation','Medicine','Nature','Perception','Sleight of Hand']]
    )