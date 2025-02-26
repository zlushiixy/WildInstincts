function typeWriterEffect(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
       
        element.style.borderRight = 'none';
      }
    }
    type();
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
    typeWriterEffect("Find Your Inspiration.", "typingHeading", 100); 
  });
  
  // Exposure Calculator
const shutterSlider = document.getElementById('shutterSlider');
const apertureSlider = document.getElementById('apertureSlider');
const isoSlider = document.getElementById('isoSlider');
const exposureResult = document.getElementById('exposureResult');

function updateExposure() {
  const shutterSpeed = shutterSlider.value;
  const aperture = (apertureSlider.value / 10).toFixed(1);
  const iso = isoSlider.value;
  
  document.getElementById('shutterValue').textContent = `1/${shutterSpeed}`;
  document.getElementById('apertureValue').textContent = aperture;
  document.getElementById('isoValue').textContent = iso;
  
  // Determine suitable conditions
  let result = '';
  if (shutterSpeed >= 1000 && aperture <= 4 && iso <= 400) {
    result = 'Perfect for: Fast-moving wildlife in bright conditions';
  } else if (shutterSpeed >= 500 && aperture <= 5.6 && iso <= 800) {
    result = 'Good for: General wildlife photography';
  } else {
    result = 'Suitable for: Low-light or creative shots';
  }
  
  exposureResult.textContent = result;
}

shutterSlider.addEventListener('input', updateExposure);
apertureSlider.addEventListener('input', updateExposure);
isoSlider.addEventListener('input', updateExposure);

// Technique Visualizer
const techniqueBtns = document.querySelectorAll('.technique-btn');
const techniqueDisplay = document.getElementById('techniqueDisplay');

const techniqueData = {
  normal: {
    title: 'Normal Wildlife Shot',
    settings: 'Shutter: 1/1000 sec<br>Aperture: f/5.6<br>ISO: 400'
  },
  panning: {
    title: 'Panning Shot',
    settings: 'Shutter: 1/30 sec<br>Aperture: f/8<br>ISO: 200'
  },
  lowlight: {
    title: 'Low Light Shot',
    settings: 'Shutter: 1/250 sec<br>Aperture: f/2.8<br>ISO: 3200'
  }
};

techniqueBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const technique = btn.dataset.technique;
    techniqueBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    techniqueDisplay.innerHTML = `
      <div>
        <h3>${techniqueData[technique].title}</h3>
        <p>${techniqueData[technique].settings}</p>
      </div>
    `;
  });
});


window.addEventListener('load', function() {
  document.querySelector('.hero-grow').classList.add('reveal');
});

function showSuccessMessage(event) {
  event.preventDefault(); 
  document.getElementById("success-message").style.display = "block";
  document.getElementById("subscribe-form").reset(); 
}

