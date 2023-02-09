const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');

icon.onclick = function (e) {
  search.classList.toggle('active');
}

clear.onclick = function () {
  document.getElementById('mySearch').value = '';
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    search.classList.remove('active');
  }
});

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(search);

  if (!withinBoundaries) {
    search.classList.remove('active');// скрываем элемент т к клик был за его пределами
  }
})