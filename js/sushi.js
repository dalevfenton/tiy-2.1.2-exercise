var i;
var tabs = document.getElementsByClassName('tab-link');
var hoverInfo = document.querySelector('.hover-info');
console.log( hoverInfo);
// console.log(tabs);

function changeTab(){
  //set functions
  var active, unHideTab, hideTab;
  var tab, unHideId;
  // console.log(this);
  tab = this.querySelector('.control');
  active = document.querySelector('.icon-active');
  active.classList.remove('icon-active');
  active.classList.add('icon-hidden');
  // console.log( tab );
  tab.classList.add('icon-active');
  tab.classList.remove('icon-hidden');
  unHideId = '#' + tab.id.slice(8, tab.id.length);
  // console.log(unHideId);
  unHideTab = document.querySelector(unHideId);
  hideTab = document.querySelector('.tab-active');
  // console.log(unHideTab);
  // console.log(hideTab);
  hideTab.style.display = 'none';
  hideTab.classList.remove('tab-active');
  hideTab.classList.add('tab-hidden');
  unHideTab.style.display = 'block';
  unHideTab.classList.remove('tab-hidden');
  unHideTab.classList.add('tab-active');
}

for(i=0; i < tabs.length; i++){
  tabs[i].addEventListener('click', changeTab);
}

function showHover(){
  document.querySelector('#hover-display').innerHTML = this.attributes.hovertext.value;
  document.querySelector('#hover-display').style.padding = '10px';
  console.dir(this);
  console.log(this.attributes.hovertext.value);
}

function hideHover(){
  document.querySelector('#hover-display').innerHTML = '';
  document.querySelector('#hover-display').style.padding = '0';
}
hoverInfo.addEventListener('mouseenter', showHover );
hoverInfo.addEventListener('mouseleave', hideHover );
