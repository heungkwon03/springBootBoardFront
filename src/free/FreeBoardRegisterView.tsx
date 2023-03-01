import React, {useState} from 'react';
import BoardDTO from "../shared/BoardDTO";
import BoardStore from '../shared/BoardStore';
import {observer, useLocalObservable} from "mobx-react";
import {Button, Row} from "react-bootstrap";
import './FreeBoardContainer.scss';
import boardStore from "../shared/BoardStore";
import boardDTO from "../shared/BoardDTO";
import * as string_decoder from "string_decoder";

interface Props {
}

const FreeBoardRegisterView = ({
} : Props) => {
    //
    const boardStore = useLocalObservable(() => BoardStore.instance);

    const [freeBoard, setFreeBoard] = useState<BoardDTO>();

    const handleFreeBoard = (e) => {
        //
        setFreeBoard({
            ...freeBoard,
            [e.target.name] : e.target.value,
        });
    };
    
    const addFreeBoard = () => {
        //
        boardStore.addFreeBoard(freeBoard : BoardDTO)
    }



    return (
        <div>
            <Row>Title : <input name="title" onChange={handleFreeBoard}/></Row>
            <Row>Name : <input name="name" onChange={handleFreeBoard}/></Row>
            <Row>Content</Row>
            <Row><textarea name="content" onChange={handleFreeBoard}/></Row>
            <Button variant="outline-primary" onClick={() => addFreeBoard(boardDTO)}>Save</Button>
            <Button variant="outline-primary">Back</Button>
        </div>
    );
};

export default FreeBoardRegisterView;