let addedNames = []

let numberOfTeams = 0

const addNameToList = function () {
    let inputName = document.getElementById('enterName')
    addedNames.push(inputName.value)
    console.log(addedNames)
    let listOfNames = document.getElementById('memberList')
    let newMemberOnList = document.createElement('li')
    newMemberOnList.classList.add('list-group-item')
    newMemberOnList.classList.add('list-group-item-secondary')
    newMemberOnList.innerText = inputName.value
    listOfNames.appendChild(newMemberOnList)
    inputName.value = ''
    inputName.focus()
}

const setNumberOfTeams = function () {
    let inputNumber = document.getElementById('enterTeamNum')
    numberOfTeams = inputNumber.value
    let teamNumContainer = document.getElementById('teamNum')
    let teamListsContainer = document.createElement('div')
    teamListsContainer.classList.add('row')
    teamNumContainer.appendChild(teamListsContainer)
    for (let i = 0; i < numberOfTeams; i++) {
        let individualTeamDiv = document.createElement('div')
        individualTeamDiv.classList.add(`col-${ Math.floor(12 / numberOfTeams) }`)
        teamListsContainer.appendChild(individualTeamDiv)
        let teamName = document.createElement('p')
        teamName.innerText = `Team ${ i + 1 }`
        teamName.classList.add('bg-dark')
        teamName.classList.add('text-light')
        individualTeamDiv.appendChild(teamName)
        let teamList = document.createElement('ul')
        teamList.setAttribute('id', `team${ i + 1 }`)
        teamList.classList.add('list-group')
        individualTeamDiv.appendChild(teamList)
        let removeButton = document.createElement('button')
        removeButton.innerText = 'Remove Last Member'
        removeButton.classList.add('btn-sm')
        removeButton.classList.add('btn-danger')
        removeButton.classList.add('mt-3')
        removeButton.addEventListener('click', function () {
            addedNames.push(teamList.lastChild.innerText)
            teamList.removeChild(teamList.lastChild)
        })
        individualTeamDiv.appendChild(removeButton)
    }
}

const assignMembersToTeams = function () {
    if (addedNames.length > 0) {
        let randomMemberNum = Math.floor(Math.random() * addedNames.length)
        let randomTeamNum = Math.ceil(Math.random() * numberOfTeams)
        let randomName = addedNames[randomMemberNum]
        let randomTeam = document.getElementById(`team${ randomTeamNum }`)
        let randomNameLi = document.createElement('li')
        randomNameLi.innerText = randomName
        randomNameLi.classList.add('list-group-item')
        randomNameLi.classList.add('list-group-item-success')
        randomTeam.appendChild(randomNameLi)
        addedNames.splice(randomMemberNum, 1)
    } else {
        alert('ALL MEMBERS HAVE BEEN ASSIGNED TO A TEAM!')
    }
}

const resetApp = function () {
    window.location.reload()
}