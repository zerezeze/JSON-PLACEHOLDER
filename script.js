const readPosts = async () =>{
    let postArea = document.querySelector(".posts")
    postArea.innerHTML = 'Carregando...'
  
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    
    if(json.length > 0){
      postArea.innerHTML = ''
  
      for(let i in json){
        let postTran = `<div><h1>${json[i].title}</h1>
        ${json[i].body}<hr/></div>`
        postArea.innerHTML += postTran
      }
  
    }else {
      postArea.innerHTML = 'Nenhum post para ser exibido'
    }
   }
  
   const addPost = async (title, body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts',
     { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ 
          title,
          body,
          userId: 1
        })
    })
  
    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''
    readPosts()
    console.log(`Esse é o titulo ${title} e esse é o conteudo ${body}`)
   }
  
   document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value
  
    if(title && body){
      addPost(title, body)
    }else {
      alert("Preencha os campos corretamente")
    }
   })
  
   readPosts()