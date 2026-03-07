
  const items = document.querySelectorAll("#typing-items li");
  const typingText = document.querySelector(".typing-text");

  let itemIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = items[itemIndex].innerText;

    if (!isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1000);
      }
    } else {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        itemIndex = (itemIndex + 1) % items.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 70);
  }

  typeEffect();



