import React from 'react';
import { DivMainCard } from './styledCard';

export default function Card({ img, title, subTitle, action }) {
    return <DivMainCard>
        <img src={img} />
        <p>{title}</p>
        <span>{subTitle}</span>
        <button onClick={action} ></button>
    </DivMainCard>;
}
