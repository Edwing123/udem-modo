import { Link } from 'react-router-dom'
import { styled, css } from '../stitches.config'
import {
    Container,
    Sidebar,
    ClassesList,
    HomeworksList,
    PostCreator
} from '../components'

const HomeContentContainer = styled('section', {
    position: 'relative',
    display: 'grid',
    columnGap: '40px',
    alignItems: 'start',
    gridTemplateColumns: '18% 1fr 25%',
    maxWidth: '$contentMaxWidth',
    width: '$contentWidth',
    margin: '40px auto'
})

const StyledMain = styled('main', {})

const ClassesListSidebar = () => {
    return (
        <Sidebar.Container
            title='Mis Clases'
            css={{ position: 'sticky', top: '40px' }}
        >
            <ClassesList />
            <Container css={{ margin: '20px 0', textAlign: 'center' }}>
                <Sidebar.Button to='/'>Ver todas las clases</Sidebar.Button>
            </Container>
        </Sidebar.Container>
    )
}

const HomeworksListSidebar = () => {
    return (
        <Sidebar.Container
            title='Tareas Pendientes'
            css={{ position: 'sticky', top: '40px' }}
        >
            <HomeworksList />
            <Container css={{ margin: '20px 0', textAlign: 'center' }}>
                <Sidebar.Button to='/'>Ver todas las tareas</Sidebar.Button>
            </Container>
        </Sidebar.Container>
    )
}

const Home = () => {
    return (
        <HomeContentContainer>
            <ClassesListSidebar />

            <StyledMain className='main'>
                <PostCreator />
            </StyledMain>

            <HomeworksListSidebar />
        </HomeContentContainer>
    )
}

export default Home
