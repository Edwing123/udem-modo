import { FC } from 'react'
import pinkBullet from '../assets/images/icons/list-bullet-pink.svg?raw'
import orangeBullet from '../assets/images/icons/list-bullet-orange.svg?raw'
import greenBullet from '../assets/images/icons/list-bullet-green.svg?raw'
import yellowBullet from '../assets/images/icons/list-bullet-yellow.svg?raw'
import { styled } from '../stitches.config'

const bulletsMap = {
    pink: pinkBullet,
    orange: orangeBullet,
    green: greenBullet,
    yellow: yellowBullet
}

export type BulletName = keyof typeof bulletsMap

export type ListBulletProps = {
    name: BulletName
}

const StyledContainer = styled('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const ListBullet: FC<ListBulletProps> = ({ name }) => {
    return (
        <StyledContainer
            aria-hidden='true'
            dangerouslySetInnerHTML={{ __html: bulletsMap[name] }}
        ></StyledContainer>
    )
}

export default ListBullet
