window.addEventListener('load',()=>{
    let inp = document.querySelector('#inp');   
    let btn = document.querySelector('#send');
    btn.onclick = ()=>{
        try{
        fetch('https://localhost/cat:2022', {
            method:"POST",
            mode:'no-cors',
            headers:{
                "Content-Type":'application/json',
                "Accept": "applications/json"
            },
            body:JSON.stringify(inp.value)
        })
        .then(respnse=>respnse.json())
        .then(data=>console.log(data))
}    
catch(e){
    console.log(e)
}
}
});
