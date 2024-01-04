const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const toggleKeys = document.querySelector('.keys-checkbox input');

// Element audio permit to read song
const audio =  new Audio(`Audios/tune_a.wav`);
const allTunes = [];

pianoKeys.forEach((key) => {
    // add all keys value in array
    allTunes.push(key.dataset.key);
    key.addEventListener('click', () => {
        // Donc quand on click la fonction playAudio va prendre la valeur de la cle en param
       playAudio(`${key.dataset.key}`);
    });
});

function playAudio(key) {
    audio.src=`Audios/tune_${key}.wav`; 
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
}

function pressedKey (e) {
    if(allTunes.includes(e.key)) 
    playAudio(`${e.key}`);
}

function handleVolume (e) {
    // console.log(e.target.value);
    audio.volume = e.target.value;
}

function hideKeys() {
    pianoKeys.forEach((key) => {
        key.classList.toggle('hide');
    });
}

toggleKeys.addEventListener('click', hideKeys);
volumeSlider.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);
