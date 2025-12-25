/*/----SHOW SIDEBAR----*/
const showSidebar = (toggleId, sidebarId) => {
    const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sidebarId)
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('show-sidebar')
    })


}
showSidebar('header-toggle', 'sidebar')

/*/----ACTIVE AND REMOVE SIDEBAR----*/
const drop = document.querySelectorAll('.drop')

drop.forEach(item =>{
    const dropBtn = item.querySelector('.drop__button'),
        droplist = item.querySelector('.drop__list')
    dropBtn.addEventListener('click', () =>{
        // 2. close any other open drop
        const openItem = document.querySelector('.show-drop') // search if there are any open drop
        // check if there is an open drop and if it 's not the current one
        if(openItem && openItem!==item){
            const openDroplist = openItem.querySelector('.drop__list')
            openDroplist.removeAttribute('style')
            openItem.classList.remove('show-drop')
        }
        // 1. it 's open, we close it
        if(item.classList.contains('show-drop')){
            
            droplist.removeAttribute('style')
            item.classList.remove('show-drop')
        } else{
            // it 's closed, we open it
            droplist.style.height = droplist.scrollHeight + "px"
            item.classList.add('show-drop')
        }
    })
})