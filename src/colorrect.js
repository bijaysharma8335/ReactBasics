import React, { Component } from 'react';
import Spring, { animated } from '@react-spring/konva';
class ColorRect extends Component{
    state = { flag: false };
    handleClick = () => this.setState(state => ({ flag: !state.flag }));
    
    render() {
        const { flag } = this.state;
        return (
          <Spring
            native
            from={{ x: 0, shadowBlur: 0, fill: 'rgb(10,50,19)' }}
            to={{
              x: flag ? 150 : 50,
              shadowBlur: flag ? 25 : 5,
              fill: flag ? 'seagreen' : 'hotpink',
              width: flag ? 300 : 50,
              height: flag ? 300 : 50
            }}
          >
            {props => (
              <animated.Rect {...props} y={50} onClick={this.handleClick} />
            )}
          </Spring>
        );
      }


}
export default ColorRect;