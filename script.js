console.log('JS OK!');

// -------------------- FUNCTIONS -------------------- //

//card creation
function createCards() {

    for (let i = 0; i < teamMembers.length; i++) {

        let divCard = document.createElement('div');
        teamContainer.appendChild(divCard);
        divCard.classList.add('team-card');


        let divImage = document.createElement('div');
        divCard.appendChild(divImage);
        let img = document.createElement('img');
        divImage.appendChild(img);
        img.src = teamMembers[i].image;
        divImage.classList.add('card-image');

        let divText = document.createElement('div');
        divCard.appendChild(divText);
        divText.classList.add('card-text');
        let nameOfMember = document.createElement('h3');
        nameOfMember.innerText = teamMembers[i].name;
        divText.appendChild(nameOfMember);
        let roleOfMember = document.createElement('p');
        roleOfMember.innerText = teamMembers[i].role;
        divText.appendChild(roleOfMember);

    }

}


// -------------------- / FUNCTIONS -------------------- //



// -------------------- DOM ELEMENTS -------------------- //

//team container
let teamContainer = document.querySelector('.team-container');

//button Add
const buttonAdd = document.getElementById('addMemberButton');


// -------------------- / DOM ELEMENTS -------------------- //



// -------------------- GENERAL -------------------- //

// array di oggetti dei team members
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founders & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg'
    }
];


console.log(teamMembers.length);

createCards();


buttonAdd.addEventListener('click', function () {

    teamContainer.innerHTML = '';

    //inputs
    let formName = document.getElementById('name').value;
    let formRole = document.getElementById('role').value;
    let formImage = document.getElementById('image').value;

    let newMember = {
        name: formName,
        role: formRole,
        image: formImage,
    }

    teamMembers.push(newMember);

    createCards();

    console.log(teamMembers.length);

})

// -------------------- / GENERAL -------------------- //




