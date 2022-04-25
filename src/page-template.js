const buildManagerCard = function(manager) {
    return `
            <div class="card column is-one-quarter my-3 mx-3">
                <div class="container">
                    <div class="column has-text-centered">
                        <span class="icon">
                            <i class="fas fa-book-open-reader fa-3x"></i>
                        </span>
                    </div>
                    <div class="column has-text-centered">
                        <p class="title is-4">${manager.name}</p>
                        <p class="subtitle is-6">Manager</p>
                        <p class="subtitle is-6">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="subtitle is-6">ID: ${manager.id}</p>
                        <p class="subtitle is-6">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>`
}

const buildEngineerCard = function(engineer) {
    return `
            <div class="card column is-one-quarter my-3 mx-3">
                <div class="container">
                    <div class="column has-text-centered">
                        <span class="icon">
                            <i class="fas fa-gear fa-3x"></i>
                        </span>
                    </div>
                    <div class="column has-text-centered">
                        <p class="title is-4">${engineer.name}</p>
                        <p class="subtitle is-6">Engineer</p>
                        <p class="subtitle is-6">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="subtitle is-6">ID: ${engineer.id}</p>
                        <p class="subtitle is-6">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>
            </div>`
            
}

const buildInternCard = function(intern) {
    return `
            <div class="card column is-one-quarter my-3 mx-3">
                <div class="container">
                    <div class="column has-text-centered">
                        <span class="icon">
                            <i class="fas fa-graduation-cap fa-3x"></i>
                        </span>
                    </div>
                    <div class="column has-text-centered">
                    <p class="title is-4">${intern.name}</p>
                    <p class="subtitle is-6">Intern</p>
                    <p class="subtitle is-6">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="subtitle is-6">ID: ${intern.id}</p>
                    <p class="subtitle is-6">School: ${intern.school}</p>
                    </div>
                </div>
            </div>`
}
generateTeam = (data) => {

    cardArray = [];

    for (let i =0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = buildManagerCard(employee);
            cardArray.push(managerCard);
        }
        if (role === "Engineer") {
            const engineerCard = buildEngineerCard(employee);
            cardArray.push(engineerCard)
        }
        if (role === "Intern") {
            const internCard = buildInternCard(employee);
            cardArray.push(internCard)
        }
    }

    const cards = cardArray.join('')

    const generatePage = generateHTML(cards);
    return generatePage;
}
    
const generateHTML = function(cards) {   
return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    
    <body>
        <section class="hero is-link">
            <div class="hero-body has-text-centered">
                <p class="title">
                    My Team
                </p>
            </div>
        </section>
        <section class="container-fluid my-5 columns is-flex-wrap-wrap is-justify-content-center">
            ${cards}
        </section>
    </body>
    </html>
    `
}


module.exports = generateTeam;