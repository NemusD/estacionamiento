// Función para obtener la lista de estacionamientos
async function getParkings() {
    const response = await fetch('/parkings');
    const data = await response.json();
    return data;
  }
  
  // Función para mostrar la lista de estacionamientos en la página
  function displayParkings(parkings) {
    const parkingsList = document.querySelector('.parkings-list');
    parkingsList.innerHTML = '';
    parkings.forEach(parking => {
      const parkingItem = `
        <li>
          <h2>${parking.name}</h2>
          <p>${parking.address}</p>
          <p>Disponible: ${parking.available}</p>
          <button class="reserve-button" data-id="${parking._id}">Reservar</button>
        </li>
      `;
      parkingsList.insertAdjacentHTML('beforeend', parkingItem);
    });
  }
  
  // Función para manejar la reserva de un estacionamiento
  async function reserveParking(parkingId) {
    const response = await fetch(`/parkings/${parkingId}/reserve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId: '123'})
    });
    const data = await response.json();
    return data;
  }
  
  // Función para manejar el click en el botón de reserva
  function handleReserveButton(event) {
    const parkingId = event.target.getAttribute('data-id');
    reserveParking(parkingId).then(data => {
      alert(data.message);
      getParkings().then(parkings => displayParkings(parkings));
    });
  }
  
  // Función para manejar la carga inicial de la página
  async function init() {
    const parkings = await getParkings();
    displayParkings(parkings);
    const reserveButtons = document.querySelectorAll('.reserve-button');
    reserveButtons.forEach(button => {
      button.addEventListener('click', handleReserveButton);
    });
  }
  
  // Inicializar la aplicación
  init();
  