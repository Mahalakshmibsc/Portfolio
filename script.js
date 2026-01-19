function openWhatsApp() {
    var phone = "919080451235"; // your WhatsApp number
    var msg = "Hello Maha Lakshmi, I viewed your portfolio and would like to connect.";
    window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(msg), "_blank");
}

function sendEmail() {
    window.location.href = "mailto:yourname@gmail.com?subject=Portfolio Contact";
}
