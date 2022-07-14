import notificationIcon from '../../assets/notification-icon.svg'

export function NotificationButton() {
  return (
    <button className="notification-button">
      <img src={notificationIcon} alt="Sino de notificação" />
    </button>
  )
}
