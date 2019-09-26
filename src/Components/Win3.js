import React, { Component } from 'react';
import { Stage, Layer, Line, Arc, Wedge, Shape } from 'react-konva'
class Win3 extends Component {
    state = {
        scales: {
            w: {
                value: 500
            },
            t: {
                value: 10
            },
        },

        origin: [window.innerWidth / 2, window.innerHeight / 2]

    }
   
    handleClick = (id) => {
        alert('element :' + id)
    };

    render() {
        const w = this.state.scales.w.value;
        const t = this.state.scales.t.value;
        const h = (w * Math.sqrt(3) / 2 - w / 2) * 2
        const origin = [window.innerWidth / 2, window.innerHeight / 2]
        return (
            
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Shape
                            sceneFunc={(context, shape) => {
                                context.beginPath();
                                context.moveTo(origin[0]+(-w / 2) , origin[1]+(-h / 2) );
                                context.lineTo(origin[0]+(-w / 2) + t, origin[1]+(-h / 2) +t / Math.sqrt(3) );
                                context.quadraticCurveTo(origin[0],origin[1]-w/2+t, origin[0]+w / 2-t, origin[1]-h/ 2+t / Math.sqrt(3));
                                context.lineTo(origin[0]+w / 2 , origin[1]+(-h / 2)  );
                                context.quadraticCurveTo(origin[0],origin[1]-w/2, origin[0]+(-w / 2) , origin[1]+(-h / 2));
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="#eee"
                            stroke="black"
                            strokeWidth={1}
                            onClick={() => this.handleClick(1)}
                        />
                           <Shape
                            sceneFunc={(context, shape) => {
                                context.beginPath();
                                context.moveTo(origin[0]+(-w / 2) + t, origin[1]+(-h / 2) +t / Math.sqrt(3) );
                                context.lineTo(origin[0]+(-w / 2) + t, origin[1]+(+h / 2) -t  );
                                context.lineTo(origin[0]+(+w / 2) - t, origin[1]+(+h / 2) -t  );
                                context.lineTo(origin[0]+w / 2-t , origin[1]+(-h / 2) +t / Math.sqrt(3) );
                                context.quadraticCurveTo(origin[0],origin[1]-w/2+t, origin[0]-w / 2+t, origin[1]-h/ 2+t / Math.sqrt(3));
                                context.fillStrokeShape(shape);
                            }}
                            fill="#8FD4F1"
                            stroke="black"
                            strokeWidth={1}
                        />
                        <Line
                            x={origin[0]}
                            y={origin[1]}
                            points={[w / 2, -h / 2, w / 2, h / 2, w / 2 - t, h / 2 - t, w / 2 - t, -h / 2 + t / Math.sqrt(3)]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(2)}
                            fill='#eee'
                        />
                        <Line
                            x={origin[0]}
                            y={origin[1]}
                            points={[(w / 2), (h / 2), (-w / 2), (h / 2), (-w / 2) + t, (h / 2) - t, (w / 2) - t, (h / 2) - t]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(3)}
                            fill='#eee'
                        />
                        <Line
                            x={origin[0]}
                            y={origin[1]}
                            points={[(-w / 2), h / 2, (-w / 2), (-h / 2), (-w / 2) + t, (-h / 2) + t / Math.sqrt(3), (-w / 2) + t, (h / 2) - t]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(4)}
                            fill='#eee'
                        />

                    </Layer>
                </Stage>
         

        );
    }
}

export default Win3;