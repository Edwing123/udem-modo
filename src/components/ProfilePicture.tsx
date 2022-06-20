import { Link } from 'react-router-dom'
import { styled } from '../stitches.config'

const StyledImage = styled('img', {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '100%',
    verticalAlign: 'top'
})

const ProfilePicture = () => {
    return (
        <Link to='/' title='Ajustes de usuario' aria-label='Ajustes de usuario'>
            <StyledImage
                aria-hidden='true'
                src='/assets/edwin-profile-picture.webp'
            />
        </Link>
    )
}

export default ProfilePicture
