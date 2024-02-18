import styles from './Notification.module.css'

const notificationStyle = (notificationType) => {
    const map = {
        success: styles.success,
        error: styles.error,
        none: ''
    }
    return map[notificationType] ? map[notificationType] : map.none
}

const Notification = ({notification}) => {
    if (!Object.keys(notification).length) return null
    return (
        <div className={`${styles.notification} ${notificationStyle(notification.type)}`}>
            {notification.message}
        </div>
    )
}

export default Notification