function op_contact() {
    if (document.getElementById("contact-popup").style.display == "block") {
        document.getElementById("contact-popup").style.display = "none";
        document.body.style.overflowY = "auto";
    } else {
        document.getElementById("contact-popup").style.display = "block";
        document.body.style.overflowY = "hidden";
    }
}