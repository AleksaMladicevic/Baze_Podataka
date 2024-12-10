

// 1. Funkcija Animacija

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


    // Pronaći element sa id "shapeBox"
    const shapeBox = document.getElementById('shapeBox');

    // Dodati event listener za hover (mouse enter i mouse leave)
    shapeBox.addEventListener('mouseenter', () => {
        shapeBox.style.transform = 'border-radius: 50%'; // Postepeno menja u krug
        shapeBox.style.backgroundColor = '#ff7f32'; // Menja boju na hover
    });

    shapeBox.addEventListener('mouseleave', () => {
        shapeBox.style.transform = 'border-radius: 0%'; // Vraća u kocku
        shapeBox.style.backgroundColor = '#ff5733'; // Vraća početnu boju
    });




  