// Tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active to clicked button
    button.classList.add('active');

    const target = button.getAttribute('data-tab');

    // Hide all panels
    tabPanels.forEach(panel => panel.classList.remove('active'));
    // Show target panel
    document.getElementById(target).classList.add('active');
  });
});
