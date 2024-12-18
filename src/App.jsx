import { useState } from 'react'
import Block from './components/block'
import Input from './components/Input';
import Button from './components/Button';
import { Pawn, Rook, Bishop, Knight, Queen, King } from './components/Piece.js';
import './App.css'

function App() {
  // const initialBoard = [
  //   ["rb1", "nb1", "bb1", "qb", "kb", "bb2", "nb2", "rb2"], // Black's pieces
  //   ["pb1", "pb2", "pb3", "pb4", "pb5", "pb6", "pb7", "pb8"], // Black's pawns
  //   [null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null],
  //   ["pw1", "pw2", "pw3", "pw4", "pw5", "ps6", "ps7", "pw8"], // White's pawns
  //   ["rw1", "nw1", "bw1", "qw", "kw", "bw2", "nw2", "rw2"], // White's pieces
  // ];

  const createBoard = () => {
    const board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));

    // Place white pieces
    board[7] = [
      new Rook("white", 1),
      new Knight("white", 1),
      new Bishop("white", 1),
      new Queen("white", 0),
      new King("white", 0),
      new Bishop("white", 2),
      new Knight("white", 2),
      new Rook("white", 2),
    ];
    let i = 1;
    board[6] = Array(8).fill(null).map(() => new Pawn("white", i++));

    // Place black pieces
    let j = 1;
    board[1] = Array(8).fill(null).map(() => new Pawn("black", j++));
    board[0] = [
      new Rook("black", 1),
      new Knight("black", 1),
      new Bishop("black", 1),
      new Queen("black", 0),
      new King("black", 0),
      new Bishop("black", 2),
      new Knight("black", 2),
      new Rook("black", 2),
    ];

    return board;
  };

  const [board, setBoard] = useState(
    createBoard
  )

  const [command, setCommand] = useState("");
  const [ipcom, setIpcom] = useState("");

  const checkCommand = (cmd) => {
    if(cmd.length == 12 && cmd.substring(3, 8) == '.step'){
      console.log(`Command acceted as ${cmd}`)
      return true;
    }
    else{
      console.log(`Enter Some valid Command`);
      return false;
    }
  }

  const movePiece = () => {
    if(checkCommand(ipcom)){
      8
    }
    else{
      return `Enter some Valid Command`
    }
  }

  const handleInput = (e) => {
    console.log(command)
    setCommand(e.target.value);
  }

  const takeInput = () => {
    setIpcom(command)
    console.log("works")
    console.log(ipcom)
    movePiece();
  }

  return (
    <>
      <div className='container w-full h-screen bg-black flex flex-col justify-around'>
        <div className='text-white self-center font-bold text-5xl'>CHESS</div>
        <div className='board text-white self-center flex flex-row gap-5'>
          <div className='board w-[400px] h-[400px] border-white border-[2px] rounded-sm grid grid-cols-8 grid-rows-8'>
            {
              board.map((row, rowIdx) => 
                row.map((col, colIdx) => (
                  <Block key={`${rowIdx}-${colIdx}`} text={col ? col.name : ``} bgc={(rowIdx + colIdx) % 2 ? `Gray` : `lightGray`}/>
                ))
              )
            }
          </div>
          <div className='ipwindow w-[100px] h-[400px] border-white border-[2px] rounded-sm flex flex-col justify-evenly'>
            <Input fxns = {handleInput} />
            <Button text={"Submit"} fxns = {takeInput} />
          </div>
        </div>
        <div className='result text-white self-center w-[522px] h-[100px] border-white rounded-sm border-[2px]'>
          Result
        </div>
      </div>
    </>
  )
}

export default App
