import React from 'react';
import BoardDTO from "../shared/BoardDTO";
import {observer} from "mobx-react";
import {Button, Row} from "react-bootstrap";
import './FreeBoardContainer.scss';

interface Props {
    freeBoard : BoardDTO | null,
    handleOnClickBack : () => void,
}

const FreeBoardDetailView = observer((
    {
        freeBoard,
        handleOnClickBack,
    } : Props) => {

    return (
        <div>
            <Row>No : {freeBoard?.no.split('.')[1]}</Row>
            <Row>Title : {freeBoard?.title}</Row>
            <Row>Content</Row>
            <Row>{freeBoard?.content}</Row>
            <Button variant="outline-primary" onClick={handleOnClickBack}>Back</Button>
        </div>
    );
});

export default FreeBoardDetailView;