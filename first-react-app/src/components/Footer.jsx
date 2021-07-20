const React = require("react");

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    // console.log (year);

    return <footer>
        Mugdha K © {year}
    </footer>
}

export default Footer;