import React from 'react';
import { DivFooter, DivMainMenu, DivMainProfile, NavLinkStyled, DivOptions } from './styledMenu';
const optionsMenu = [{ option: "Dashboard", path: "/" },
{ option: "Statistics", path: "/statistics" },
{ option: "Payments", path: "/payment" },
{ option: "Transactions", path: "/transactions" },
{ option: "Settings", path: "/settings" },
{ option: "Support", path: "/support" },
{ option: "Profile", path: "/profile" },
{ option: "Log out", path: "/logout" }]

export default function Menu() {
    return <DivMainMenu>
        <DivMainProfile>
            <span>Foto Perfil</span>
            <img src="https://as2.ftcdn.net/v2/jpg/02/13/59/51/1000_F_213595138_QiDlxrtSWGBSj3q5JsjGohaNsF9vdtft.jpg" alt="" />
        </DivMainProfile>
        <DivOptions>
            {
                optionsMenu.map(option => <NavLinkStyled to={option.path}>
                    {option.option}
                </NavLinkStyled>)
            }
        </DivOptions>
        <DivFooter>
            <img src="https://img.freepik.com/free-vector/personal-finance-concept-illustration_114360-5523.jpg?t=st=1650174578~exp=1650175178~hmac=bfb1dcda2e41b5c3ee4c94ca002dbb05acc5c2b7257551e772234249325989b6&w=1380" />
            <button>Buy Now</button>
        </DivFooter>
    </DivMainMenu>;
}
