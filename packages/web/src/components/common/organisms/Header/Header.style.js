import styled from 'styled-components';

const HeaderBrand = styled.div`
  box-sizing: border-box;
  height: 129px;
  padding-top: 31px;
  text-align: center;

  @media ${props => props.theme.mediaQuery.mediumMax} {
    .header-brand__home-logo--brand {
      display: none;
    }
  }
`;

const HeaderNav = styled.div`
  position: relative;
`;
const DummyNav = styled.div`
  color: ${props => props.theme.colors.PRIMARY.DARK};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.fonts.secondaryFontFamily};
  font-size: ${props => props.theme.fonts.fontSize.nav}px;
  font-weight: ${props => props.theme.fonts.fontWeight.semiBold};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 10px 0;

  @media ${props => props.theme.mediaQuery.mediumMax} {
    display: none;
  }
`;

const HeaderPromo = styled.div`
  background-color: ${props => props.theme.colors.PRIMARY.PALEGRAY};
  border-top: 1px solid ${props => props.theme.colors.PRIMARY.LIGHTGRAY};
  box-sizing: border-box;
  height: 60px;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
`;

const HeaderLoyalty = styled.div`
  background-color: ${props => props.theme.colors.PRIMARY.LIGHTGRAY};
  padding: 36px 0;
  text-align: center;
  text-transform: uppercase;
`;

const headerStyles = {
  HeaderBrand,
  HeaderNav,
  DummyNav,
  HeaderPromo,
  HeaderLoyalty,
};

export default headerStyles;
