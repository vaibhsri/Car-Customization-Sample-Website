
function load(){
    var signin = document.getElementById('signin');

    var name = localStorage.getItem('name');

    if(name==''){
        signin.innerHTML="sign in";
    }else{
        signin.innerHTML="Welcome, " + name ;
}
}
