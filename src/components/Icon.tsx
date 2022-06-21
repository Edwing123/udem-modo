import { FC } from 'react'
import homeIcon from '../assets/images/icons/home.svg?raw'
import classesIcon from '../assets/images/icons/classes.svg?raw'
import homeworksIcon from '../assets/images/icons/homeworks.svg?raw'
import messagesIcon from '../assets/images/icons/messages.svg?raw'
import notificationsIcon from '../assets/images/icons/notifications.svg?raw'
import attachmentIcon from '../assets/images/icons/attachment.svg?raw'

import { styled } from '../stitches.config'

const iconsMap = {
    home: homeIcon,
    classes: classesIcon,
    homeworks: homeworksIcon,
    messages: messagesIcon,
    notifications: notificationsIcon,
    attachment: attachmentIcon
}

type IconProps = {
    name: keyof typeof iconsMap
}

const StyledContainer = styled('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Icon: FC<IconProps> = ({ name }) => {
    return (
        <StyledContainer
            aria-hidden='true'
            dangerouslySetInnerHTML={{ __html: iconsMap[name] }}
        ></StyledContainer>
    )
}

export default Icon
