import React, { Component } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line, Wedge, Arc } from 'react-konva';
class Arcwin extends Component {
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
        console.log(this.state)
        const w = this.state.scales.w.value;
        const t = this.state.scales.t.value;
        return (
         
     
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                    <Wedge
                            x={this.state.origin[0] - w / 2 + t}
                            y={this.state.origin[1] + w / 2 - t}
                           radius= {w-2*t}
                           angle= {90}
                           fill= '#8FD4F1'
                           stroke= 'black'
                           strokeWidth= {1}
                           rotation= {-90} />
                        <Arc
                            x={this.state.origin[0] - w / 2}
                            y={this.state.origin[1] + w / 2}
                            innerRadius={w - t}
                            outerRadius={w}
                            angle={-90}
                            stroke='black'
                            strokeWidth={1}
                            offset
                            clockwise
                            fill='#eee'
                            onClick={() => this.handleClick(1)}
                        />
                         <Arc
                            x={this.state.origin[0] - w / 2}
                            y={this.state.origin[1] + w / 2}
                            innerRadius={w - t*1.3}
                            outerRadius={w-t}
                            angle={-90}
                            stroke='black'
                            strokeWidth={.5}
                            offset
                            clockwise
                            fill='#eee'
                            onClick={() => this.handleClick(1)}
                        />
                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[w / 2, w / 2, -w / 2, w / 2, -w / 2 + t, w / 2 - t, w / 2 - t, w / 2 - t]}
                            closed
                            stroke='black'
                            strokeWidth={1}

                            fill='#eee'
                            onClick={() => this.handleClick(2)}
                        />
                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[-w/2,-w/2, -w/2+t,-w/2+t, -w/2+t,w/2-t, -w/2,w/2]}
                            closed
                            stroke='black'
                            strokeWidth={1}

                            fill='#eee'
                            onClick={() => this.handleClick(3)}
                        />
                     


                    
                     <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[w / 2-t, w / 2-t, -w / 2+t, w / 2-t, -w / 2 + t*1.3, w / 2 - t*1.3, w / 2 - t*1.3, w / 2 - t*1.3]}
                            closed
                            stroke='black'
                            strokeWidth={.5}

                            fill='#eee'
                            onClick={() => this.handleClick(2)}
                        />
                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[-w/2+t,-w/2+t, -w/2+t*1.3,-w/2+t*1.3, -w/2+t*1.3,w/2-t*1.3, -w/2+t,w/2-t]}
                            closed
                            stroke='black'
                            strokeWidth={.5}

                            fill='#eee'
                            onClick={() => this.handleClick(3)}
                        />

                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}

                            points={[-10, 0, 10, 0]}
                            stroke='#2A8AE1'
                            strokeWidth={1}
                        />
                        <Line
                            x={this.state.origin[0]}
                            y={this.state.origin[1]}
                            points={[0, - 10, 0, 10]}
                            stroke='#2A8AE1'
                            strokeWidth={1}
                        />
              </Layer>
                </Stage>
          

        );
    }
}

export default Arcwin;