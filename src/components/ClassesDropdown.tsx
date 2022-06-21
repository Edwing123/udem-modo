import { FC } from 'react'
import * as Select from '@radix-ui/react-select'
import { styled } from '../stitches.config'

type ClassesDropdownProps = {
    classes: string[]
}

const StyledRoot = styled(Select.Root, {})

const StyledTrigger = styled(Select.Trigger, {
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '10px',

    border: 'none',
    fontSize: '$postCreator',
    color: '$postCreatorDropdownText',
    backgroundColor: '$postCreatorDropdownBg',
    borderRadius: '$sm',
    boxShadow: '$borderLike',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$postCreatorOnHoverDropdownBg'
    }
})

const StyledContent = styled(Select.Content, {
    padding: '10px',

    backgroundColor: '$sectionBg',
    borderRadius: '$sm',
    boxShadow: '0 0 15px $colors$black3'
})

const StyledItem = styled(Select.Item, {
    padding: '10px 10px 10px 30px',
    position: 'relative',

    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '$postCreator',
    color: '$postCreatorDropdownText'
})

const StyledIndicator = styled(Select.ItemIndicator, {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '30px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px'
})

const ClassesDropdown: FC<ClassesDropdownProps> = ({ classes }) => {
    return (
        <StyledRoot defaultValue='default'>
            <StyledTrigger aria-label='Clases'>
                <Select.Value />
                <Select.Icon />
            </StyledTrigger>

            <StyledContent>
                <Select.Viewport>
                    <StyledItem value='default'>
                        <StyledIndicator>•</StyledIndicator>
                        <Select.ItemText>Seleccione una clase</Select.ItemText>
                    </StyledItem>

                    {classes.map((className) => (
                        <StyledItem key={className} value={className}>
                            <StyledIndicator>•</StyledIndicator>
                            <Select.ItemText>{className}</Select.ItemText>
                        </StyledItem>
                    ))}
                </Select.Viewport>
            </StyledContent>
        </StyledRoot>
    )
}

export default ClassesDropdown
