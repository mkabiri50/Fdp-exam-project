import React, { Component } from 'react';
import { Stage, Layer, Rect, Line, } from 'react-konva';
class Rec extends Component {
    state = {
        scales: {
            w: {
                value: 500
            },
            h: {
                value: 200
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
        const w = this.state.scales.w.value
        const h = this.state.scales.h.value
        const t = this.state.scales.t.value
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
                        <p style={{ margin: 20 }}>height</p>
                        <input
                            type='text'
                            name='h'
                            value={this.state.scales.h.value}
                            onChange={this.myChangeHandler}
                        />
                        <p style={{ margin: 20 }}>tickness</p>
                        {/* <input
                            type='text'
                            name='t'
                            value={this.state.scales.t.value}
                            onChange={this.myChangeHandler}
                        /> */}
                    </form>
                </div>


                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>

                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}

            
                            points={[-w / 2, -h / 2, w / 2, -h / 2, w / 2 - t, -h / 2 + t, -w / 2 + t, -h / 2 + t]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'
                            onClick={() => this.handleClick(1)}
                            fill='#eee'
                        />

                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[w / 2, -h / 2, w / 2, h / 2, w / 2 - t, h / 2 - t, w / 2 - t, -h / 2 + t]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(2)}
                            fill='#eee'
                        />
                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[(w / 2), (h / 2), (-w / 2), (h / 2), (-w / 2) + t, (h / 2) - t, (w / 2) - t, (h / 2) - t]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(3)}
                            fill='#eee'
                        />
                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[(-w / 2), h / 2, (-w / 2), (-h / 2), (-w / 2) + t, (-h / 2) + t, (-w / 2) + t, (h / 2) - t]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(4)}
                            fill='#eee'
                        />
                        <Rect
                            x={this.state.origin[0] - w / 2 + t}
                            y={this.state.origin[1] - h / 2 + t}

                            width={(w - 2 * t)}
                            height={(h - 2 * t)}
                            fill='#8FD4F1'
                        />


                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}


                            points={[(-w / 2) + t, (-h / 2) + t, (w / 2) - t, (-h / 2) + t, (w / 2) - t * 1.3, (-h / 2) + t * 1.3, (-w / 2) + t * 1.3, (-h / 2) + t * 1.3]}
                            closed
                            stroke='black'
                            strokeWidth={1}
                            lineJoin='miter'
                            onClick={() => this.handleClick(1)}
                            fill='#bbb'
                        />
                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[w / 2 - t, -h / 2 + t, w / 2 - t, h / 2 - t, w / 2 - t * 1.3, h / 2 - t * 1.3, w / 2 - t * 1.3, -h / 2 + t*1.3]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(2)}
                            fill='#bbb'
                        />

                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[(w / 2)-t, (h / 2)-t, (-w / 2)+t, (h / 2)-t, (-w / 2) + t*1.3, (h / 2) - t*1.3, (w / 2) - t*1.3, (h / 2) - t*1.3]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(3)}
                            fill='#bbb'
                        />
                   <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[(-w / 2)+t, h / 2-t, (-w / 2)+t, (-h / 2)+t, (-w / 2) + t*1.3, (-h / 2) + t*1.3, (-w / 2) + t*1.3, (h / 2) - t*1.3]}
                            closed
                            stroke='black'
                            strokeWidth={2}
                            lineJoin='miter'

                            onClick={() => this.handleClick(4)}
                            fill='#bbb'
                        />

                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}

                            points={[-10, 0, 10, 0]}
                            stroke='#2A8AE1'
                            strokeWidth={2}
                        />
                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[0, - 10, 0, 10]}
                            stroke='#2A8AE1'
                            strokeWidth={2}
                        />
                    </Layer>
                </Stage>
            </React.Fragment>
        );
    }
}
export default Rec;