import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default function(props) {
    const HEIGHT = 120;
    const WIDTH = 180;
    //const average = (data) => data.reduce((a,b) => a+b) / data.length;
    const average = data => _.round(_.sum(data) / data.length);
    return (
        <div>
            <Sparklines height={HEIGHT} width={WIDTH} data={props.values}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            avg: {average(props.values) + ' ' + props.unit}
        </div>
    );
}
