let timer;
let t = 'Change Tab Text';

function changeTitle(icon, text) {
  document.querySelector('head title').innerHTML = text;
  document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}

window.onblur = () => {
  timer = setTimeout(() => {
    changeTitle('./heart.ico', '🤚 Вернитесь 😭 ✋');
  }, 5000)
}

window.onfocus = () => {
  clearTimeout(timer);
  changeTitle('./favicon.png', t);
}