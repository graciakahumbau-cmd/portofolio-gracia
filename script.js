const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>navMenu.classList.toggle("active"));
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("active")));

const glow=document.querySelector(".cursor-glow");
document.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

const items=document.querySelectorAll(".about-card,.project-card,.skill,.gallery-item,.contact-box");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
items.forEach((item,i)=>{
  if(item.classList.contains("gallery-item")) item.style.transitionDelay=(i%6)*.08+"s";
  observer.observe(item);
});
