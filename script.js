function openWhatsApp() {
    var phoneNumber = "919080451235"; // Your number with country code
    var message = "Hello Maha Lakshmi, I viewed your portfolio and would like to connect with you.";

    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

function sendEmail() {
    window.location.href = "mailto:mahalakshmi.bsc23@gmail.com?subject=Portfolio Review&body=Hello Maha Lakshmi,";
}
