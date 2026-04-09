function toggleDropdown(button) {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.dropdown-arrow');

    content.classList.toggle('show');
    button.classList.toggle('active');
    arrow.classList.toggle('open');
}