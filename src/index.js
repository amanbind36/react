import navbar  from "../component/navbar";
console.log("navbar",navbar);

import '../styles/navbar.css';


let navbardiv= document.getElementById('navbar');

navbardiv.innerHTML=navbar();