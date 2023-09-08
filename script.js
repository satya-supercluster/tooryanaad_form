let type=document.querySelectorAll('.options');
let choosen=1;
let ind=document.querySelector('.optional-ind')
let team=document.querySelector('.optional-team')
let names =document.querySelectorAll('.namev');
let checkboxes=document.querySelectorAll('.k');
let competitions=document.querySelectorAll('.i');
let nukkad=document.querySelector('.g');
function activation(){
    type.forEach(element => {
        element.classList.remove('active');
    });
    this.classList.add('active');
    if(this.classList.contains('ind')){
        choosen=1;
    }
    else{
        choosen=2;
    }
    if(choosen==1){
        team.style.display="none";
        ind.style.display="block";
        names[1].required=false;
        names[2].required=false;
        names[0].required=true;
        competitions.forEach(element => {
            element.style.display="block";
        });
        nukkad.style.display="none";
    }
    else{
        ind.style.display="none";
        team.style.display="block";
        names[1].required=true;
        names[2].required=true;
        names[0].required=false;
        competitions.forEach(element => {
            element.style.display="none";
        });
        nukkad.style.display="block";
    }
    checkboxes.forEach(element => {
        element.checked=false; 
    });
}
let field=document.querySelector('.type');
type.forEach(element => {   
    element.addEventListener('click',activation);
});

let name1 = document.querySelectorAll('.top')
let p = document.querySelectorAll('.p')
function check(){
    for(var i=0;i<p.length;i++){
        if(p[i].value.trim()){
            name1[i].classList.add('label-up');
        }
        else{
            name1[i].classList.remove('label-up');
        }
    }
    
}

let validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function name_validation(value){
        let p=true;
        if(value.trim().length==0)
        p=false;
        for(var i=0;i<value.length;i++){
            if((value[i]>='A'&&value[i]<='Z')||(value[i]>='a'&&value[i]<='z')||value[i]==" "){
            }
            else{
                p=false;
                break;
            }
        }
        return p;
}
function contact_validation(value){
    if(value.length==10){
        let p=true;
        for(let i=0;i<value.length;i++){
            if(value[i]>='0'&&value[i]<='9'){}
            else{
                p=false; break;
            }
        }
        return p;
    }
    else return false;
}



function validate(){
    let namev =document.querySelectorAll('.namev');
    let anames= document.querySelectorAll('.anames');
    let emailv =document.querySelector('.emailv');
    let aemail= document.querySelector('.aemail');
    let numv =document.querySelector('.numv');
    let anum= document.querySelector('.anum');
    let flag=true;
    for(var i=0;i<namev.length;i++){
        if((choosen==2&&(i==0))||(choosen==1&&(i==1||i==2)))
        continue;
        if(name_validation(namev[i].value)){
            anames[i].classList.add('green');
            anames[i].classList.remove('asterisk');
        }
        else{
            anames[i].classList.add('asterisk');
            anames[i].classList.remove('green');
            flag=false;
        }
    }
    if(validateEmail(emailv.value)){
        aemail.classList.add('green');
        aemail.classList.remove('asterisk');
    }
    else{
        aemail.classList.add('asterisk');
        aemail.classList.remove('green');
        flag=false;
    }
    if(contact_validation(numv.value)){
        anum.classList.add('green');
        anum.classList.remove('asterisk');
    }
    else{
        anum.classList.add('asterisk');
        anum.classList.remove('green');
        flag=false;
    }
    return flag;
}
