import styled from 'styled-components';

export const DivMainRouter = styled.div`
    height:100%;
    width:100%;
    display:flex;
    overflow:hidden;
`;
export const DivMain = styled.div`
    color:#f5f5f5;
    width:100%;
    padding: 20px;

    input{
        width:100%;
        height:30px;
        padding:0 5px;
    }
    ul{
        list-style:none;
        display:flex;
        padding:0px;
        li{
            margin-left:48px;
            :nth-child(1){
                margin-left:0px;
            }
        }
    }
`;
