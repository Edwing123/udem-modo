import { Link } from 'react-router-dom'
import { styled, css } from '../stitches.config'
import { Sidebar, ListBullet } from '.'
import homeworks from '../data/homeworks.json'
import type { BulletName } from '.'
import type { Status } from '../types'

const ItemContent = styled('article', {
    padding: '10px 0'
})

const StyledTitle = styled('h3', {
    marginBottom: '10px',

    fontSize: '$sidebarHomework',
    fontWeight: '$medium',
    color: '$sidebarHomeworkNameText'
})

const linkStyles = css({
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px'
})()

const DetailsContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '6px'
})

const DetailsItem = styled('span', {
    padding: '4px',

    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '$sidebarHomeworkDetailBg',
    color: '$sidebarHomeworkDetailText',
    fontSize: '$homeworkDetail',
    borderRadius: '$sm'
})

const statusToBulletNameMap: {
    [key in Status]: BulletName
} = {
    done: 'green',
    pending: 'yellow',
    late: 'orange'
}

const HomeworksList = () => {
    return (
        <Sidebar.List>
            {homeworks.map(
                ({ id, title, status, createdAt, dueTo, className }) => (
                    <Sidebar.Item key={id}>
                        <ItemContent>
                            <Link to='/' className={linkStyles}>
                                <ListBullet
                                    name={
                                        statusToBulletNameMap[status as Status]
                                    }
                                />
                                <StyledTitle>{title}</StyledTitle>
                            </Link>
                            <DetailsContainer>
                                <DetailsItem>Desde {createdAt}</DetailsItem>
                                <DetailsItem>Hasta {dueTo}</DetailsItem>
                                <DetailsItem>
                                    <Link to='/' title={className}>
                                        <Sidebar.EllipsisText
                                            css={{ display: 'block' }}
                                        >
                                            {className}
                                        </Sidebar.EllipsisText>
                                    </Link>
                                </DetailsItem>
                                <DetailsItem>{status}</DetailsItem>
                            </DetailsContainer>
                        </ItemContent>
                    </Sidebar.Item>
                )
            )}
        </Sidebar.List>
    )
}

export default HomeworksList
