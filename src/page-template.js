const { info } = require("console");

const generateDescription = description => {
    if(!description) {
        return '';
    }

    return `
    <section  id="describe">
      <h2>Describe Project</h2>
      <p>${description}</p>
    </section>
    `;
}

const generateBody = info => {
    return `
    <section id="sectionInfo">
    <h2>Work</h2>
    <div>
    ${info.map(({installation, credits}) => {
        return `
        <div>
        <h3>${title}</h3>
        <h5>
        Built by:
        ${credits}
        </h5>
        <p>${description}</p>
        <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>
        `;
    })
    .join('')}

    ${info.map(({installation, credits}) => {
        return`
        <div>
        <h3>${title}</h3>
        <h5>
        Built By;
        ${credits}
        </h5>
        <p>${description}</p>
        <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>
        `;
    })
.join('')}
</div>
section>
`;
};

module.exports = templateData => {
const { body, description } = templateData;

return `
<DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>${title}</title>
</head>

<body>
    <header>
        <div>
            <h1>${header.title}</h1>
            <nav>  
            <a href ="${link}">Github</a>
            </nav>
        </div>
    </header>
    <main>
    ${generateDescription(description)}
    <main>
    <footer></footer>
    </body>
    </html>
    `;
};
