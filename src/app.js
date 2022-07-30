const playAudio = document.querySelector(`.circle-play`),
    beforeAudio = document.querySelector(`.circle-before`),
    nextAudio = document.querySelector(`.circle-next`),
    repeatAudio = document.querySelector(`.repeat`),
    like = document.querySelector(`.like`),
    img = document.querySelector(`.img`),
    nameSong = document.querySelector(`.name-music`),
    authorSong = document.querySelector(`.author`),
    progressContainer = document.querySelector(`.progress-line`),
    progress = document.querySelector(`.line`),
    duration = document.querySelector(`.duration`);

const audioTag = document.createElement(`audio`);


const songs = [
    {
        author: `Куртка Бейна`,
        name: `Токсины`,
        path: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/music/3.mp3`,
        image: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/токсины.jpg`,
    },
    {
        author: `Райское Наслаждение`,
        name: `baunti`,
        path: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/music/baunti.mp3`,
        image: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/baunti.jpg`,
    },
    {
        author: `Dominic Joker`,
        name: `Если ты со мной...`,
        path: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/music/1.mp3`,
        image: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/2.jpg`,
    },
    {
        author: `Artic & Asti`,
        name: `Number 1`,
        path: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/music/5.mp3`,
        image: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/3.jpg`,
    },
    {
        author: `Trofim`,
        name: `Gorod Sochi`,
        path: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/music/4.mp3`,
        image: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/4.jpg`,
    },
    {
        author: `Irina Dubtsova`,
        name: `О нем...`,
        path: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/music/2.mp3`,
        image: `C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/5.jpg`,
    },

];

const wayOfPlay = `background-image: url(C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/pause.svg);`;
const wayOfLike = `background-image: url(C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/heart.svg);`;


let play = false,
    likeBtn = false,
    index = 0;


const songsPlay = (audioTag) => {
    audioTag.play();
    play = true;
};
const songsPause = (audioTag) => {
    audioTag.pause();
    play = false;
};


playAudio.addEventListener(`click`, () => {
    audioTag.src = songs[index].path;
    if (play === false) {
        img.style = `background-image: url(${songs[index].image})`;
        authorSong.innerHTML = `${songs[index].author}`;
        nameSong.innerHTML = `${songs[index].name}`;
        playAudio.style = wayOfPlay;
        songsPlay(audioTag);
    } else {
        playAudio.style = `background-image: url(C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/playBtn.svg);`;
        songsPause(audioTag);
    }
});

beforeAudio.addEventListener(`click`, () => {
    like.style = wayOfLike;
    playAudio.style = wayOfPlay;
    if (index === 0) {
        audioTag.src = songs.path;
        img.style = `background-image: url(${songs[index].image})`;
        authorSong.innerHTML = `${songs[index].author}`;
        nameSong.innerHTML = `${songs[index].name}`;
    } else {
        index -= 1;
        audioTag.src = songs[index].path;
        img.style = `background-image: url(${songs[index].image})`;
        authorSong.innerHTML = `${songs[index].author}`;
        nameSong.innerHTML = `${songs[index].name}`;
    }
    songsPlay(audioTag);
});

nextAudio.addEventListener(`click`, () => {
    like.style = wayOfLike;
    playAudio.style = wayOfPlay;
    index += 1;
    if (index > songs.length - 1) {
        index = 0;
    }
    img.style = `background-image: url(${songs[index].image})`;
    authorSong.innerHTML = `${songs[index].author}`;
    nameSong.innerHTML = `${songs[index].name}`;
    audioTag.src = songs[index].path;
    songsPlay(audioTag);
});

repeatAudio.addEventListener(`click`, () => {
    playAudio.style = wayOfPlay;
    audioTag.src = songs[index].path;
    songsPlay(audioTag);
});


like.addEventListener(`click`, () => {
    if (likeBtn === false) {
        like.style = `background-image: url(C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/like.svg);`;
        likeBtn = true;
    } else {
        like.style = wayOfLike;
        likeBtn = false;
    }
});



audioTag.addEventListener(`timeupdate`, (event) => {
    const durationTime = event.target.duration;
    const currentTime = event.target.currentTime;
    const progressPercent = (currentTime / durationTime) * 100;
    progress.style.width = `${progressPercent}%`;

    const begin = audioTag.currentTime;

    const timeMin = Math.floor(begin / 60);
    const timeSec = Math.floor(begin % 60);

    const min = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
    const sec = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;

    duration.innerHTML = `${min}:${sec}`;
});

repeatAudio.addEventListener('click', () => {
    const trackloop = true;
    trackloopControl(trackloop)
})

// let trackloopControl = (trackloop) => {
//     if (trackloop === false) {
//         repeatAudio.style = `background-image: url(C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/repeat.svg);
//         animation: none;
//     -webkit-animation: none;`
//     } else {
//         repeatAudio.style = `background-image: url(C:/Users/Hanna/Desktop/dasha/курсы/repository/music-player/img/repeat.svg);
//         animation: 1s linear 0s normal none infinite running repeatAudio;
//     -webkit-animation: 1s linear 0s normal none infinite running repeatAudio;`
//     }
// }





progressContainer.addEventListener(`click`, (event) => {
    const width = progressContainer.clientWidth;
    const click = event.offsetX;
    const durationBar = audioTag.duration;
    audioTag.currentTime = (click / width) * durationBar;
});


const renderContent = () => {
    img.style = `background-image: url(${songs[index].image})`;
    authorSong.innerHTML = `${songs[index].author}`;
    nameSong.innerHTML = `${songs[index].name}`;

}

renderContent()