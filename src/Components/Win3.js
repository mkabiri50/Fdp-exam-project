import React, { Component } from 'react';
import { Stage, Layer, Line, Arc, Wedge } from 'react-konva'
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
    myChangeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            scales: {
                ...this.state.scales,
                [name]: {
                    ...this.state.scales[name],
                    value
                }
            }
        });

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
            <React.Fragment>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <h1>PFD</h1>
                        <p style={{ margin: 20 }}>width:</p>
                        <input
                            type='text'
                            name='w'
                            value={this.state.scales.w.value}
                            onChange={this.myChangeHandler}
                        />
                    </form>
                </div>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Wedge
                              x={origin[0]}
                              y={origin[1] + w / 2}
                            radius={w - 2 * t}
                            angle={60}
                            fill='#8FD4F1'
                            stroke='black'
                            strokeWidth={1}
                            rotation={-120} />
                        <Arc
                            x={origin[0]}
                            y={origin[1] + w / 2}
                            innerRadius={w - t}
                            outerRadius={w}
                            angle={-60}
                            stroke='black'
                            strokeWidth={2}
                            offset
                            clockwise
                            fill='#eee'
                            onClick={() => this.handleClick(1)}
                            rotation={-60}
                            lineCap='bevel'
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
            </React.Fragment>

        );
    }
}

export default Win3;