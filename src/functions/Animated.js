const Animated = (scrollTop) => {
  const fadeUp = document.querySelectorAll(`[data-anim="fade-up"]`);
  const fadeScale = document.querySelectorAll(`[data-anim="fade-scale"]`);
  const fadeOpacity = document.querySelectorAll(`[data-anim="fade-opacity"]`);
  const fadeLongOpacity = document.querySelectorAll(
    `[data-anim="fade-opacity-long"]`
  );

  fadeUp.forEach((el) => {
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

  fadeScale.forEach((el) => {
    const offsetTopElement = el.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.9 < scrollTop) {
      el.style.opacity = "1";
      el.style.animation = `fadeScale 1s both`;
    }

    if (offsetTopElement - window.innerHeight * 1.1 > scrollTop) {
      el.style.opacity = "0";
      el.style.animation = null;
    }
  });
  fadeOpacity.forEach((el) => {
    const offsetTopElement = el.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.9 < scrollTop) {
      el.style.opacity = "1";
      el.style.animation = `fadeOpacity 1s both`;
    }

    if (offsetTopElement - window.innerHeight * 1.1 > scrollTop) {
      el.style.opacity = "0";
      el.style.animation = null;
    }
  });
  fadeLongOpacity.forEach((el) => {
    const offsetTopElement = el.offsetTop;

    if (offsetTopElement - window.innerHeight * 0.9 < scrollTop) {
      el.style.opacity = "1";
      el.style.animation = `fadeOpacity 2s both`;
    }

    if (offsetTopElement - window.innerHeight * 1.1 > scrollTop) {
      el.style.opacity = "0";
      el.style.animation = null;
    }
  });
};

export default Animated;
