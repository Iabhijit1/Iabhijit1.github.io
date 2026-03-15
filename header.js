class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="certificates.html">Certificates</a></li>
                        <li><a href="Abhijit_resume.pdf" target="_blank">Resume</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('my-header', MyHeader);