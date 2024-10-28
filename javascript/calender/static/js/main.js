let m = document.querySelector(".month");
let d = document.querySelector(".day");
let dat = document.querySelector(".date");
let y = document.querySelector(".year");

window.addEventListener("DOMContentLoaded",()=>{
    const dt = new Date()
    dat.innerHTML = dt.getDate();
    y.innerHTML = dt.getFullYear();
    m.innerHTML = dt.toLocaleDateString("en-US",{month:"long"});
    const da = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    d.innerHTML = da[dt.getDay()];
})