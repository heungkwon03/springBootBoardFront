import {useLocalObservable} from 'mobx-react';
import React, {useCallback, useEffect, useState} from 'react';
import BoardStore from '../shared/BoardStore';
import BoardType from "../shared/BoardType";
import BoardDTO from "../shared/BoardDTO";
import FreeBoardListView from "./FreeBoardListView";
import FreeBoardDetailView from "./FreeBoardDetailView"
import {Link, useNavigate} from "react-router-dom";

interface Props {
}
const FreeBoardContainer = ({
} : Props) => {
   //
    const boardStore = useLocalObservable(() => BoardStore.instance);

    const [freeBoardDTOList, setFreeBoardDTOList] = useState<BoardDTO[]>([]);
    const [freeBoard, setFreeBoard] = useState<BoardDTO | null>(null);
    const [isDetail, setIsDetail] = useState<boolean>(false);

    const navigate = useNavigate();
    const findBoardList = async () => {
        //
        let freeBoardList : BoardDTO[];
        freeBoardList = await boardStore.findFreeBoardList(BoardType.Free);

        setFreeBoardDTOList(freeBoardList);
    }

    useEffect(() => {

        if(BoardType.Free == 'Free') {
            findBoardList().then(() => console.log('boardList OK'));
        }
    }, []);

    const handleOnClickRow = (id: string) => {
        //
        boardStore.findFreeBoard(id)
            .then(res => {
                setFreeBoard(res);
                console.log(res);
            })
            .then(() => setIsDetail(true));
    }

    const handleOnClickBack = useCallback(() => {
        setIsDetail(prev => !prev);
    }, [])

    const handleOnClickDelete = useCallback((id:string) => {
        //
        boardStore.deleteFreeBoard(id)
            .then(res => {
                console.log(res);
            })
            .then(() => findBoardList())
    }, [])

    const handleOnClickCreateBoard = () => {
        navigate('/register/Free');
    }

    return (
        <>
            {!isDetail ?
            <>
                <FreeBoardListView
                    freeBoardDTOList={freeBoardDTOList}
                    handleOnClickRow={handleOnClickRow}
                    handleOnClickDelete={handleOnClickDelete}
                    handleOnClickCreateBoard={handleOnClickCreateBoard}
                />
            </>
               :
            <>
                <FreeBoardDetailView
                    freeBoard={freeBoard}
                    handleOnClickBack={handleOnClickBack}
                    />
            </>
            }
        </>
    )

};

export default FreeBoardContainer;