handleMenuClick = event => {
  if (event.target.id === "mobile") {
    const navPanel = document.querySelector("nav");
    console.log("on mobile");
    navPanel.classList.toggle("open");
    console.log("after mobile", navPanel.classList);
  } else {
    const navPanel = document.querySelector("nav");
    console.log(navPanel.classList);
    navPanel.classList.remove("open");
    let activeNav = document.getElementsByClassName("active")[0];
    activeNav.className = "inactive";
    event.target.className = "active";
    const namePage = event.target.id;
    const page = pages.find(el => {
      return el[namePage];
    });

    const content = document.querySelector("main");
    if (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.insertAdjacentHTML("afterBegin", page[namePage]);
  }
};

const navs = document.getElementsByTagName("nav");
for(let i = 0; i < navs.length; i++){
    navs[i].addEventListener('click', handleMenuClick)
}

const main = document.querySelector('main');
if(main.innerHTML === ""){
    main.insertAdjacentHTML("afterBegin", pages[0].about)
}