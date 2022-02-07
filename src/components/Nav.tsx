import styled from 'styled-components';
const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
    }

    ul {
        display: flex;
        justify-content: space-between;
    }
`;

export const Nav = () => {
    return(
        <NavWrapper>
            <a href="#">
                <h2>SendFundz</h2>
            </a>
            <ul>
                <li>
                    <a href="#">News</a>
                </li>
                <li>
                    <a href="#">Register</a>
                </li>
            </ul>
        </NavWrapper>
    )
}