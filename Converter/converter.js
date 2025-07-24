const convert = document.getElementById("convert");
      const selectVoice = document.getElementById("select_voice");
      let voices = [];

      
      function populateVoices() {
        voices = speechSynthesis.getVoices();
        selectVoice.innerHTML = '<option>Select a voice</option>'; 
        voices.forEach((voice, index) => {
          const option = document.createElement("option");
          option.value = index;
          option.textContent = `${voice.name} (${voice.lang})`;
          selectVoice.appendChild(option);
        });
      }

      
      speechSynthesis.onvoiceschanged = populateVoices;
      populateVoices();

     
      convert.addEventListener("click", () => {
        const textInput = document.getElementById("text").value;
        const selectedIndex = selectVoice.value;

        if (!textInput.trim()) return alert("Please enter text!");
        const utterance = new SpeechSynthesisUtterance(textInput);

        if (voices[selectedIndex]) {
          utterance.voice = voices[selectedIndex];
        }

        speechSynthesis.speak(utterance);
      });