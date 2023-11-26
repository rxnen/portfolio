function ProjectGallery() {
  return (
    <div className="ProjectGallery">
      <header className="ProjectGallery-header">

        <div className="flex flex-col md:flex-row md:justify-between mx-4 md:mb-8 mt-10">

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-blue-500 flex mb-6 md:mb-0">
                <div className="flex flex-col items-center p-6">
                    <a href="https://bullyme.xyz" target="_blank" className="text-white text-center underline text-4xl mb-4">BullyMe</a>
                    <h3 className="text-white text-center text-xl">Just some Discord bot that is sometimes fun and sometimes super sketchy.</h3>
                </div>
            </div>

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-red-500 flex mb-6 md:mb-0">
                <div className="flex flex-col items-center p-6">
                    <a href="https://aiheadlines.web.app" target="_blank" className="text-white text-center underline text-4xl mb-4">Headline or Headlie</a>
                    <h3 className="text-white text-center text-xl">Guess whether news headlines are real or were made up by ChatGPT.</h3>
                </div>
            </div>

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-orange-600 flex mb-6 md:mb-0">
                <div className="flex flex-col items-center p-6">
                    <a href="https://school.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">When Is Lunch</a>
                    <h3 className="text-white text-center text-xl">Somewhat functioning school countdown with horrendous styling.</h3>
                </div>
            </div>

        </div>

        <div className="flex flex-col justify-center align-middle md:flex-row md:justify-between md:mb-8 mx-4">

            <div className="w-fit md:w-1/2 mx-4 rounded-3xl border-2 border-white bg-orange-500 flex mb-6 md:mb-0">
                <div className="flex flex-col  items-center p-6">
                    <a href="https://pitcher.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">Pitcher Predictor</a>
                    <h3 className="text-white text-center text-xl">An overly simple site (with overly complicated code) that predicts the pitchers of upcoming baseball games.</h3>
                </div>
            </div>

            <div className="w-fit md:w-1/2 mx-4 rounded-3xl border-2 border-white bg-yellow-500 flex mb-6 md:mb-0">
                <div className="flex flex-col items-center p-6">
                    <a href="https://sheet2feed.web.app" target="_blank" className="text-white text-center underline text-4xl mb-4">Sheet2Feed</a>
                    <h3 className="text-white text-center text-xl">I mean, it's kind of cool but god... staying commited to a project is f***ing impossible, isn't it?</h3>
                </div>
            </div>


        </div>

        <div className="flex flex-col justify-center md:flex-row md:justify-between mx-4 md:mb-8">

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-pink-500 flex mb-6 md:mb-0">
                <div className="flex flex-col  items-center p-6">
                    <a href="https://hwt.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">Homework Time</a>
                    <h3 className="text-white text-center text-xl">About half finished and not very helpful in the first place.</h3>
                </div>
            </div>

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-green-500 flex mb-6 md:mb-0">
                <div className="flex flex-col items-center p-6">
                    <a href="https://lfm.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">Links For Me</a>
                    <h3 className="text-white text-center text-xl">Links stored in a hardly functioning database and more questionable styling.</h3>
                </div>
            </div>

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-amber-900 flex mb-6 md:mb-0">
                <div className="flex flex-col j items-center p-6">
                    <a href="https://vinyl.bob-brown.com" target="_blank" className="text-white text-center underline text-4xl mb-4">Record Player</a>
                    <h3 className="text-white text-center text-xl">A li'l Flask web app that connects to your Spotify account and shows what song you're playing.</h3>
                </div>
            </div>
            
        </div>

        <div className="flex flex-col justify-center md:flex-row md:justify-between mx-4 md:mb-8">

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-teal-700 flex mb-6 md:mb-0">
                <div className="flex flex-col  items-center p-6">
                    <a href="https://tinyvillagespirit.org" target="_blank" className="text-white text-center underline text-4xl mb-4">Tiny Village Spirit</a>
                    <h3 className="text-white text-center text-xl">So this is a nice example of what happens when you get 4 days to make a website for a non-profit.</h3>
                </div>
            </div>

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-purple-700 flex mb-6 md:mb-0">
                <div className="flex flex-col items-center p-6">
                    <a href="https://github.com/BobBrown1/eldersafe" target="_blank" className="text-white text-center underline text-4xl mb-4">ElderSafe</a>
                    <h3 className="text-white text-center text-xl">A react native app for senior safety that'll hopefully end up on the app store</h3>
                </div>
            </div>

            <div className="w-fit md:w-1/3 mx-4 rounded-3xl border-2 border-white bg-red-700 flex mb-6 md:mb-0">
                <div className="flex flex-col j items-center p-6">
                    <a href="#" target="_blank" className="text-white text-center underline text-4xl mb-4">This Amazing Portfolio</a>
                    <h3 className="text-white text-center text-xl">You wouldn't be mad if i said this was my proudest creation... right?</h3>
                </div>
            </div>

        </div>

        <p className="text-center my-8"><a className="text-white text-center underline text-2xl" href="/">go back home</a></p>

      </header>
    </div>
  );
}

export default ProjectGallery;