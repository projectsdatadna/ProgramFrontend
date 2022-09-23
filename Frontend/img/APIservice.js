export default class APIService{
    // Insert an article
    static InsertArticle(body){
        return fetch(`http://localhost:5000/properties/add`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

    
    static FetchGoogleEmail(body){
            return fetch(`https://www.googleapis.com/oauth2/v1/userinfo`,{
                'method':'GET',
                 headers : {
                'Content-Type':'application/json',  
                'Authorization': `Bearer ${body.credential}`
          },
        })
        .then(response => response.json())
        .catch(error => console.log(error))
        
    }
    static InsertProject(body){
        return fetch(`http://localhost:5000/articles/add`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

    static InsertUser(body){
        return fetch(`http://localhost:5000/user/add`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

    static InsertLoginUser(body){
        return fetch(`http://localhost:5000/login/add`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}