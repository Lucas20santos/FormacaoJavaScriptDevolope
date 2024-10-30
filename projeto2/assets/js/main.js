
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

    for (let index = 0; index < arrayOfSkills.length; index++) {
        const element = arrayOfSkills[index];
        console.log(element.logo)
        // skills.innerHTML += `
    //     <li>
    //         <img src="${element.logo}" alt="${profileData.skills.hardSkills.name}" title="HTML">
    //     </li>
    // `
    }

    console.log(profileData.skills.hardSkills)
}


(async () => {
    const profileData = await feactProfileData()
    updateProfileData(profileData)
    updateProfileSkill(profileData)
})()
