  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  let counter = 0;

  let buttonLeft = document.querySelector('.btn-left');
  let buttonRight = document.querySelector('.btn-right');

buttonLeft.addEventListener('click', function() {
  increaseCount();
  changeBackgroundImage();
})


buttonRight.addEventListener('click', function() {
  decreaseCount();
  changeBackgroundImage();
})


function increaseCount () {
  if(counter == 4) {
    counter = 0;
  }
  else counter++;
}

function decreaseCount() {
  if(counter == 0) {
    counter = 4;
  }
  else counter--;
}

function generateImageUrl (index) {
  let name = pictures[index];
  let url = `url("./img/${name}.jpeg")`;
  console.log(url);
  return url;
}


function changeBackgroundImage() {
  let backgroundContainer = document.querySelector('.img-container');
  backgroundContainer.style.backgroundImage = generateImageUrl(counter);
}
