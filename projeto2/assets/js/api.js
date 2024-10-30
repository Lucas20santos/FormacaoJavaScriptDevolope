async function feactProfileData() 
{
    const URL = "https://raw.githubusercontent.com/Lucas20santos/FormacaoJavaScriptDevolope/refs/heads/main/projeto2/data/profile.json"
    const fetching = await fetch(URL)
    return await fetching.json()
}
