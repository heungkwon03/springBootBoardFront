import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const Header = () => {

    return (
        <div>
            <Link to="/">
                <h1>헤더 입니다.</h1>
                <div>
                    <Button><Link to="/Free">자유게시판</Link></Button>
                    <Button><Link to="/Notice">공지사항</Link></Button>
                    <Button><Link to="/QnA">질문게시판</Link></Button>
                    <Button><Link to="/FAQ">자주하는 질문게시판</Link></Button>
                </div>
            </Link>
        </div>
    );
}

export default Header;