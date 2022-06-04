function makeSound(key, dt){

var pitch = [329.628,349.228,369.994,391.995,415.305,440.000,466.164,493.883,523.251,554.365,587.330,622.254,659.255,698.456,739.989,783.991,830.609,880.000,932.328,987.767,1046.502,1108.731,1174.659,1244.508,1318.510,1396.913,1479.978,1567.982,1661.219,1760.000,1864.655,1975.533,2093.005];

window.AudioContext = window.AudioContext||window.webkitAudioContext;
var audioContext = new AudioContext();

var osciillatorNode = audioContext.createOscillator();
var gain = audioContext.createGain();
var audioDestinationNode = audioContext.destination;

osciillatorNode.connect(gain);
osciillatorNode.frequency.value = pitch[key];

if(dt != 0) {
    gain.gain.setValueAtTime(0, 0);
    gain.gain.linearRampToValueAtTime(0.5, 0.1);
    gain.gain.linearRampToValueAtTime(0, (dt/1000));
    gain.connect(audioDestinationNode);
}

// osciillatorNode.connect(audioDestinationNode);

osciillatorNode.start = osciillatorNode.start || osciillatorNode.noteOn;
osciillatorNode.start();

setTimeout(function(){
    osciillatorNode.stop();
}, dt);

}
