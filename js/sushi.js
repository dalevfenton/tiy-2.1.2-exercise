var i;
var tabs = document.getElementsByClassName('tab-link');
var active, activeTab, unHideTab, hideTab;
var tab, unHideId;
console.log(tabs);

function changeTab(){
  console.log(this);
  tab = this.querySelector('.control');
  active = document.querySelector('.icon-active');
  active.classList.remove('icon-active');
  active.classList.add('icon-hidden');
  console.log( tab );
  tab.classList.add('icon-active');
  tab.classList.remove('icon-hidden');
  unHideId = '#' + tab.id.slice(4, tab.id.length);
  console.log(unHideId);
  unHideTab = document.querySelector(unHideId);
  hideTab = document.querySelector('.tab-active');
  console.log(unHideTab);
  console.log(hideTab);
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
