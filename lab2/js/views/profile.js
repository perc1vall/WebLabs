export class Profile {
    constructor({firstName, email, nickname }) {
        this.firstName = firstName;
        this.email = email;
        this.nickname = nickname;
    }
    
    render(Body) {
        const element = document.createElement('div');
        element.classList.add ('container');
        element.classList.add('bg-dark');
        element.classList.add('pt-5');

        element.innerHTML = `
		<div class="row">
			<h3 class="text-light">Name: ${this.firstName}</h3>
		</div>
		<div class="row">
			<h3 class="text-light">Mail: ${this.email}</h3>
		</div>
		<div class="row">
			<h3 class="text-light">Nickname: ${this.nickname}</h3>
		</div>
        `;

        Body.append(element);
    }
}