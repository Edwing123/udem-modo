import { NavLink } from 'react-router-dom'
import { styled } from '../stitches.config'
import { Icon } from '.'

const StyledNav = styled('nav', {
    display: 'flex',
    gap: '35px'
})

const LinkContent = styled('span', {
    display: 'flex',
    gap: '6px',

    fontSize: '$navigationLink',
    color: '$navigationLinkText'
})

const Navigation = () => {
    return (
        <StyledNav className='navigation'>
            <NavLink to='/' title='Inicio'>
                <LinkContent>
                    <Icon name='home' />
                    Inicio
                </LinkContent>
            </NavLink>

            <NavLink to='/' title='Clases'>
                <LinkContent>
                    <Icon name='classes' />
                    Clases
                </LinkContent>
            </NavLink>

            <NavLink to='' title='Tareas'>
                <LinkContent>
                    <Icon name='homeworks' />
                    Tareas
                </LinkContent>
            </NavLink>

            <NavLink to='' title='Mensajes'>
                <LinkContent>
                    <Icon name='messages' />
                    Mensajes
                </LinkContent>
            </NavLink>
        </StyledNav>
    )
}

export default Navigation
