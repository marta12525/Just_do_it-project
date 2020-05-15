//hamburger
function toggleMenu (visible) {
  document.querySelector('.sidebar').classList.toggle('sidebar-show', visible);
  document.querySelector('.topbar-media').classList.toggle('topbar-media-show', visible);
}
  
document.querySelector('.hamburger-btn').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
/*
//modals
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}
  
document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});
  
//close modal by clicking the background
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});
  
//close modal by clicking Esc
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});
  
//opening modal
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}
  
document.querySelector('.modalBtn').addEventListener('click', function (e) {
  e.preventDefault();
  openModal('#myModal');
});
*/

//chart
const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09' ],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 350, 200, 250, 350, 450, 400, 300, 290, 320 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 400, 150, 300, 250, 450, 120, 200, 500, 300 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 600 ],
      // 7
      hidden: true,
    }]
  },
  responsive: true,
  maintainAspectRatio: false,
});

chart();
