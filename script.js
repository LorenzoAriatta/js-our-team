console.log('JS OK!');

// -------------------- FUNCTIONS -------------------- //


// -------------------- / FUNCTIONS -------------------- //

//card creation
//function createCards() {


//}


// -------------------- DOM ELEMENTS -------------------- //

//team container
let teamContainer = document.querySelector('team-container');
//team card
const teamCard = document.querySelector('team-card');
//card text
let cardText = document.querySelector('card-text');
//div card
let divCard = document.createElement('div');

// -------------------- / DOM ELEMENTS -------------------- //



// -------------------- GENERAL -------------------- //

// array di oggetti dei team members
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founders & CEO',
        imgUrl: 'file:///C:/Users/loren/OneDrive/Documenti/Boolean/Boolean%20Projects/js-our-team/img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        imgUrl: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        imgUrl: 'file:///C:/Users/loren/OneDrive/Documenti/Boolean/Boolean%20Projects/js-our-team/img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        imgUrl: 'file:///C:/Users/loren/OneDrive/Documenti/Boolean/Boolean%20Projects/js-our-team/img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        imgUrl: 'file:///C:/Users/loren/OneDrive/Documenti/Boolean/Boolean%20Projects/js-our-team/img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        imgUrl: 'file:///C:/Users/loren/OneDrive/Documenti/Boolean/Boolean%20Projects/js-our-team/img/barbara-ramos-graphic-designer.jpg'
    }
];

console.log(teamMembers.length);
// -------------------- / GENERAL -------------------- // 





for (let i = 0; i < teamMembers.length; i++) {

    teamContainer.appendChild(divCard);


}
