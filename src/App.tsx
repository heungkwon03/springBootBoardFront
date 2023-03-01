import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import FreeBoardContainer from './free/FreeBoardContainer';
// import NoticeContainer from './notice/';
import NotFound from "./NotFound";
import BoardType from "./shared/BoardType";
import {Container} from "react-bootstrap";
import FreeBoardDetailView from "./free/FreeBoardDetailView";
import FreeBoardRegisterView from "./free/FreeBoardRegisterView";
// import QnAContainer from "./qna/QnAContainer";
// import FAQContainer from "./faq/FAQContainer";

//routes로 따로 빼서 만들어 줄 것
const App = () => {
  return (
      <Container>
      <div className='App'>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/Free" element={<FreeBoardContainer/>}></Route>
                  {/*<Route path="/Notice" element={<NoticeContainer />}></Route>*/}
                  {/*<Route path="/QnA" element={<QnAContainer />}></Route>*/}
                  {/*<Route path="/FAQ" element={<FAQContainer />}></Route>*/}
                  <Route path="/register/Free" element={<FreeBoardRegisterView/>}></Route>
                  <Route path="*" element={<NotFound/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
      </Container>
  );
}

export default App;
