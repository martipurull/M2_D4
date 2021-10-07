let addedNames = ['Marti', 'Jean', 'Judit', 'Lara', 'Amandine', 'Angela', 'Paula', 'Lauren']

let numberOfTeams = 0

const addNameToList = function () {
    let inputName = document.getElementById('enterName')
    addedNames.push(`This is the list of members: ${ inputName.value }`)
    console.log(addedNames)
    let listOfNames = document.getElementById('memberList')
    let newMemberOnList = document.createElement('li')
    newMemberOnList.innerText = inputName.value
    listOfNames.appendChild(newMemberOnList)
    inputName.value = ''
}

const setNumberOfTeams = function () {
    let inputNumber = document.getElementById('enterTeamNum')
    console.log(inputNumber)
    numberOfTeams = inputNumber.value
    console.log(`This is the number of teams: ${ numberOfTeams }`)
    let teamNumContainer = document.getElementById('teamNum')
    let teamListsContainer = document.createElement('div')
    teamListsContainer.classList.add('row')
    teamNumContainer.appendChild(teamListsContainer)
    for (let i = 0; i < numberOfTeams; i++) {
        let individualTeamDiv = document.createElement('div')
        individualTeamDiv.classList.add('col-6')
        teamListsContainer.appendChild(individualTeamDiv)
        let teamName = document.createElement('p')
        teamName.innerText = `Team ${ i + 1 }`
        teamName.classList.add('bg-dark')
        teamName.classList.add('text-light')
        individualTeamDiv.appendChild(teamName)
        let teamList = document.createElement('ul')
        teamList.setAttribute('id', `team${ i + 1 }`)
        individualTeamDiv.appendChild(teamList)
    }
}

const assignMembersToTeams = function () {
    let randomMemberNum = Math.ceil(Math.random() * addedNames.length)
    let randomTeamNum = Math.ceil(Math.random() * numberOfTeams)

    let randomName = addedNames[randomMemberNum]
    let randomTeam = document.getElementById(`team${ randomTeamNum }`)
    let randomNameLi = document.createElement('li')
    randomNameLi.innerText = randomName
    randomTeam.appendChild(randomNameLi)
    console.log(addedNames)
    addedNames.splice(randomMemberNum, 1)
    console.log(addedNames)

}