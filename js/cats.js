(function(){

var hoverInfo = document.querySelector('.hover-info');
function showHover(){
  document.querySelector('#hover-display').innerHTML = this.attributes.hovertext.value;
  document.querySelector('#hover-display').style.padding = '10px';
}

function hideHover(){
  document.querySelector('#hover-display').innerHTML = '';
  document.querySelector('#hover-display').style.padding = '0';
}
hoverInfo.addEventListener('mouseenter', showHover );
hoverInfo.addEventListener('mouseleave', hideHover );

}());
