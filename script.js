const registerBtn=document.getElementById("registerBtn")
registerBtn.addEventListener("click",register)
function register(){
    let userName=document.getElementById('username').value
    let email=document.getElementById('email').value
    let password=document.getElementById('userPassword').value
    const userObject={
        userId:Math.random(),
        userName:userName,
        email:email,
        password:password
    }
    store(userObject)
}
function store(userObject)
{
    localStorage.setItem(Math.random(),JSON.stringify(userObject))
}