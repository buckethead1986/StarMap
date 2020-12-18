import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import Knight from "./Knight";
import Bishop from "./Bishop";
import BoardSquare from "./BoardSquare";
import { moveKnight, canMoveKnight, moveBishop } from "./Game";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: "12.5%", height: "4em" }}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    console.log(this.props);
    const [knightX, knightY] = this.props.knightPosition;
    // const [bishopX, bishopY] = this.props.bishopPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
    // if (x === bishopX && y === bishopY) {
    //   return <Bishop />;
    // }
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

export default DragDropContext(HTML5Backend)(Board);
