import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DivMainMenu = styled.div`
    width:300px;
    background:#00060c;
    height:100%;
    color:#f5f5f5;
    padding:5px 10px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`;
export const NavLinkStyled = styled(NavLink)`
    height:40px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.5s;
    border-radius:6px;
    :hover{
        background:#141d5e;
    }
`
export const DivMainProfile = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height:200px;
    width:100%;
    padding:10px 20px;
    img{
        height:100%;
        width:100%;
    }
`
export const DivFooter = styled.div`
    height:300px;
    padding:10px 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#011220;
    border-radius:6px;
    img{
        width:100%;
        height:80%;
    }
    button{
        margin-top:20px;
        border:0;
        background:#051a30;
        color:#f5f5f5;
        padding:10px 20px;
        border-radius:6px;
    }
`
export const DivOptions = styled.div`
margin:20px 0;
`