// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [  { text: "Sé mi única", time: 5.67 },
  { text: "El nombre por el cual quiero llamarte", time: 10.28 },
  { text: "Agarrémonos de las manos y caminemos juntos", time: 17.53 },

  { text: "En una noche lluviosa, en nuestros días solitarios", time: 29.00 },
  { text: "Coloréame con tu luz brillante", time: 34.93 },
  { text: "Daré lo mejor de mí", time: 40.73 },
  { text: "Si me prometes que estaremos juntos", time: 40.73 },
  { text: "Ahora lo creo", time: 50.74 },
  { text: "La, la, la, la, la, canto una canción", time: 52.18 },
  { text: "Yo te estuve buscando, buscando, buscando", time: 58.08 },
  { text: "Mi, oh mi, oh mi, oh mi amor", time: 64.90 },

  { text: "Sé mi único amor", time: 66.83 },
  { text: "Cada paso que demos", time: 75.26 },
  { text: "Se sentirá tan bien, se sentirá como si estuviéramos bailando", time: 81.44 },
  { text: "Mi, oh mi, oh mi, oh mi amor", time: 87.11 },
  { text: "Sé mi único amor", time: 90.92 },
  { text: "Sé mi única", time: 98.79 },

  { text: "Ya no tengo que ocultar mis sentimientos, puedo decir", time: 103.36 },
  { text: "Las palabras que realmente quería decir, decirte que te amo", time: 110.52 },
  { text: "En noches agotadoras, en días tan ocupados", time: 122.44 },
  { text: "Por favor hazme lugar en tu corazón y déjame descansar en él", time: 127.93 },
  { text: "Estaré mejor", time: 133.79 },
  { text: "Si compartes tu corazón conmigo", time: 133.79 },
  { text: "Ahora lo creo", time: 143.27 },
  { text: "La, la, la, la, la, canto una canción", time: 145.18 },
  { text: "Yo te estuve buscando, buscando, buscando", time: 151.10 },
  { text: "Mi, oh mi, oh mi, oh mi amor", time: 156.87 },
  { text: "Sé mi único amor", time: 159.72 },

  { text: "Mi única, cada vez que te veo", time: 167.72 },
  { text: "Quiero apoyarme en ti, quiero tenerte", time: 173.06 },
  { text: "Con un amor así, incluso el sueño más inmaduro", time: 178.97 },
  { text: "Podría hacerse realidad", time: 190.33 },
  { text: "Ahora lo creo", time: 192.25 },
  { text: "Cada paso que demos", time: 197.57 },
  { text: "Se sentirá tan bien, se sentirá como si estuviéramos bailando", time: 203.29 },
  { text: "Mi, oh mi, oh mi, oh mi amor", time: 209.12 },
  { text: "Sé mi único amor", time: 212.08 }
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

