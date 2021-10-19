import React,{Component} from "react";
import { Rect } from "react-konva";
class MyRect extends React.Component {
    changeSize = () => {
        this.rect.to({
        scaleX: Math.random() + 0.8,
        scaleY: Math.random() + 0.8,
        duration: 0.2
      });
    };
    render() {
      return (
        <Rect
          ref={node => {n
            this.rect = node;
          }}
          width={50}
          height={50}
          fill="green"
          draggable
          onDragEnd={this.changeSize}
          onDragStart={this.changeSize}
        />
      );
    }
  }
  export default MyRect;