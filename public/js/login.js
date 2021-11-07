const loginUrl ="http://localhost:8000/api/v1/auth/login"
const dasboardUrl ="http://localhost:8000/api/v1/auth/dashboard"
const btnLogin  = document.querySelector('#btnLogin')
const checkBtn  = document.querySelector('#btnCheck')
const username  = document.querySelector('#username')
const password  = document.querySelector('#password')
const loginMsg  = document.querySelector('#login-msg')
const tokenText = document.querySelector('#token-status')
const resMsg    = document.querySelector('#response-message')
const resSecret = document.querySelector('#respons-secret')

document.addEventListener('DOMContentLoaded',() => {
    localStorage.removeItem('token')
});

btnLogin.addEventListener('click',async(e)=>{
    try {
        e.preventDefault()

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        let raw = JSON.stringify({
          "username": username.value,
          "password": password.value
        });
        
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        let response = await fetch(loginUrl,requestOptions)
            let result = await response.json()
            loginMsg.innerHTML = result.msg
            if(!result.token){
                loginMsg.style.color ="red"
                tokenText.innerHTML='Please Provide a Token!'
                tokenText.style.color="red"
            }else{
                loginMsg.style.color ="green"
                tokenText.innerHTML='Token Present'
                tokenText.style.color="green"
                localStorage.setItem('token',result.token)
            }
        
    } catch (error) {
        console.log(error)
    }
   
})
checkBtn.addEventListener('click',async(e)=>{
    // e.preventDefault()
    const token = localStorage.getItem('token')
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    const response = await fetch(dasboardUrl,requestOptions)
    let result = await response.json()
        if(result.secret){
          resMsg.innerHTML = result.msg
          resSecret.innerHTML = result.secret;
        }else{
            resMsg.innerHTML = result.msg
            resSecret.innerHTML = "";
        }
    

})
