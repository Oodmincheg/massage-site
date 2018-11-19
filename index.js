handleMenuClick = (event) => {
    let activeNav = document.getElementsByClassName('active')[0]
    activeNav.className = 'inactive'
    event.target.className = 'active'
    const namePage = event.target.id;
    const page = pages.find((el) => {
        return el[namePage]
    })
    
    const content = document.querySelector('main')
    content.removeChild(content.firstChild)
    content.insertAdjacentHTML('afterBegin', page[namePage])
}

const navPanel = document.querySelector('nav')
navPanel.addEventListener('click', handleMenuClick)
