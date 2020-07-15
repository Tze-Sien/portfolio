const toggleNavbar = () => {
    let navbar = document.getElementById('sidenav');
    navbar.classList.toggle('sidenav-display')
}

const toggleText = () => {
    let element = document.getElementById('typewritter');
    let text = [
        "Web Developer",
        "Graphic Designer"
    ]


    let v = 0;

    const pushText = () => {
        if( v < text.length) {
            element.innerHTML = text[v]
            v++;
        }else{
            v = 0;
        }
    }
    

    setInterval(pushText, 2000);
}