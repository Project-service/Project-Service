import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import JoinMethod from './components/JoinMethod';
import Rules from './components/Rules';

import mainlogo from './test.jpg';

//import Chatbot from './components/Chatbot'; // Chatbot 컴포넌트 임포트

function App() {
  return (
    <div className="container mt-5">
      {/* 로고 */}
      <div className="d-flex align-items-center mb-4">
      <img src={mainlogo}
          alt="My Club Logo"
          height="50"
          className="me-2"
        />
        <h1>맨체스터시티 OSC MCI</h1>
      </div>

{/* Contact, Events, Introduction, JoinMethod, News, Rules */}
      {/* 메뉴 */}
      <Tabs defaultActiveKey="Introduction" id="club-tabs">
        <Tab eventKey="Introduction" title="소개">
          <Introduction />
        </Tab>
        <Tab eventKey="Rules" title="회칙">
          <Rules />
        </Tab>
        <Tab eventKey="JoinMethod" title="가입 방법">
          <JoinMethod />
        </Tab>
        <Tab eventKey="Contact" title="연락 방법">
          <Contact />
        </Tab>
      </Tabs>

    {/*  <Chatbot /> */}
    </div>
  );
}

export default App;