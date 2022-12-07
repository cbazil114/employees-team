const createPage = (teamGroup) => {
    console.log("It's the team!", teamGroup)
    let cards = ``
    // let card = `<h1>${teamGroup[0].name}</h1>`
    // cards.push(card)

    for (let i = 0; i < teamGroup.length; i++) {
        if (teamGroup[i].getRole()==="Engineer") {
            let card = `
            <div class = "card">
                <div class="card-header">
                    <h2>${teamGroup[i].name}</h1>
                    <h2>Engineer</h2>
                </div>
                <div class="card-body">
                    <p> ID: ${teamGroup[i].id}</p>
                    <p>Email: <a href = "mailto: ${teamGroup[i].email}">${teamGroup[i].email}</a></p>
                    <p> Github: ${teamGroup[i].github}</p>
                </div>
            </div>
            `
            cards += card
        } else if (teamGroup[i].getRole()==="Manager") {
            let card = `
            <div class = "card">
                <div class="card-header">
                    <h2>${teamGroup[i].name}</h1>
                    <h2>Manager</h2>
                </div>
                <div class="card-body">
                    <p> ID: ${teamGroup[i].id}</p>
                    <p>Email: <a href = "mailto: ${teamGroup[i].email}">${teamGroup[i].email}</a></p>
                    <p> Office Number: ${teamGroup[i].officeNumber}</p>
                </div>
            </div>
            `
            // cards.push(card)
            cards += card
        } else if (teamGroup[i].getRole()==="Intern") {
            let card = `
            <div class = "card">
                <div class="card-header">
                    <h2>${teamGroup[i].name}</h1>
                    <h2>Intern</h2>
                </div>
                <div class="card-body">
                    <p> ID: ${teamGroup[i].id}</p>
                    <p>Email: <a href = "mailto: ${teamGroup[i].email}">${teamGroup[i].email}</a></p>
                    <p> School: ${teamGroup[i].school}</p>
                </div>
            </div>
            `
            cards += card
        }
    }

    const fakeHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        <div class="container">
            ${cards}
        </div>
    </body>
    </html>`
    return fakeHtml
}

module.exports = createPage;