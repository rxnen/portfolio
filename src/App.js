import logo from './logo.svg';
import pfp from './media/pfp.jpeg';
import './App.css';
import React, { useState } from 'react';

function Main() {

  const [activeTab, setActiveTab] = useState('sports');

  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };

  return (
    <div className="bg-bgBlue min-h-screen min-w-screen">


      <div className="flex flex-col justify-center h-screen" id="intro">
        <div className="my-12">
          <h1 className="text-white text-center text-5xl mb-5">hey, i'm</h1>
          <h1 className="text-textBlue text-center text-6xl md:text-7xl mb-5">Ronen</h1>
        </div>

        <div className="flex flex-col justify-center align-middle md:flex-row md:justify-evenly" id="recent">
          <a href="#about" className="text-white border-white border-2 p-4 text-center text-2xl md:text-4xl mb-8 md:mb-4 md:mx-0 mx-8 md:w-[240px]">about</a>
          <a href="#projects" className="text-white border-white border-2 p-4 text-center text-2xl md:text-4xl mb-8 md:mb-4 md:mx-0 mx-8 md:w-[240px]">projects</a>
          <a href="#contact" className="text-white border-white border-2 p-4 text-center text-2xl md:text-4xl mb-4 md:mx-0 mx-8 md:w-[240px]">contact</a>
        </div>
      </div>

      <div id="about" className="pt-12 pb-12">
        <h1 className="text-center text-5xl md:text-7xl underline text-textBlue mt-8">about me</h1>
      </div>
      <div className="flex flex-col justify-evenly items-center md:pt-6 md:flex-row">
        <h1 className="text-white max-w-4xl text-center text-xl md:text-2xl md:max-w-2xl mb-12 md:mb-0 mx-6 md:mx-0">
          I enjoy programming web, software, and mobile applications to solve genuine problems or (most of the time) for no reason at all.<br></br><br></br>
          I'm also a full-time high school student, a tennis player, an avid rock and metal listener, and love volunteer work.
        </h1>
        <div className="flex flex-col" id="skills-graph">
          <div className="flex flex-row items-center m-2">
            <h2 className="text-white text-center text-lg w-32 h-8 md:w-48 md:h-9 border-2 border-white md:text-2xl bg-textBlue">Python</h2>
            <div className="w-32 h-8 md:w-64 md:h-9 border-2 border-white">
              <div className="w-11/12 h-full bg-white"></div>
            </div>
          </div>
          <div className="flex flex-row items-center m-2">
            <h2 className="text-white text-center text-lg w-32 h-8 md:w-48 md:h-9 border-2 border-white md:text-2xl bg-textBlue">HTML/CSS</h2>
            <div className="w-32 h-8 md:w-64 md:h-9 border-2 border-white">
              <div className="w-5/6 h-full bg-white"></div>
            </div>
          </div>
          <div className="flex flex-row items-center m-2">
            <h2 className="text-white text-center text-lg w-32 h-8 md:w-48 md:h-9 border-2 border-white md:text-2xl bg-textBlue">JavaScript</h2>
            <div className="w-32 h-8 md:w-64 md:h-9 border-2 border-white">
              <div className="w-4/6 h-full bg-white"></div>
            </div>
          </div>
          <div className="flex flex-row items-center m-2">
            <h2 className="text-white text-center text-lg w-32 h-8 md:w-48 md:h-9 border-2 border-white md:text-2xl bg-textBlue">React</h2>
            <div className="w-32 h-8 md:w-64 md:h-9 border-2 border-white">
              <div className="w-4/6 h-full bg-white"></div>
            </div>
          </div>
          <div className="flex flex-row items-center m-2">
            <h2 className="text-white text-center text-lg w-32 h-8 md:w-48 md:h-9 border-2 border-white md:text-2xl bg-textBlue">Java</h2>
            <div className="w-32 h-8 md:w-64 md:h-9 border-2 border-white">
              <div className="w-3/6 h-full bg-white"></div>
            </div>
          </div>
          <div className="flex flex-row items-center m-2">
            <h2 className="text-white text-center text-lg w-32 h-8 md:w-48 md:h-9 border-2 border-white md:text-2xl bg-textBlue">SQL</h2>
            <div className="w-32 h-8 md:w-64 md:h-9 border-2 border-white">
              <div className="w-3/6 h-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
     

      <div className="pt-12 pb-12" id="projects">
        <h1 className="text-center text-5xl md:text-7xl underline text-textBlue mt-8 mb-6">my projects</h1>
        <p className="text-white text-center text-xl md:text-2xl mt-4 mx-3">these typically contain overcomplicated code and/or questionable styling</p>
      </div>

      <div className="flex flex-col justify-center md:flex-row md:justify-between mx-4 md:mb-4">

        <div className="w-3/3 md:w-1/3 mx-4 mr-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center p-6">
            <a href="https://eldersafe.app" target="_blank" className="text-white text-center underline text-3xl mb-4">ElderSafe</a>
            <h3 className="text-white text-center text-xl">React Native</h3>
          </div>
        </div>

        <div className="w-3/3 md:w-1/3 mx-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center items-center p-6">
            <a href="https://tinyvillagespirit.org" target="_blank" className="text-white text-center underline text-3xl mb-4">Tiny Village Spirit Website</a>
            <h3 className="text-white text-center text-xl">HTML/CSS • Javascript</h3>
          </div>
        </div>

        <div className="w-3/3 md:w-1/3 mx-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center items-center p-6">
            <a href="https://school.ronenjain.com" target="_blank" className="text-white text-center underline text-3xl mb-4">When Is Lunch</a>
            <h3 className="text-white text-center text-xl">HTML/CSS • Javascript</h3>
          </div>
        </div>

        </div>

      <div className="flex flex-col justify-center align-middle md:flex-row md:justify-between md:mb-4 mx-4">

        <div className="w-3/3 md:w-1/3 mx-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center items-center p-6">
            <a href="https://bullyme.ronenjain.com" target="_blank" className="text-white text-center underline text-3xl mb-4">BullyMe*</a>
            <h3 className="text-white text-center text-xl">Python • SQL</h3>
          </div>
        </div>

        <div className="w-3/3 md:w-1/3 mx-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center items-center p-6">
            <a href="https://lfm.ronenjain.com" target="_blank" className="text-white text-center underline text-3xl mb-4">Links For Me</a>
            <h3 className="text-white text-center text-xl">HTML/CSS • Javascript • Firebase</h3>
          </div>
        </div>

        <div className="w-3/3 md:w-1/3 mx-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center items-center p-6">
            <a href="https://vinyl.ronenjain.com" target="_blank" className="text-white text-center underline text-3xl mb-4">Record Player</a>
            <h3 className="text-white text-center text-xl">Python Flask • Spotify API</h3>
          </div>
        </div>

      </div>

      <div className="flex flex-col justify-center align-middle md:flex-row md:justify-between md:mb-4 mx-4">

        <div className="w-3/3 md:w-1/3 mx-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center items-center p-6">
            <a href="https://pitcher.ronenjain.com" target="_blank" className="text-white text-center underline text-3xl mb-4">Pitcher Predictor</a>
            <h3 className="text-white text-center text-xl">Python Flask • MLB Stats API</h3>
          </div>
        </div>

        <div className="w-3/3 md:w-1/3 mx-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center items-center p-6">
            <a href="https://sheets.ronenjain.com" target="_blank" className="text-white text-center underline text-3xl mb-4">Sheet2Feed</a>
            <h3 className="text-white text-center text-xl">HTML/CSS • Javascript • Firebase</h3>
          </div>
        </div>

        <div className="w-3/3 md:w-1/3 mx-4 mb-4 rounded-lg border-2 border-white flex justify-center">
          <div className="flex flex-col justify-center items-center p-6">
              <a href="https://aiheadlines.web.app" target="_blank" className="text-white text-center underline text-3xl mb-4">Headline or Headlie*</a>
              <h3 className="text-white text-center text-xl">React • ChatGPT</h3>
          </div>
        </div>
      </div>

      <p className="text-white text-center text-lg md:text-xl mt-4 mx-3 md:mx-24">Disclaimer: Many of these are projects from middle school that didn't survive the domain transfer... expect lots of crashes.</p>

      <br />


      <h2 className="text-white text-center text-xl md:text-3xl">for a full list, check out my <a href="/project-gallery" className="underline">project gallery</a></h2>


      <div className="pt-16 pb-8 md:pb-12" id="contact">
        <h1 className="text-textBlue underline text-center text-5xl md:text-7xl mt-8">contact me</h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center justify-center items-center mx-4 md:mb-10">
          
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="flex flex-col items-center p-6">
            <h1 className="text-white text-center text-3xl md:text-5xl mb-4">💬 Discord 💬</h1>
            <a href="https://discord.com/users/893939197537288265" target="_blank" className="text-white text-center text-xl md:text-3xl underline">bob.brown</a>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <div className="flex flex-col items-center p-6">
            <h1 className="text-white text-center text-3xl md:text-5xl mb-4">📧 Email 📧</h1>
            <a href="mailto:ronen@ronenjain.com" className="text-white text-center text-xl md:text-3xl underline">ronen@ronenjain.com</a>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <div className="flex flex-col p-6">
            <h1 className="text-white text-center text-3xl md:text-5xl mb-4">🐈‍⬛ Github 🐈‍⬛</h1>
            <a href="https://github.com/BobBrown1" target="_blank" className="text-white text-center text-xl underline md:text-3xl">BobBrown1</a>
          </div>
        </div>

      </div>

      <div className="flex flex-col justify-center items-center mx-4 my-8 md:mb-10">
        <h1 className="text-white text-center text-xl md:text-3xl mb-4">© Ronen Jain 2022-2024</h1>
      </div>

    </div>

  )
}

export default Main;
