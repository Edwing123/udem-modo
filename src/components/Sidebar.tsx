import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { styled, css } from '../stitches.config'
import type { CSS } from '../stitches.config'

const StyledAside = styled('aside', {
    padding: '0 8px',

    backgroundColor: '$sectionBg',
    borderRadius: '$md',
    boxShadow: '$borderLike'
})

const StyledTitle = styled('h2', {
    margin: '15px 0',

    color: '$sidebarTitle',
    fontSize: '$sidebarTitle',
    textAlign: 'center'
})

type SidebarProps = {
    title: string
    children: ReactElement | ReactElement[]
    css?: CSS
}

export const Container: FC<SidebarProps> = ({ title, children, css }) => {
    return (
        <StyledAside css={css}>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </StyledAside>
    )
}

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

type SideBarButtonProps = {
    to: string
    children: string
}

export const Button: FC<SideBarButtonProps> = ({ to, children }) => {
    return (
        <Link to={to} className={sidebarButtonStyles}>
            {children}
        </Link>
    )
}

export const List = styled('ul', {
    listStyle: 'none'
})

export const Item = styled('li', {
    borderTop: '1px solid $separatorBg',

    '&:last-child': {
        borderBottom: '1px solid $separatorBg'
    }
})

export const EllipsisText = styled('span', {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
})
