import { styled } from '../stitches.config'
import { PageLogo, Container, Navigation, ProfilePicture, Icon } from '.'

const StyledHeader = styled('header', {
    padding: '16px  0',
    backgroundColor: '$sectionBg'
})

const NotificationsButton = styled('button', {
    marginLeft: 'auto',
    marginRight: '30px',

    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer'
})

const Header = () => {
    return (
        <StyledHeader className='header'>
            <Container
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: '$contentMaxWidth',
                    width: '$contentWidth',
                    margin: '0 auto'
                }}
            >
                <PageLogo />
                <Navigation />
                <NotificationsButton
                    title='Notificaciones'
                    aria-label='Notificaciones'
                >
                    <Icon name='notifications' />
                </NotificationsButton>
                <ProfilePicture />
            </Container>
        </StyledHeader>
    )
}

export default Header
