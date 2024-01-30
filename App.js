// App.js
let text = '';
let emoji = '';
let color = '#000000';
let background = '#FFFFFF';
let background2 = '#FFFFFF';
let title = '';
let rainbow = false;
let font = 'Delicious Handrawn';

function handleSubmit(event) {
  event.preventDefault();

  const url = `https://iakzs.is-a.dev/alettertoyou?text=${encodeURIComponent(text)}&emoji=${encodeURIComponent(emoji)}&color=${encodeURIComponent(color)}&background=${encodeURIComponent(background)}&background2=${encodeURIComponent(background2)}&title=${encodeURIComponent(title)}&israinbow=${encodeURIComponent(rainbow)}&font=${encodeURIComponent(font)}`;

  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('customize-form');
  const rainbowInput = document.getElementById('rainbow-input');

  if (form && rainbowInput) {
    form.addEventListener('submit', handleSubmit);
    rainbowInput.addEventListener('change', (event) => {
      const backgroundInput = document.getElementById('background-input');
      const background2Input = document.getElementById('background2-input');
      const rainbowChecked = event.target.checked;
      if (backgroundInput && background2Input) {
        backgroundInput.disabled = rainbowChecked;
        background2Input.disabled = rainbowChecked;
      }
    });
  } else {
    console.error('El formulario o el input de arcoíris no se encontraron en el DOM.');
  }

});
