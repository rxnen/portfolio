import logo from './logo.svg';
import pfp from './media/pfp.jpeg';
import './App.css';

function Main() {
  return (
    <div className="bg-black min-h-screen min-w-screen">

      <div id="topnav" className="flex justify-end md:justify-start  w-screen">
        <div id="nav-items" className="hidden flex-col w-screen sm:flex-col md:flex-row md:flex">
          <a href="#intro" id="nav-intro" className="text-white text-2xl px-6 py-4 hover:bg-white hover:text-black">awkward introduction</a>
          <a href="#projects" id="nav-projects" className="text-white text-2xl px-6 py-4 hover:bg-white hover:text-black">things i've made</a>
          <a href="#contact" id="nav-contact" className="text-white text-2xl px-6 py-4 hover:bg-white hover:text-black">contact me...?</a>
        </div>
        <button id="nav-menu" className="block md:hidden text-white text-2xl px-6 py-4" onClick={() => {
            document.getElementById("nav-items").classList.toggle("hidden");
            document.getElementById("nav-items").classList.toggle("flex");
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path></g></g>
            </svg>
          </button>
      </div>


      <div className="pt-12 pb-20 md:pb-14" id="intro">
        <h1 className="text-white text-center text-5xl md:text-7xl mb-5">so... hi 👀</h1>
        <h2 className="text-white text-center text-3xl md:text-4xl">i guess i'll introduce myself?</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center mb-20 md:mb-14" id="intro-content">
        <img src={pfp} className="w-1/4 md:w-1/6 mx-auto md:mx-0 rounded-full border-4 border-white mb-8" />
        <div className="flex flex-col justify-center md:ml-12">
          <h1 className="text-white text-center text-3xl md:text-5xl mb-4">i'm <strong>Bob Brown</strong></h1>
          <h3 className="text-white text-center text-xl md:text-3xl md:max-w-xl ">if you're wondering... it was just the most basic white boy name i could think of ;)</h3>
        </div>
      </div>

      <h1 className="text-white text-center text-xl md:text-3xl mb-14">now i'm not exactly super interesting but here are some of my interests...</h1>

      <div className="flex flex-col md:flex-row justify-evenly mx-2">
        <div className="w-fit md:w-1/3 md:h-1/3 mx-6 mb-8">
          <h1 className="text-white text-center text-3xl md:text-5xl mb-3">Music 🎸</h1>
          <h3 className="text-white text-center text-l md:text-xl">This <i>is</i> a developer profile, but I love rock, alternative, and metal music. 
          This site itself would not have been made without the existence of <a href="https://stats.fm/bob-brown" target="_blank" className="text-white underline">all this music</a>.</h3>
        </div>
        <div className="w-fit md:w-1/3 md:h-1/3 mx-6 mb-8">
        <h1 className="text-white text-center text-3xl md:text-5xl mb-3">Coding 🧑‍💻</h1>
          <h3 className="text-white text-center text-l md:text-xl">I also enjoy coding random and useless shit to either make life easier or to piss people off. I love Python, like HTML/CSS, tolerate SQL, and adore React.</h3>
        </div>
        <div className="w-fit md:w-1/3 md:h-1/3 mx-6">
        <h1 className="text-white text-center text-3xl md:text-5xl mb-3">Sports 🎾</h1>

          <h3 className="text-white text-center text-l md:text-xl">I love playing tennis and will watch pretty much any televised sport if I'm bored. That is, with the exception of golf. Why on earth would anyone watch golf...</h3>
        </div>
      </div>

      <div className="pt-12 pb-20" id="projects">
        <h1 className="text-white text-center text-3xl md:text-5xl mb-5 mt-8">✨ yay... fantastic... moving on... ✨</h1>
        <h2 className="text-white text-center text-xl md:text-3xl">here's some of the random coding projects i've spent far too much time on</h2>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mx-4 md:mb-10">

        <div className="w-fit md:w-1/3 mx-6 mb-8 rounded-3xl border-2 border-white bg-blue-500 flex">
          <div className="flex flex-col  items-center p-6">
            <a href="https://bullyme.xyz" target="_blank" className="text-white text-center underline text-4xl mb-4">BullyMe</a>
            <h3 className="text-white text-center text-xl">Just some Discord bot that is sometimes fun and sometimes super sketchy.</h3>
          </div>
        </div>

        <div className="w-fit md:w-1/3 mx-6 mb-8 rounded-3xl border-2 border-white bg-red-500 flex">
          <div className="flex flex-col items-center p-6">
            <a href="https://aiheadlines.web.app" target="_blank" className="text-white text-center underline text-4xl mb-4">Headline or Headlie</a>
            <h3 className="text-white text-center text-xl">Guess whether news headlines are real or were made up by ChatGPT.</h3>
          </div>
        </div>

        <div className="w-fit md:w-1/3 mx-6 mb-8 rounded-3xl border-2 border-white bg-orange-600 flex">
          <div className="flex flex-col items-center p-6">
            <a href="https://school.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">When Is Lunch</a>
            <h3 className="text-white text-center text-xl">Somewhat functioning school countdown with horrendous styling.</h3>
          </div>
        </div>

      </div>

      <div className="flex flex-col justify-center align-middle md:flex-row md:justify-between md:mb-10 mx-4">

        <div className="w-fit md:w-1/3 mx-8 mb-8 rounded-3xl border-2 border-white bg-purple-500 flex">
          <div className="flex flex-col  items-center p-6">
            <a href="https://hw.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">Homework Time</a>
            <h3 className="text-white text-center text-xl">About half finished and not very helpful in the first place.</h3>
          </div>
        </div>

        <div className="w-fit md:w-1/3 mx-8 mb-8 rounded-3xl border-2 border-white bg-green-500 flex">
          <div className="flex flex-col items-center p-6">
            <a href="https://lfm.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">Links For Me</a>
            <h3 className="text-white text-center text-xl">Links stored in a hardly functioning database and more questionable styling.</h3>
          </div>
        </div>

        <div className="w-fit md:w-1/3 mx-8 mb-8 rounded-3xl border-2 border-white bg-amber-900 flex">
          <div className="flex flex-col j items-center p-6">
            <a href="https://vinyl.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">Record Player</a>
            <h3 className="text-white text-center text-xl">A li'l Flask web app that connects to your Spotify account and shows what song you're playing.</h3>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col justify-center md:flex-row md:justify-between mx-4 md:mb-10">

        <div className="w-fit md:w-1/2 mx-8 mb-8 rounded-3xl border-2 border-white bg-orange-500 flex">
          <div className="flex flex-col  items-center p-6">
            <a href="https://pitcher.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">Pitcher Predictor</a>
            <h3 className="text-white text-center text-xl">An overly simple site (with overly complicated code) that predicts the pitchers of upcoming baseball games.</h3>
          </div>
        </div>

        <div className="w-fit md:w-1/2 mx-8 mb-8 rounded-3xl border-2 border-white bg-yellow-500 flex">
          <div className="flex flex-col items-center p-6">
            <a href="https://sheet2feed.web.app" target="_blank" className="text-white text-center underline text-4xl mb-4">Sheet2Feed</a>
            <h3 className="text-white text-center text-xl">I mean, it's kind of cool but god... staying commited to a project is f***ing impossible, isn't it?</h3>
          </div>
        </div>
        
      </div>

      <h2 className="text-white text-center text-xl md:text-3xl">for a full list, check out my <a href="/project-gallery" className="underline">project gallery</a></h2>


      <div className="pt-12 pb-8 md:pb-20" id="contact">
        <h1 className="text-white text-center text-3xl md:text-5xl mb-5 mt-8">mmk... now this 🤷‍♂️</h1>
        <h2 className="text-white text-center text-xl md:text-3xl">if you wanna contact me for some reason...</h2>
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
              <a href="mailto:bob@bob-brown.com" className="text-white text-center text-xl md:text-3xl underline">bob@bob-brown.com</a>
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
          <h1 className="text-white text-center text-xl md:text-3xl mb-4">© Bob Brown 2022-2023</h1>
        </div>

    </div>

  )
}

export default Main;
