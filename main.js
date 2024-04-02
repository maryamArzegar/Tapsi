var togller=document.querySelector(".navbar__icon")
var navbar=document.querySelector(".navbar__list")
togller.addEventListener("click",(e)=>{
    navbar.classList.toggle("expanded")
    togller.classList.toggle("expanded")
})
const tabs=document.querySelectorAll(".tab");
const tab_content=document.querySelectorAll(".tab_content")
tabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        const targetTabContent=document.querySelector(`#${tab.dataset.tabTarget}`);
        
        tabs.forEach((tab)=>tab.classList.remove("active"));
        tab_content.forEach((tab_content)=>tab_content.classList.remove("active"))
        tab.classList.add("active")
        targetTabContent.classList.add("active")
    })
})