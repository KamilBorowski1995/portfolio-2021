const Animated = (scrollTop) => {
  const allElement = document.querySelectorAll(`[data-anim*="fade-up"]`);

  allElement.forEach((el) => {
    const offsetTopElement = el.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.9 < scrollTop) {
      el.style.opacity = "1";
      el.style.animation = `fadeUp 1s both`;
    }

    if (offsetTopElement - window.innerHeight * 1.1 > scrollTop) {
      el.style.opacity = "0";
      el.style.animation = null;
    }
  });
};

export default Animated;
