import { css } from 'styled-components';

const AccordionHeaderStyles = css`
  font-family: ${props => props.theme.fonts.secondaryFontFamily};
  color: ${props => props.theme.colors.ACCORDION.TEXT};
  line-height: ${props => props.theme.fonts.lineHeight.medium};
  font-size: ${props => props.theme.fonts.fontSize.body.large.secondary}px;
  font-weight: ${props => props.theme.fonts.fontWeight.normal};
`;

export default AccordionHeaderStyles;
