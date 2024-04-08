const modal = document.querySelector('.container');
const signInBtn = document.getElementById('pop_up');
const closeBtn = document.querySelector('.close');
signInBtn.onclick = function() {
  modal.classList.add('show');
}
closeBtn.onclick = function() {
  modal.classList.remove('show');
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('show');
  }
}