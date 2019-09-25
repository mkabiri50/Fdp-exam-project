import React, { Component } from 'react';
import { Line, Layer, Stage, Arc } from 'react-konva';
class Three extends Component {
    state = {
        scales: {
            w:600,
            t: 50,
        },

        origin: [window.innerWidth / 2, window.innerHeight / 2]
    }
    render() {
        const w = this.state.scales.w.value;
        const t = this.state.scales.t.value;
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[w / 2, -w / 2, w / 2, w / 2, w / 2 - t, w / 2 - t, w / 2 - t, -w / 2 + t]}
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
                            points={[(w / 2), (w / 2), (-w / 2), (w / 2), (-w / 2) + t, (w / 2) - t, (w / 2) - t, (w / 2) - t]}
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
                            points={[(-w / 2), w / 2, (-w / 2), (-w / 2), (-w / 2) + t, (-w / 2) + t, (-w / 2) + t, (w / 2) - t]}
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

export default Three;