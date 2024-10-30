
function updateProfileData(profileData)
{
    const photo = document.getElementById("profile.photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile.name")
    name.innerHTML = profileData.name

    const job = document.getElementById("profile.job")
    job.innerHTML = profileData.job
    
    const location = document.getElementById("profile.location")
    location.innerHTML = profileData.location
    
    const phone = document.getElementById("profile.phone")
    phone.innerHTML = profileData.phone
    phone.href = `tel:${profileData.phone}`
    
    const email = document.getElementById("profile.email")
    email.innerHTML = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateProfileSkill(profileData)
{
    const skills = document.getElementById("profile.skills")
    const arrayOfSkills = profileData.skills.hardSkills

    for (let index = 0; index < arrayOfSkills.length; index++) 
    {
        const element = arrayOfSkills[index];
        
        skills.innerHTML += `
        <li>
            <img src='${element.logo}' alt="${element.name}" title="${element.name}">
        </li>
        `
    }
}

function updateProfileSoftSkill(profileData)
{
    const softSkills = document.getElementById("profile.hardSkills")
    const arrayOfSkills = profileData.skills.softSkills

    for (let index = 0; index < arrayOfSkills.length; index++) 
    {
        const element = arrayOfSkills[index];
        
        softSkills.innerHTML += `
        <li>${element}</li>
        `
    }
}

function updateProfileEducation(profileData)
{
    const education = document.getElementById("profile.Languages")
    const arrayOfEducation = profileData.languages

    for (let index = 0; index < arrayOfEducation.length; index++) 
    {
        const element = arrayOfEducation[index];
        
        education.innerHTML += `
        <li>${element}</li>
        `
    }
}

function updateProfilePortfolio(profileData)
{
    const portfolio = document.getElementById("profile.portfolio")
    const arrayOfPortfolio = profileData.portfolio

    for (let index = 0; index < arrayOfPortfolio.length; index++) 
    {
        const element = arrayOfPortfolio[index];
        portfolio.innerHTML += `
            <li>
                <span class="title github">${element.name}</span>
                <a href="${element.url}" target="_blank">${element.url}</a>
            </li>
        `    
    }
}

function updateProfileMyExperience(profileData)
{
    const myExperience = document.getElementById("profile.experience")
    const arrayOfMyExperience = profileData.professionalExperience
    
    for (let index = 0; index < arrayOfMyExperience.length; index++) 
    {
        const element = arrayOfMyExperience[index];
        myExperience.innerHTML += `
            <li>
                <span class="title">${element.name}</span>
                <span class="period">${element.period}</span>
                <span class="descricao">${element.description}</span>
            </li>        
        `
    }

}

function logoDio(profileData)
{
    const logoDio = document.getElementById("logo-dio")
    logoDio.src = profileData.logoDio
    logoDio.alt = "logo da DIO"
    logoDio.title = "Logo da DIO"
}

(async () => 
{
    const profileData = await feactProfileData()

    updateProfileData(profileData)
    updateProfileSkill(profileData)
    updateProfileSoftSkill(profileData)
    updateProfileEducation(profileData)
    updateProfilePortfolio(profileData)
    updateProfileMyExperience(profileData)
    logoDio(profileData)
})()
