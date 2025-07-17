let selectedLanguage = "auto";
let selectedLanguage2 = "en";
const languages = [
{name: "Detect language", code: "auto"},
{name: "English", code: "en"},
{name: "Spanish", code: "es"},
{name: "Russian", code: "ru"},
{name: "Arabic", code: "ar"},
{name: "Hindi", code: "hi"},
{name: "German", code: "de"},
{name: "French", code: "fr"},
{name: "Chinese", code: "zh"},
{name: "Japanese", code: "ja"},
{name: "Korean", code: "ko"}
// Add more as needed...
];
// getting the container elemnets
const inputTextElement = document.querySelector('.input_text');
const translatedTextElement = document.querySelector('.translated_text');

const languageListDiv = document.getElementById("languageList");
const languagelistDiv2 = document.getElementById("languageList2")

const searchInput = document.getElementById("languagesearch");
const searchInput2 = document.getElementById("languagesearch2");

const  selectedLanguagebtn = document.getElementById("selectedLanguageBtn");
const  selectedLanguagebtn2 = document.getElementById("selectedLanguageBtn2");

const textToTranslate = inputTextElement.value.trim();
languages.forEach(lang =>{
  const div = document.createElement("div");
  div.textContent = lang.name;
  // step 2 add click event
  div.addEventListener("click", ()=>{
    selectedLanguage = lang.code;
    console.log("selected language:", selectedLanguage);
    selectedLanguagebtn.textContent = lang.name;
    langaugeListShow.style.display = 'none';

  })
  languageListDiv.appendChild(div);
});
// adding search pattern 
searchInput.addEventListener("input", function(){
  const searchPattern = this.value.toLowerCase();
  const allDivs = languageListDiv.querySelectorAll("div");
  allDivs.forEach(div =>{
    const match = div.textContent.toLowerCase().includes(searchPattern);
    div.style.display = match ? "" : "none" 
  });
});

//second lnaguages chose 
languages.filter(lang => lang.code !== "auto").forEach(lang =>{
  const div = document.createElement("div");
  div.textContent = lang.name;
  // step 2 add click event
  div.addEventListener("click", ()=>{
    selectedLanguage2 = lang.code;
    console.log("selected language:", selectedLanguage2); 
    selectedLanguagebtn2.textContent = lang.name;
    langaugeListShow2.style.display = 'none';

  })
  languagelistDiv2.appendChild(div);
});
// adding search pattern 
searchInput2.addEventListener("input", function(){
  const searchPattern = this.value.toLowerCase();
  const allDivs = languagelistDiv2.querySelectorAll("div");
  allDivs.forEach(div =>{
    const match = div.textContent.toLowerCase().includes(searchPattern);
    div.style.display = match ? "" : "none" 
  });
});

const about = document.getElementById("infromation");
const langaugeListShow = document.getElementById("language_list")
const langaugeListShow2 = document.getElementById("language_list2")
function infoShow(){
  event.stopPropagation();
  if( about.style.display == "none"){
    about.style.display = "block";
  } else{
    about.style.display = "none";
  }
}
document.addEventListener('click', function(){
  about.style.display = 'none';
})

function showlist(){
  if (langaugeListShow.style.display == 'none'){
    langaugeListShow.style.display = 'block';
  } else{
    langaugeListShow.style.display = 'none';
  }
}
function showlist2(){
  if (langaugeListShow2.style.display == 'none'){
    langaugeListShow2.style.display = 'block';
  } else{
    langaugeListShow2.style.display = 'none';
  }
}

function changelnage() {
// Swap language codes
const temp = selectedLanguage;
selectedLanguage = selectedLanguage2;
selectedLanguage2 = temp;

// Find matching language names from the array
const lang1 = languages.find(lang => lang.code === selectedLanguage);
const lang2 = languages.find(lang => lang.code === selectedLanguage2);

// Update button text
selectedLanguagebtn.textContent = lang1 ? lang1.name : "Unknown";
selectedLanguagebtn2.textContent = lang2 ? lang2.name : "Unknown";
}

async function translateText() {
  const textToTranslate = inputTextElement.value.trim();

  if (!textToTranslate) {
    translatedTextElement.value = "";
    return;
  }

  if (selectedLanguage2 === "auto") {
    translatedTextElement.value = "Please select a valid target language.";
    return;
  }

  if (selectedLanguage === selectedLanguage2) {
    translatedTextElement.value = "Source and target languages cannot be the same.";
    return;
  }

  translatedTextElement.value = "Translating...";

  try {
    // Stronger Arabic detection
    const isArabic = /^[\u0600-\u06FF\s.,!?؛،]+$/u.test(textToTranslate);

    let sourceLang = selectedLanguage;

    if (selectedLanguage === "auto") {
      // Strong Arabic override
      sourceLang = isArabic ? "ar" : "en"; // or more advanced detection later
    }

    const langpair = `${sourceLang}|${selectedLanguage2}`;

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=${langpair}&de=your@email.com`;

    const response = await fetch(url);
    const data = await response.json();

    if (data?.responseData?.translatedText) {
      translatedTextElement.value = data.responseData.translatedText;
    } else {
      translatedTextElement.value = "Translation failed.";
      console.error("Unexpected response:", data);
    }
  } catch (error) {
    translatedTextElement.value = "Translation failed. Please try again.";
    console.error("Translation error:", error);
  }
}
