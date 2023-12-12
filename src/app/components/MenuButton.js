import Link from 'next/link';
import styled from 'styled-components';

const StyledLinkButton = styled(Link)`
    font-size: 1rem;
    padding-inline: 10px;
    color: #DC8686;
    cursor: pointer;
    z-index: 3;
    display: ${(props) => props.transparentvideo ? 'block' : 'none' };
`;

const MenuButton = ({ href, text, transparentVideo }) => {
    console.log(transparentVideo, 'imm')
  return (
      <StyledLinkButton href={href} transparentvideo={transparentVideo}>{text}</StyledLinkButton>
  );
};

export default MenuButton;