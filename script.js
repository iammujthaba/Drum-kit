document.querySelectorAll('.dram').forEach(function(element) {
    element.addEventListener('click', function() {
      keyWordChecker(this.textContent);
      buttonCLK(this.textContent);
    });
  });
  
  document.addEventListener('keypress', function(evt) {
    keyWordChecker(evt.key);
    buttonCLK(evt.key);
  });
  
  function keyWordChecker(key) {
    var audioMap = {
      'a': './sounds/tom-1.mp3',
      's': './sounds/tom-3.mp3',
      'd': './sounds/kick-bass.mp3',
      'f': './sounds/snare.mp3',
      'j': './sounds/tom-4.mp3',
      'k': './sounds/tom-2.mp3',
      'l': './sounds/crash.mp3'
    };
    
    if (audioMap.hasOwnProperty(key)) {
      var audio = new Audio(audioMap[key]);
      audio.play();
    }
  }
  
  function buttonCLK(click) {
    var keyClass = '.' + click;
    document.querySelector(keyClass).classList.add('push');
  
    setTimeout(function() {
      document.querySelector(keyClass).classList.remove('push');
    }, 100);
  }