import React from 'react';
import Card from '../../components/card/card';
import { DivMain } from '../../components/commons';
import { DivCards } from './styledDashboard';

export default function Dashboard() {
    return <DivMain>
        <h1>Dashboard</h1>
        <input placeholder="Hey Samantha, Let's get ready for next class." />
        <ul>
            <li>Remaing</li>
            <li>Ongoing</li>
            <li>Completed</li>
        </ul>
        <DivCards>
            <Card img={"https://uxstudioteam.com/website/wp-content/uploads/2019/09/Best-Online-UX-Courses-1-720x420.png"}
                title={"Curso de UX/UI"}
                subTitle={"03 classe"}
            />
            <Card img={"https://uxstudioteam.com/website/wp-content/uploads/2019/09/Best-Online-UX-Courses-1-720x420.png"}
                title={"Curso de UX/UI"}
                subTitle={"03 classe"}
            />
            <Card img={"https://uxstudioteam.com/website/wp-content/uploads/2019/09/Best-Online-UX-Courses-1-720x420.png"}
                title={"Curso de UX/UI"}
                subTitle={"03 classe"}
            />
        </DivCards>
    </DivMain>;
}