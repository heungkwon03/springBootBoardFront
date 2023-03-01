import React from 'react';
import BoardDTO from "../shared/BoardDTO";
import {observer} from "mobx-react";
import {Button, Col, Row} from "react-bootstrap";
import './FreeBoardContainer.scss';

interface Props {
    freeBoardDTOList : BoardDTO[],
    handleOnClickRow: (id: string) => void;
    handleOnClickDelete: (id: string) => void;
    handleOnClickCreateBoard: () => void;
}

const FreeBoardListView = observer((
    {
        freeBoardDTOList,
        handleOnClickRow,
        handleOnClickDelete,
        handleOnClickCreateBoard,
    } : Props) => {

    return (
        <div>
            <Row className="freeBoardDTO">
                <Col>No</Col>
                <Col>Title</Col>
                <Col>Name</Col>
                <Col>CreateDate</Col>
                <Col>Update</Col>
                <Col>Delete</Col>
            </Row>
            {
                freeBoardDTOList.map((freeBoardDTO:BoardDTO) =>
                    <Row className="freeBoardDTOList">
                       <Col>{freeBoardDTO.no.split('.')[1]}</Col>
                       <Col onClick={() => handleOnClickRow(freeBoardDTO.id)}>{freeBoardDTO.title}</Col>
                       <Col>{freeBoardDTO.name}</Col>
                       <Col>{freeBoardDTO.createDate}</Col>
                       <Col><Button variant="outline-primary">Update</Button></Col>
                       <Col><Button variant="outline-primary" onClick={() => {
                           handleOnClickDelete(freeBoardDTO.id);
                       }}>Delete</Button></Col>
                    </Row>
                )
            }
            <Button onClick={handleOnClickCreateBoard}>Create</Button>
        </div>
    );
    });

export default FreeBoardListView;