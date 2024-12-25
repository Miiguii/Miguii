// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [  
  { text: "Sé mi única", time: 2.67 },
  { text: "El nombre por el cual quiero llamarte", time: 7.28 },
  { text: "Agarrémonos de las manos y caminemos juntos", time: 14.53 },

  { text: "En una noche lluviosa, en nuestros días solitarios", time: 26.00 },
  { text: "Coloréame con tu luz brillante", time: 32.93 },
  { text: "Daré lo mejor de mí", time: 38.73 },
  { text: "Si me prometes que estaremos juntos", time: 38.73 },
  { text: "Ahora lo creo", time: 48.74 },
  { text: "La, la, la, la, la, canto una canción", time: 50.18 },
  { text: "Yo te estuve buscando, buscando, buscando", time: 56.08 },
  { text: "Mi, oh mi, oh mi, oh mi amor", time: 62.90 },

  { text: "Sé mi único amor", time: 64.83 },
  { text: "Cada paso que demos", time: 73.26 },
  { text: "Se sentirá tan bien, se sentirá como si estuviéramos bailando", time: 79.44 },
  { text: "Mi, oh mi, oh mi, oh mi amor", time: 85.11 },
  { text: "Sé mi único amor", time: 88.92 },
  { text: "Sé mi única", time: 95.79 },

  { text: "Ya no tengo que ocultar mis sentimientos, puedo decir", time: 100.36 },
  { text: "Las palabras que realmente quería decir, decirte que te amo", time: 107.52 },
  { text: "En noches agotadoras, en días tan ocupados", time: 119.44 },
  { text: "Por favor hazme lugar en tu corazón y déjame descansar en él", time: 124.93 },
  { text: "Estaré mejor", time: 130.79 },
  { text: "Si compartes tu corazón conmigo", time: 130.79 },
  { text: "Ahora lo creo", time: 140.27 },
  { text: "La, la, la, la, la, canto una canción", time: 142.18 },
  { text: "Yo te estuve buscando, buscando, buscando", time: 148.10 },
  { text: "Mi, oh mi, oh mi, oh mi amor", time: 153.87 },
  { text: "Sé mi único amor", time: 156.72 },

  { text: "Mi única, cada vez que te veo", time: 164.72 },
  { text: "Quiero apoyarme en ti, quiero tenerte", time: 170.06 },
  { text: "Con un amor así, incluso el sueño más inmaduro", time: 175.97 },
  { text: "Podría hacerse realidad", time: 187.33 },
  { text: "Ahora lo creo", time: 189.25 },
  { text: "Cada paso que demos", time: 194.57 },
  { text: "Se sentirá tan bien, se sentirá como si estuviéramos bailando", time: 200.29 },
  { text: "Mi, oh mi, oh mi, oh mi amor", time: 206.12 },
  { text: "Sé mi único amor", time: 209.08 }
];
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
      (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 25);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);