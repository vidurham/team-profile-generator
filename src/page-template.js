const generateTeam = teamArr => {
    console.log(teamArr)
    if (teamArr.Manager) {
    return `
        ${teamArr
            .map(({ name, id, email, role, office }) => {
                    return `
                        <h1> ${name} </h1>
                        <h2> ${id} </h2>
                        <h2> ${email} </h2>
                        <h2> ${role} </h2>
                        <h2> ${office} </h2>`;
                })
            }
        `
    }

    if (teamArr.Engineer) {
    return `
        ${teamArr
            .map(({ name, id, email, role, github }) => {
                    return `
                        <h1> ${name} </h1>
                        <h2> ${id} </h2>
                        <h2> ${email} </h2>
                        <h2> ${role} </h2>
                        <h2> ${github} </h2>`;
                })
            }
        `
    }
    if (teamArr.Intern) {
    return `
        ${teamArr
            .map(({ name, id, email, role, school }) => {
                    return `
                        <h1> ${name} </h1>
                        <h2> ${id} </h2>
                        <h2> ${email} </h2>
                        <h2> ${role} </h2>
                        <h2> ${school} </h2>`;
                })
            }
        `
    }
}            
                

module.exports = team => {

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
        ${generateTeam(team)}
        </main>
    </body>
    </html>
    `
    }