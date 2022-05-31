const jokeEle=document.getElementById('joke')
const jokeBtn=document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',getJoke)
async function getJoke(){
    const config={
        headers:{
            'Accept':'application/json'
        }
    }
    const response = await fetch('https://icanhazdadjoke.com/',config)   
    const data = await response.json()
    jokeEle.innerText=data.joke
}
getJoke()
