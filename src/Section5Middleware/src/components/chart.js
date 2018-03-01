import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function(props) {
    const HEIGHT = 120;
    const WIDTH = 180;
    return (
        <Sparklines height={HEIGHT} width={WIDTH} data={props.values}>
            <SparklinesLine color={props.color} />
        </Sparklines>
    );
}
