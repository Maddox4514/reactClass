import React from "react"

function NavBar(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Tutorial/practical class</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Home">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Services.jsx">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Contact.jsx">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </div>
    )
}

export default NavBar