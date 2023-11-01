function Header () {
    return (
            <header>
                <nav className="NavigationBar">
                    <img className="Logo" src="#"></img>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}
function Footer () {
    return (
        <footer className="Bottom">C 20XX piotrowski development. All rights reserved</footer>
    )
}

function PageInners () {
    return (
       <div>
        <h1>Reasons to learn react</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer</li>
            </ol>
       </div> 
    )
}
function Page () {
    return (
        <div className="WholePage">
            <Header />
            <PageInners />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />,
document.getElementById("root")
)