const buildManagerCard = function(manager) {
    console.log(manager)
    return `
        <h1> ${manager.name} </h1>
        <h2> ${manager.role} </h2>
        <h2> ${manager.id} </h2>
        <h2> ${manager.email} </h2>
        <h2> ${manager.officeNumber} </h2>`
}

const buildEngineerCard = function(engineer) {
    return `
        <h1> ${engineer.name} </h1>
        <h2> ${engineer.role} </h2>
        <h2> ${engineer.id} </h2>
        <h2> ${engineer.email} </h2>
        <h2> ${engineer.github} </h2>`
            
}

const buildInternCard = function(intern) {
    return `
        <h1> ${intern.name} </h1>
        <h2> ${intern.role} </h2>
        <h2> ${intern.id} </h2>
        <h2> ${intern.email} </h2>
        <h2> ${intern.school} </h2>`
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
    </head>
    
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>
        <main class="container my-5">
            ${cards}
        </main>
    </body>
    </html>
    `
}


module.exports = generateTeam;