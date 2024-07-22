export default class Card{
    constructor(props){
        this.firstName = props.name.first;
        this.lastName = props.name.last;
        this.fullName = this.firstName +' '+ this.lastName;
        this.age = props.dob.age;
        this.photo = props.picture.large;
        this.email = props.email;
        return this.display();
    }
    display(){
        const card = document.createElement('div')
        card.classList.add('card')
        const fullNameP = document.createElement('h1');
        const fullNameTxt = document.createTextNode(this.fullName);
        fullNameP.append(fullNameTxt);
        const ageP = document.createElement('p');
        const ageTxt = document.createTextNode(this.age);
        ageP.append(ageTxt);
        const emailP = document.createElement('p')
        const emailTxt = document.createTextNode(this.email);
        emailP.append(emailTxt);
        const userPhoto = document.createElement('img');
        userPhoto.setAttribute('src', this.photo);
        userPhoto.setAttribute('alt', 'user profile picture');
        const deleteUser = document.createElement('button');
        const deleteUserTxt = document.createTextNode('X')
        deleteUser.append(deleteUserTxt);
        deleteUser.addEventListener('click', ()=> this.deleteUser(card))

        
        
        card.append(fullNameP,userPhoto,ageP,emailP,deleteUser);
        return card
    }
    deleteUser(card){
        card.remove();
    }
}