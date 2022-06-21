import { styled } from '../stitches.config'
import { Container, ClassesDropdown, Icon } from '.'
import classes from '../data/classes.json'

const StyledSection = styled('section', {
    padding: '15px',
    display: 'flex',
    gap: '15px',

    backgroundColor: '$sectionBg',
    borderRadius: '$sm',
    boxShadow: '$borderLike'
})

const StyledTextarea = styled('textarea', {
    display: 'flex',
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    resize: 'vertical',

    border: 'none',
    borderRadius: '$sm',
    boxShadow: '$borderLike',
    backgroundColor: '$postCreatorTextareaBg',
    fontSize: '$postCreator',
    color: '$black2',

    '&::placeholder': {
        color: '$postCreatorTextareaPlaceholder'
    }
})

const ActionsContainer = styled('div', {
    width: 'min-content',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
})

const ActionButton = styled('button', {
    padding: '0.5em 1.5em',

    backgroundColor: 'transparent',
    fontSize: '$postCreator',
    fontWeight: '$medium',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '$sm',

    variants: {
        type: {
            submit: {
                backgroundColor: '$postCreatorSubmitButtonBg',
                color: '$postCreatorSubmitButtonText',
                $$onHoverBgColor: '$colors$postCreatorOnHoverSubmitButtonBg',

                '&:hover': {
                    backgroundColor: '$$onHoverBgColor'
                }
            },
            cancel: {
                color: '$postCreatorCancelButtonText',
                border: '1px solid currentColor',
                $$onHoverColor: '$colors$postCreatorOnHoverCancelButtonText',

                '&:hover': {
                    color: '$$onHoverColor'
                }
            }
        }
    }
})

const AttachmentButton = styled('button', {
    display: 'inline-block',
    padding: '12px',

    border: 'none',
    color: '$postCreatorCancelButtonText',
    backgroundColor: '$postCreatorAttachmentButtonBg',
    boxShadow: '$borderLike',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$postCreatorOnHoverAttachmentButtonBg'
    }
})

const PostCreator = () => {
    return (
        <StyledSection aria-label='Creador de publicaciones'>
            <Container css={{ width: '100%' }}>
                <StyledTextarea
                    aria-label='Contenido de la publicacion'
                    placeholder='Puedes comenzar a escribir...'
                    spellCheck='false'
                ></StyledTextarea>
                <Container css={{ marginBottom: '15px' }}>
                    <ClassesDropdown classes={classes} />
                </Container>
                <AttachmentButton
                    aria-label='Agregar archivos adjuntos'
                    title='Agregar archivos adjuntos'
                >
                    <Icon name='attachment' />
                </AttachmentButton>
            </Container>

            <ActionsContainer>
                <ActionButton type='submit'>Publicar</ActionButton>
                <ActionButton type='cancel'>Cancelar</ActionButton>
            </ActionsContainer>
        </StyledSection>
    )
}

export default PostCreator
