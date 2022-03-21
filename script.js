console.log('JS OK!');

// -------------------- FUNCTIONS -------------------- //

//card creation
function createCards() {

    for (let i = 0; i < teamMembers.length; i++) {

        //div card
        let divCard = document.createElement('div');
        teamContainer.appendChild(divCard);
        divCard.classList.add('team-card');


        let divImage = document.createElement('div');
        divCard.appendChild(divImage);
        let img = document.createElement('img');
        divImage.appendChild(img);
        img.src = teamMembers[i].imgUrl;
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


// -------------------- / DOM ELEMENTS -------------------- //



// -------------------- GENERAL -------------------- //

// array di oggetti dei team members
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founders & CEO',
        imgUrl: 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        imgUrl: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        imgUrl: 'img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        imgUrl: 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        imgUrl: 'img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        imgUrl: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

console.log(teamMembers.length);
// -------------------- / GENERAL -------------------- //



createCards();

