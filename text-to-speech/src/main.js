const synth = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  const voiceSelect = document.getElementById('voice-select');
  for (const voice of voices) {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  }
}

function speak() {
  const textToSpeak = document.getElementById('text-to-speech').value;
  console.log('value=', textToSpeak);
  const speech = new SpeechSynthesisUtterance(textToSpeak);

  const selectedVoiceName = document
    .getElementById('voice-select')
    .selectedOptions[0].getAttribute('data-name');

  const selectedVoice = voices.find(
    (voice) => voice.name === selectedVoiceName
  );
  speech.voice = selectedVoice;

  synth.speak(speech);
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

document.getElementById('speak-btn').addEventListener('click', speak);
