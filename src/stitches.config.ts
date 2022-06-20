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
            bodyBgColor: '$white7',
            sectionBgColor: '$white1',
            separatorBgColor: '$black3',

            // Sidebar.
            sidebarButtonBgColor: '$white2',

            // Post creator.
            postCreatorTextareaBgColor: '$white5',
            postCreatorTextareaPlaceholder: '$white4',
            postCreatorDropdownBgColor: '$white5',
            postCreatorDropdownText: '$black1',
            postCreatorSubmitButtonBgColor: '$green1',
            postCreatorSubmitButtonText: '$white3',
            postCreatorCancelButtonText: '$orange1',
            postCreatorAttachmentButtonBgColor: '$white3',

            // Posts main title.
            postsSectionTitle: '$black1',

            // Post card.
            postCardUserNameText: '$black1',
            postCardPublishedInText: '$black2',
            postCardClassNameText: '$black1',
            postCardDate: '$white4',
            postCardHeaderAndFooterBgColor: '$white6',
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
            scale6: '2.2rem'
        },

        fontWeights: {
            regular: 400,
            medium: 600,
            bold: 700
        },

        lineHeights: {
            md: 1.5
        },

        space: {},

        shadows: {},

        radii: {
            sm: 3,
            md: 10
        }
    }
})

// The global styles that will be applied to
// the application.
export const globalStyles = globalCss({})
