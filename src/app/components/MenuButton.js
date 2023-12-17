import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints'

const StyledLinkButton = styled(Link)`
    font-size: 1rem;
    padding-inline: 10px;
    color: #DC8686;
    cursor: pointer;
    z-index: 3;
    display: ${(props) => props.transparentvideo ? 'block' : 'none' };
`;

const MenuButton = ({ href, text, transparentVideo }) => {
    const shouldDissapear = window.innerWidth > breakpoints.xlarge
  return (
      <StyledLinkButton href={href} transparentvideo={shouldDissapear ? transparentVideo : true}>{text}</StyledLinkButton>
  );
};

export default MenuButton;