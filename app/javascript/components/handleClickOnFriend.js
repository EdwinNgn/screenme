const handleClickOnFriend = () => {

  const clickElement = document.getElementById('click-on-friend')

  if (clickElement) {
    const click = clickElement.dataset.click

    if (click) {


      const friendTab = document.getElementById('pills-friends-tab');
      friendTab.click();
      const tab = document.getElementById('tab-place')
      const position = tab.getBoundingClientRect();
      window.scroll({
        top: position.top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

export { handleClickOnFriend }
