

// 1. Funkcija promena boje

document.getElementById("colorCircle").addEventListener("click", function() {             //Pravimo niz boja u hex formatu
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
    
    
    let currentColor = this.style.backgroundColor;  //cita trenutnu boju i uzima je iz niza
    
     
    if (currentColor.includes("rgb")) {         // Konvertujemo currentColor u hex format
        currentColor = rgbToHex(currentColor);
    }
  
    // fixamo da pocetna boja bude crvena
    if (!currentColor) {
        currentColor = "#ff0000";
    }
  
     
    let nextColorIndex = (colors.indexOf(currentColor) + 1) % colors.length;   // Trazi sledecu boju u nizu
  
    // Postavlja sledeću boju na krug
    this.style.backgroundColor = colors[nextColorIndex];
});

// Funkcija za konvertovanje rgb u hex
function rgbToHex(rgb) {
    let result = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(rgb);
    return result ? "#" + ("0" + parseInt(result[1], 10).toString(16)).slice(-2)
                 + ("0" + parseInt(result[2], 10).toString(16)).slice(-2)
                 + ("0" + parseInt(result[3], 10).toString(16)).slice(-2) : rgb;
}


// 2. Funkcija Animacija

// Pronađi element sa ID-jem "shapeBox"
const shapeBox = document.getElementById('shapeBox');

// Dodaj event listener za klik
shapeBox.addEventListener('click', () => {
    // Menja klasu u 'triangle' ili je uklanja
    shapeBox.classList.toggle('triangle');  
});


// 2. Funkcija Scale

// Pronađi element
const scalableBox = document.getElementById('scalableBox');

// Dodaj događaj za klik
scalableBox.addEventListener('click', () => {
    scalableBox.classList.toggle('scaled'); // Dodaje ili uklanja klasu 'scaled'
});




  