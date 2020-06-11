let slidershow = document.getElementsByClassName('slider-defult__img-vertical');
let img = document.querySelector('.img');
let columnImg = document.querySelectorAll('.column-img');
let imgsmall = document.querySelectorAll('.img-small');
const resultSearch = document.querySelector('.result-search');
let indexImgSmall = 0;
//========= di chuột chuyển slider ===========
function changeslides(a, index) {
  indexImgSmall = index;
  for (let i of columnImg) {
    i.style.border = '5px solid black';
  }
  img.setAttribute('src', a);
  columnImg[index].style.border = '4px solid #e74c3c';
}
//============= slider auto=======
window.setInterval(() => {
  if (indexImgSmall > 4) {
    indexImgSmall = 0;
  }
  let getAttribute = imgsmall[indexImgSmall].getAttribute('src');
  changeslides(getAttribute, indexImgSmall);
  indexImgSmall++;
}, 3000);

// search
let data;
const search = document.getElementById('search');

search.addEventListener('input', (e) => {
  clear();
  const valueInput = e.target.value.toLowerCase();
  let i = data.filter((element) => {
    return element.name.toLowerCase().includes(valueInput);
  });

  if (valueInput.length > 0) {
    for (let a = 0; a <= 5; a++) {
      resultSearch.innerHTML += `<a href="videoIndex.html" onclick="move(${i[a].id})" ><li>${i[a].name}</li></a>`;
    }
  } else {
    clear();
  }
});
window.onclick = function (event) {
  clear();
};

function clear() {
  resultSearch.innerHTML = '';
}

const loadData = async () => {
  const getData = await (await fetch('./json/video.json')).json();

  data = getData;
};
function move(a) {
  sessionStorage.setItem('id', a);
}
loadData();
