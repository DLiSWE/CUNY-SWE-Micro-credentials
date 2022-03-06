
document.addEventListener('click', async function(){
 const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke/png', {
	"method": "GET",
	"headers": {
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
        'x-rapidapi-key': '3bbccd09femsh53fa0490eac89eep15adb3jsn987f4726b018'
	},
})
const data = await response.json()
to_html(data)
return [data.body.setup, data.body.punchline]
})
    // to_html(data[0])
    
function to_html(data){
    document.getElementById('thing').innerText = data.body.setup
    document.getElementById('thing1').innerText = data.body.punchline
}