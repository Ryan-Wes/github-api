const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
            <div class="data">
                <h1>${user.name ?? 'Não possui nome cadastrado 😿'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrada 😿'}</p>
                <p><strong>Seguidores:</strong> ${user.followers}</p>
                <p><strong>Seguindo:</strong> ${user.following}</p>
            </div>
        </div>`;

        let repositoriesItems = '';
        user.repositories.forEach(repo => {
            repositoriesItems += `<li class="lista-indicadores">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <span class="indicadores"> 🍴 ${repo.forks}</span>
                <span class="indicadores"> 🌟 ${repo.stars}</span>
                <span class="indicadores"> 👀 ${repo.watchers}</span>
                <span class="indicadores"> 👄 ${repo.language ?? 'Sei lá, macho!'}</span>
            </li>`;
        });

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItems}</ul>
            </div>`;
        }

        let eventsItems = '';
        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                eventsItems += `<li>${event.repo.name} - ${event.payload.commits[0]?.message ?? 'Sem mensagem de commit'}</li>`;
            } else if (event.type === 'CreateEvent') {
                eventsItems += `<li>${event.repo.name} - Sem mensagem de commit</li>`;
            }
        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                <h2>Eventos</h2>
                <ul>${eventsItems}</ul>
            </div>`;
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
};

export { screen };



