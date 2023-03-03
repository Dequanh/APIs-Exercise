
const resBtn = document.querySelector('button')

const clickedOn= ()=>{
axios.get('https://swapi.dev/api/planets/2/')
.then(res =>{
    console.log(res.data.residents)
    for(i=0; i<res.data.residents.length; i++){
        axios.get(res.data.residents[i])
            .then(res=>{
                const resNames= document.createElement('h2');
                let t = document.createTextNode(res.data.name)
                resNames.appendChild(t)
                document.body.appendChild(resNames)
            })
    }
})
} 

resBtn.addEventListener('click', clickedOn)