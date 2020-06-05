let slide = document.getElementById('slide')

let x =0
async function loadData(url){
  const data = await fetch(url)
  return await data.json()
}
async function loadVideo(){
  let data = await loadData('json/video.json')
  let html = ""
  let hang = document.getElementById('hang')
  count = 0;
  for(let i = 0;i<Math.floor(data.length/6)+1;i++){
    html += '<div class="cot">'
    for(let x =0;x<6;x++){
      if(count < data.length){
        html += `<div class="hop" onclick="press(${data[count].id})">
        <img class ="cursor" src="${data[count]['img']}">
        <div class ="overlay"></div>
        <div class ="name cursor">
        <p>${data[count].name}</p>
        </div>
        </div>`
        count ++
      }
      if(count>data.length){
        break;
      }
    }
    html += "</div>"
  }
  hang.innerHTML = html
}
async function slideShow(){
  let data = await loadData("json/video.json")
  let html = ""
  for(let x=0; x<10;x++){
    html += `
    <div class="mySlides">
    <a href="#" onclick ="press(${data[x].id})">
    <img src="${data[x]["img"]}" style="width:240px;height: 350px;">
    </a>
    </div>`
  }
  html += `<a class="prev cursor" id="prev" onclick="plusSlide()">&#10094;</a>
            <a class="next cursor" id="next" onclick="plusSlides()">&#10095;</a>`
  slide.innerHTML = html
}
function plusSlides(){
  if(slide.scrollLeft>1458){

  }
  else{
    slide.scrollTo({
      left:x += 784,
      behavior:"smooth",
    })
  }
  console.log(slide.scrollLeft)
}
function plusSlide(){
    if(slide.scrollLeft<784){

    }
    else{
      slide.scrollTo({
        left:x -= 784,
        behavior:"smooth",
      })
    }
 console.log(slide.scrollLeft)
}

async function showFilmHot(){
  let data = await loadData('json/video.json')
  const box = document.getElementById('box')
  let html = `<span class="title"><i class="fas fa-trophy"></i> Bảng Xếp Hạng Phim</span>`
  for(let i = 0;i<5;i++){
    html += `<div class="video-hot">
    <a href="#" onclick="press(${data[i].id})">
    <img src="${data[i].img}">
    <div class="info">
    <p id ="nameVN">${data[i].nameVN}</p>
    <p id ="nameEng">${data[i].name}</p>
    </div>
    </a>`
  }
  box.innerHTML = html
}

async function press(n){
  const data = await loadData('json/video.json')
  const video = document.getElementById('video')
  const container = document.getElementById('container-content')
  let url = ""
  for(let x of data){
    if(n === x["id"]) url = x['link']
  }
  let html = `<iframe width="900" height="506" src="${url}" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; 
   picture-in-picture" allowfullscreen></iframe>`
  video.innerHTML = html
  container.style.display = "flex"
}
function off(){
  const screen = document.getElementById("container-content")
  screen.style.display = "none"
}
async function show(){
  console.log(await loadData("json/video.json"))
}
show()
loadVideo()
slideShow()
showFilmHot()