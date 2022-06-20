import { createStitches } from '@stitches/react'

/**
 * Stitches configuration.
 */
export const { styled, globalCss } = createStitches({
    theme: {
        colors: {
            // White-ish.
            white1: '#ffffff',
            white2: '#eeeeee',
            white3: '#f5f5f5',
            white4: '#acacac',
            white5: '#fcfcfc',
            white6: '#fafafa',
            white7: '#f4f4f4',

            // Black-ish.
            black1: '#333A56',
            black2: '#00092c',
            black3: 'hsla(228, 100%, 9%, 0.25)',

            // Purple-ish.
            purple1: '#764af1',

            // Green-ish.
            green1: '#00b488',

            // Orange-ish.
            orange1: '#f24c4c',

            // Blue-ish.
            blue1: '#4d77ff',

            // General purpose.
            bodyBg: '$white7',
            sectionBg: '$white1',
            separatorBg: '$black3',

            // Header.
            pageTitleText: '$purple1',
            navigationLinkText: '$black1',

            // Sidebar.
            sidebarTitle: '$black1',
            sidebarClassNameText: '$black2',
            sidebarHomeworkNameText: '$black2',
            sidebarButtonBg: '$white2',
            sidebarButtonText: '$black2',
            sidebarHomeworkDetailText: '$black2',
            sidebarHomeworkDetailBg: '$white3',

            // Post creator.
            postCreatorTextareaBg: '$white5',
            postCreatorTextareaPlaceholder: '$white4',
            postCreatorDropdownBg: '$white5',
            postCreatorDropdownText: '$black1',
            postCreatorSubmitButtonBg: '$green1',
            postCreatorSubmitButtonText: '$white3',
            postCreatorCancelButtonText: '$orange1',
            postCreatorAttachmentButtonBg: '$white3',

            // Posts main title.
            postsSectionTitle: '$black1',

            // Post card.
            postCardUserNameText: '$black1',
            postCardPublishedInText: '$black2',
            postCardClassNameText: '$black1',
            postCardDateText: '$white4',
            postCardHeaderAndFooterBg: '$white6',
            postCardLikeAndCommentText: '$black1'
        },

        fonts: {
            poppins: '"Poppins"'
        },

        fontSizes: {
            root: '62.5%',
            scale1: '1.2rem',
            scale2: '1.3rem',
            scale3: '1.4rem',
            scale4: '1.5rem',
            scale5: '1.8rem',
            scale6: '2.2rem',

            pageTitle: '$scale6',
            navigationLink: '$scale4',

            sidebarTitle: '$scale5',
            sidebarClassName: '$scale4',
            sidebarHomework: '$scale4',
            sidebarButton: '$scale3',
            homeworkDetail: '$scale1',

            postCreator: '$scale4',

            postsSectionTitle: '$scale5',
            postCardUserName: '$scale4',
            postCardClassName: '$scale4',
            postCardDate: '$scale2',
            postCardLikeAndComment: '$scale2'
        },

        fontWeights: {
            regular: 400,
            medium: 600,
            bold: 700
        },

        lineHeights: {
            md: 1.5
        },

        radii: {
            sm: 3,
            md: 10
        },

        sizes: {
            contentMaxWidth: '1200px',
            contentWidth: '95%'
        }
    }
})

// The global styles that will be applied to
// the application.
export const globalStyles = globalCss({
    '*, *::before, *::after': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    ':root': {
        fontSize: '$root',
        fontFamily: '$poppins',
        lineHeight: '$md'
    },

    'a, input, textarea, button': {
        textDecoration: 'none',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        color: 'inherit'
    },

    body: {
        backgroundColor: '$bodyBg'
    }
})
