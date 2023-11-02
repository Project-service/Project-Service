import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

function Chatbot() {
  const [steps, setSteps] = useState([
    {
      id: 'intro',
      message: '안녕하세요! 맨체스터시티 OSC MCS에 오신 것을 환영합니다. 무엇을 도와드릴까요?',
      trigger: 'menu',
    },
    {
      id: 'menu',
      options: [
        { value: 'introduction', label: '단체 소개', trigger: 'introduction' },
      ],
    },
    {
      id: 'introduction',
      message: '맨체스터시티 OSC MCS는 ... (소개 내용)',
    },
    {
      id: 'rules',
      message: '맨체스터시티 OSC MCS 회칙은 ... (회칙 내용)',
 
    },
    {
      id: 'joinMethod',
      message: '맨체스터시티 OSC MCS 가입 방법은 ... (가입 방법 내용)',
   
    },
    {
      id: 'contact',
      message: '맨체스터시티 OSC MCS 연락 방법은 ... (연락 방법 내용)',

    },
  ]);

  return (
    <ChatBot
      steps={steps}
      floating
    />
  );
}

export default Chatbot;
