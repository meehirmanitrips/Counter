let num = 0;
const btns = document.querySelectorAll(`.btn`);
const value = document.querySelector(`#value`);
btns.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    if (e.currentTarget.classList.contains("increase")) {
      num++;
    } else if (e.currentTarget.classList.contains(`decrease`)) {
      num--;
    } else {
      num = 0;
    }
    if (num > 0) {
      value.style.color = `green`;
    }
    if (num < 0) {
      value.style.color = `red`;
    }
    if (num === 0) {
      value.style.color = `#222`;
    }
    value.textContent = num;
  });
});
