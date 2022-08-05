const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const faqDesc = faq.querySelector(".faq__desc");
    const faqIcon = faq.querySelector(".faq__icon i");
    faqDesc.classList.toggle("open");

    if (faqIcon.className === "fa-solid fa-plus") {
      faqIcon.className = "fa-solid fa-minus";
    } else {
      faqIcon.className = "fa-solid fa-plus";
    }
  });
});
