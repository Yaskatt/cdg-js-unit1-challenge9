//画像情報のオブジェクトを格納した配列
const picArray = [{
    src: './images/pic_1.jpg',
    title: 'picture 1'
  },
  {
    src: './images/pic_2.jpg',
    title: 'picture 2'
  },
  {
    src: './images/pic_3.jpg',
    title: 'picture 3'
  },
  {
    src: './images/pic_4.jpg',
    title: 'picture 4'
  },
  {
    src: './images/pic_5.jpg',
    title: 'picture 5'
  },
  {
    src: './images/pic_6.jpg',
    title: 'picture 6'
  }
];


//スライドショーが再生中かどうかを記録しておくためのグローバル変数
let playingId = 0;
let isPlaying = false;

//写真を切り替える関数
//関数名「changePicture」
let picId = 0;

function changePicture() {
  if (picId === 5) {
    picId = 0;
  } else {
    picId++;
  }
  document.getElementById('pics').src = picArray[picId].src;
  document.getElementById('pic-title').innerHTML = picArray[picId].title;
}

// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」
window.onload = () => {
  const playButton = document.getElementById('playButton');
};

function playSlidedeshow() {
  if (isPlaying) {
    clearInterval(playingId);
    playButton.innerHTML = "PLAY";
    isPlaying = false;
  } else {
    playingId = setInterval(changePicture, 2000);
    playButton.innerHTML = "STOP";
    isPlaying = true;
  }
}
