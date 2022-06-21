import { styled } from '../stitches.config'
import logo from '../assets/images/udem-modo-logo.svg'

const StyledLink = styled('a', {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    marginRight: '50px'
})

const StyledLogo = styled('img', {
    width: '45px'
})

const StyledTitle = styled('h1', {
    color: '$pageTitleText',
    fontSize: '$pageTitle'
})

const PageLogo = () => {
    return (
        <StyledLink href='/'>
            <StyledLogo
                alt=''
                width='50'
                height='50'
                src={logo}
                aria-hidden='true'
            />
            <StyledTitle>UdeMModo</StyledTitle>
        </StyledLink>
    )
}

export default PageLogo
