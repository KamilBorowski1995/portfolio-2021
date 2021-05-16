const Animated = (scrollTop) => {
  const allElement = document.querySelectorAll(`[data-anim*="fade-up"]`);

  allElement.forEach((el) => {
    const offsetTopElement = el.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.75 < scrollTop) {
      el.style.animation = `fadeUp 1s both`;
      console.log(el);
    }
  });
};

export default Animated;
