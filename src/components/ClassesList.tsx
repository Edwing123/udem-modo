import { Link } from 'react-router-dom'
import { styled } from '../stitches.config'
import { ListBullet, Sidebar } from '.'
import classes from '../data/classes.json'

const ItemContent = styled('span', {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 0',

    color: '$sidebarClassNameText',
    fontSize: '$sidebarClassName',
    fontWeight: '$medium',

    '&:hover': {
        backgroundColor: '$white3'
    }
})

const ClassesList = () => {
    return (
        <Sidebar.List>
            {classes.map((className) => (
                <Sidebar.Item key={className}>
                    <Link to='/' title={className}>
                        <ItemContent>
                            <ListBullet name='pink' />
                            <Sidebar.EllipsisText>
                                {className}
                            </Sidebar.EllipsisText>
                        </ItemContent>
                    </Link>
                </Sidebar.Item>
            ))}
        </Sidebar.List>
    )
}

export default ClassesList
