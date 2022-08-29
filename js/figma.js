let audio = null;
if (audio)
    window.location.reload()

// Disable arrow keys
document.addEventListener('keydown', (e)=>{
    if (e.key.includes('Arrow'))
        e.stopPropagation()
    if (e.key == 'F') document.body.requestFullscreen()
}
)


// DOM modification
document.querySelector("#prototype-sidebar-panel > nav > div > div").style.borderBottom = 'none'
document.querySelector("#prototype-sidebar-panel > nav > div > div.sidebar_panel--flowsListPanelContent--1XtLk.pages_panel--pagesPanelContent--2qjss > div.sidebar_panel--flowsHeaderContainerWithShadow--2TxDt.pages_panel--pagesHeaderContainerWithShadow--3_9Ml.pages_panel--pagesHeaderContainer--dcdHl")?.remove()
document.querySelector("#react-page > div > div > div.prototype--documentationContainer--JPUjj > div > div.header--header--3d0kA.header--headerWithSidebar--16-MP")?.remove()
document.querySelector("#prototype-sidebar-panel > nav > div > section")?.remove()
document.querySelector("#prototype-sidebar-panel").style.marginTop = '0px'
document.querySelector("#prototype-sidebar-panel").querySelectorAll('*').forEach(el => el.style.backgroundColor = 'black')
document.querySelector("#prototype-sidebar-panel > nav > div > div.sidebar_panel--resizeLineContainer--3XSCR")?.remove();
const styles = `
    .pages_panel--pagesPanelContent--2qjss:after { 
        display: none !important;
    }
    button[aria-current=false]:hover,
    button[aria-current=false]:hover * {
        cursor: pointer;
        text-decoration: underline;
    }
    #prototype-sidebar-panel {
        position: absolute;
        top: 45%;
        left: 15px;
    }
`
const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

// Pause audio on tab change
document.querySelectorAll('button[role=link]')
    .forEach((el)=>
        el.addEventListener('click', ()=>
            el.getAttribute('aria-current') == 'false' && audio?.pause()))

// Play audio when start is clicked
document.querySelector('canvas').addEventListener('click', () => setTimeout(()=>{
    const search = window.location.search;

    // Majority rule
    if (search.startsWith('?node-id=1%3A19')) {
        audio?.pause()
        audio = new Audio('https://github.com/jeremyjacob/AmericanFundamentalsProject/blob/main/audio/SoundHelix-Song-2.mp3?raw=true')
        audio.play()
    }

    // Individual dignity
    if (search.startsWith('?node-id=27%3A787')) {
        audio?.pause()
        audio = new Audio('https://github.com/jeremyjacob/AmericanFundamentalsProject/blob/main/audio/SoundHelix-Song-3.mp3?raw=true')
        audio.play()
    }
}, 10)
)
