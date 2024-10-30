
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
            <img src='https://github.com/Lucas20santos/FormacaoJavaScriptDevolope/tree/main/projeto2/assets/img/python.png?raw=true' alt="${element.name}" title="${element.name}">
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

(async () => {
    const profileData = await feactProfileData()
    updateProfileData(profileData)
    // updateProfileSkill(profileData)
    updateProfileSoftSkill(profileData)
    updateProfileEducation(profileData)
})()
