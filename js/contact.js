function submitForm() {
    const form = document.getElementById("contact_me");
    firstName = form.elements['first-name'].value;
    lastName = form.elements['last-name'].value;
    alert(`Hello ${firstName} ${lastName}!!! Your message has been sent to me.`);
}