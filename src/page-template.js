
function generateTeam(teamArr) {
    console.log(teamArr)
    let count = 0
    while (count<teamArr.length) {
        if (teamArr[count].role === "Manager"){
            count += 1;
            return `
                ${teamArr
                    .map(({ name, role, id, email, officeNumber }) => {
                    return `
                    <h1> ${name} </h1>
                    <h2> ${role} </h2>
                    <h2> ${id} </h2>
                    <h2> ${email} </h2>
                    <h2> ${officeNumber} </h2>`
                    })
                    .join('')
            }
        `
        }
        else if (teamArr[count].role === "Engineer"){
            console.log("Engineer being built");
            console.log(teamArr[count].github)
            count += 1;
            return `
                ${teamArr
                    .map(({ name, role, id, email, Github }) => {
                    return `
                    <h1> ${name} </h1>
                    <h2> ${role} </h2>
                    <h2> ${id} </h2>
                    <h2> ${email} </h2>
                    <h2> ${teamArr[count].github} </h2>`
                    })
                    .join('')
                }
        `
        }
        else if (teamArr[count].role === "Intern"){
            count += 1;
            return `
                ${teamArr
                    .map(({ name, role, id, email, School }) => {
                    return `
                    <h1> ${name} </h1>
                    <h2> ${role} </h2>
                    <h2> ${id} </h2>
                    <h2> ${email} </h2>
                    <h2> ${School} </h2>`
                    })
                    .join('')
                }
        `
        }
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