  var dataPublicareElement = document.querySelector('.data-publicare');
  var dataCurenta = new Date(2015, 4, 14);
  var dataFormata = dataCurenta.toLocaleDateString('ro-RO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  var dataFormataFaraSpatii = dataFormata.trim();
  dataPublicareElement.textContent = 'Data publicării: ' + dataFormataFaraSpatii;

  document.addEventListener('keydown', function(event) {
    if (event.key === 'c' || event.key === 'C') {
      window.location.href = './form.html'; 
    }
  });