import axios from "axios"

const readAllNotifications = () => {
  const notificationIcon = document.getElementById("navbarDropdown")
  const notificationCounter = document.getElementById('notif_icons');

  if (notificationIcon && notificationCounter ){

    notificationIcon.addEventListener("click", (event) => {
      axios.get('/notifications')
           .then(() => notificationCounter.remove())
    })
  }

}



export { readAllNotifications }
