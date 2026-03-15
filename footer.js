class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
        <p> developed by Abhijit Saikia.</p>
    </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);