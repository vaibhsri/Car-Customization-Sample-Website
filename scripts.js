
function load(){
    var signin = document.getElementById('signin');

    var name = localStorage.getItem('name');

    if(name=='' || name == null || name == "null" || name == undefined){
        signin.innerHTML="sign in";
    }else{
        signin.innerHTML="Welcome, " + name ;
}
}
