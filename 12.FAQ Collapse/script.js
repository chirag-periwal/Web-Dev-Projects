button = document.querySelectorAll('.faq-toggle');
console.log(button);
button.forEach((btn) => {
  btn.addEventListener('click', function () {
    btn.parentNode.classList.toggle('active');
  });
});
