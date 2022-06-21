import { Link } from 'react-router-dom'
import { styled, css } from '../stitches.config'
import {
    Container,
    Sidebar,
    ClassesList,
    HomeworksList,
    PostCreator
} from '../components'

const StyledSection = styled('section', {
    display: 'grid',
    columnGap: '40px',
    alignItems: 'start',
    gridTemplateColumns: '18% 1fr 25%',

    position: 'relative'
})

const StyledMain = styled('main', {
    backgroundColor: '$sectionBg',
    borderRadius: '$md'
})

const sidebarButtonStyles = css({
    display: 'inline-block',
    padding: '1em 2em',

    borderRadius: '$sm',
    fontSize: '$sidebarButton',
    fontWeight: '$medium',
    color: '$sidebarButtonText',
    backgroundColor: '$sidebarButtonBg',

    '&:hover': {
        backgroundColor: '$white4'
    }
})()

const Home = () => {
    return (
        <Container
            css={{
                maxWidth: '$contentMaxWidth',
                width: '$contentWidth',
                margin: '40px auto'
            }}
        >
            <StyledSection>
                <Sidebar.Container title='Mis Clases'>
                    <ClassesList />
                    <Container css={{ margin: '20px 0', textAlign: 'center' }}>
                        <Sidebar.Button to='/'>
                            Ver todas las clases
                        </Sidebar.Button>
                    </Container>
                </Sidebar.Container>

                <StyledMain className='main'>
                    <h2>Hello World</h2>
                </StyledMain>

                <Sidebar.Container title='Tareas Pendientes'>
                    <HomeworksList />
                    <Container css={{ margin: '20px 0', textAlign: 'center' }}>
                        <Sidebar.Button to='/'>
                            Ver todas las tareas
                        </Sidebar.Button>
                    </Container>
                </Sidebar.Container>
            </StyledSection>
        </Container>
    )
}

export default Home
