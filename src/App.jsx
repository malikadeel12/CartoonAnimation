import './App.css'
// Import all images
import topBannerLeft from './images/top-banner-left.png'
import topBannerRight from './images/top-banner-right.png'
import topBanner3 from './images/top-banner-3.png'
import topBanner4 from './images/top-banner-4.png'
import logo from './images/logo.png'
import telegramIcon from './images/telegram-icon.png'
import twitterIcon from './images/twitter-icon.png'
import pikachuLeft from './images/pikachu-left.png'
import pikachuCenter from './images/pikachu-center.png'
import pikachuRight from './images/pikachu-right.png'
import pikachuSmall1 from './images/pikachu-small-1.png'
import pikachuSmall2 from './images/pikachu-small-2.png'
import pikachuSmall3 from './images/pikachu-small-3.png'
import pikachuSmall4 from './images/pikachu-small-4.png'
import pikachuSmall5 from './images/pikachu-small-5.png'
import pikachuCard from './images/pikachu-card.png'
import pikachuTokenomics from './images/pikachu-tokenomics.png'
import pikachuSmallPika from './images/pikachu-small-pika.png'
import footer1 from './images/footer-1.png'
import footer2 from './images/footer-2.png'
import footer3 from './images/footer-3.png'
import footer4 from './images/footer-4.png'
import footer5 from './images/footer-5.png'

function App() {
  return (
    <div className="min-h-screen bg-yellow-400">
      {/* Top Blue Banner */}
      <div className="bg-blue-500 h-24 flex items-center px-4 gap-2">
        <div className="w-1/4 h-full flex items-center">
          <img 
            src={topBannerLeft} 
            alt="Pikachu" 
            className="h-full object-contain animate-slide-in-left animate-dance hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
        <div className="w-1/4 h-full flex items-center justify-center">
          <img 
            src={topBanner3} 
            alt="Banner 3" 
            className="h-full object-contain animate-slide-in-up animate-laugh animation-delay-100 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
        <div className="w-1/4 h-full flex items-center justify-center">
          <img 
            src={topBanner4} 
            alt="Banner 4" 
            className="h-full object-contain animate-slide-in-up animate-play animation-delay-200 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
        <div className="w-1/4 h-full flex items-center justify-end">
          <img 
            src={topBannerRight} 
            alt="Pokemon Collage" 
            className="h-full object-contain animate-slide-in-right animate-dance hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-12 h-12 rounded-full animate-wiggle hover-bounce"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <div className="flex gap-6">
            <a href="#about" className="text-black font-semibold hover:text-yellow-500">About</a>
            <a href="#tokenomics" className="text-black font-semibold hover:text-yellow-500">Tokenomics</a>
            <a href="#join" className="text-black font-semibold hover:text-yellow-500">Join Us</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
            <img 
              src={telegramIcon} 
              alt="Telegram" 
              className="w-6 h-6 animate-fade-in hover-scale"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
            <img 
              src={twitterIcon} 
              alt="Twitter" 
              className="w-6 h-6 animate-fade-in hover-scale"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </a>
          <button className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700">
            BUY NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-6 text-center">
        <h1 className="text-8xl md:text-9xl font-black text-yellow-400 stroke-black stroke-2 mb-6" style={{
          WebkitTextStroke: '4px black',
          textShadow: '4px 4px 0px black'
        }}>
          PIKACHU
        </h1>
        <div className="mb-8">
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700">
            BUY NOW
          </button>
        </div>
        
        {/* Three Large Pikachus */}
        <div className="flex justify-center items-end gap-4 max-w-6xl mx-auto">
          <div className="w-1/3 flex justify-center">
            <img 
              src={pikachuLeft} 
              alt="Pikachu Left" 
              className="max-w-full h-auto animate-slide-in-left animate-dance hover-scale"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          <div className="w-1/3 flex justify-center">
            <img 
              src={pikachuCenter} 
              alt="Pikachu Center" 
              className="max-w-full h-auto animate-slide-in-up animate-laugh hover-scale"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          <div className="w-1/3 flex justify-center">
            <img 
              src={pikachuRight} 
              alt="Pikachu Right" 
              className="max-w-full h-auto animate-slide-in-right animate-play animation-delay-200 hover-scale"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* PIKA Banner */}
      <div className="bg-black text-white py-4 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-2xl font-bold inline-block">PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA PIKA </span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-12 px-6">
        {/* Small Pikachus Row */}
        <div className="flex justify-center gap-4 mb-8 max-w-5xl mx-auto">
          <img 
            src={pikachuSmall1} 
            alt="Pikachu 1" 
            className="w-32 h-32 object-contain animate-slide-in-up animate-laugh animation-delay-100 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <img 
            src={pikachuSmall2} 
            alt="Pikachu 2" 
            className="w-32 h-32 object-contain animate-slide-in-up animate-dance animation-delay-200 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <img 
            src={pikachuSmall3} 
            alt="Pikachu 3" 
            className="w-32 h-32 object-contain animate-slide-in-up animate-play animation-delay-300 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <img 
            src={pikachuSmall4} 
            alt="Pikachu 4" 
            className="w-32 h-32 object-contain animate-slide-in-up animate-happy-bounce animation-delay-400 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <img 
            src={pikachuSmall5} 
            alt="Pikachu 5" 
            className="w-32 h-32 object-contain animate-slide-in-up animate-wiggle animation-delay-500 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>

        {/* About Content Box */}
        <div className="bg-orange-600 rounded-3xl p-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left: Trading Card */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={pikachuCard} 
                alt="Pikachu Trading Card" 
                className="max-w-full h-auto rounded-lg animate-slide-in-left animate-dance hover-scale hover-rotate"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            
            {/* Right: About Text */}
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-6xl md:text-7xl font-black mb-6 text-yellow-400" style={{
                WebkitTextStroke: '3px black',
                textShadow: '3px 3px 0px black'
              }}>
                ABOUT
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                We are determined to bring the legendary Pikachu to life on Ethereum. Together, we will build a community and take Pikachu to the places it truly deserves. Join us now and be a part of this journey with us. Pikachu is ready to go to the moon!
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
                DEXTOOLS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-12 px-6">
        <div className="bg-orange-600 rounded-3xl p-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left: Pikachu Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={pikachuTokenomics} 
                alt="Pikachu Tokenomics" 
                className="max-w-full h-auto animate-slide-in-right animate-play hover-scale"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            
            {/* Right: Tokenomics Info */}
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-6xl md:text-7xl font-black mb-6 text-yellow-400" style={{
                WebkitTextStroke: '3px black',
                textShadow: '3px 3px 0px black'
              }}>
                TOKENOMICS
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-xl">No Taxes</p>
                <p className="text-xl">LP Burned</p>
                <p className="text-xl">420.690.000.000 Supply</p>
              </div>
              
              {/* Contract Address */}
              <div className="bg-white rounded-lg p-4 mb-4 flex items-center gap-2">
                <input 
                  type="text" 
                  value="0xxxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" 
                  readOnly
                  className="flex-1 text-black text-sm font-mono"
                />
                <button className="text-gray-600 hover:text-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              
              {/* Small Pikachu with "Pika" */}
              <div className="flex items-center gap-2">
                <img 
                  src={pikachuSmallPika} 
                  alt="Pika" 
                  className="w-20 h-20 object-contain animate-laugh hover-scale"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <span className="text-black font-bold text-xl">Pika</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Image Gallery */}
      <footer className="bg-yellow-400 py-8 px-6">
        <div className="flex gap-4 max-w-6xl mx-auto mb-6 overflow-x-auto">
          <img 
            src={footer1} 
            alt="Footer 1" 
            className="w-64 h-48 object-cover rounded-lg flex-shrink-0 animate-fade-in animate-happy-bounce animation-delay-100 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <img 
            src={footer2} 
            alt="Footer 2" 
            className="w-64 h-48 object-cover rounded-lg flex-shrink-0 animate-fade-in animate-wiggle animation-delay-200 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <img 
            src={footer3} 
            alt="Footer 3" 
            className="w-64 h-48 object-cover rounded-lg flex-shrink-0 animate-fade-in animate-dance animation-delay-300 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <img 
            src={footer4} 
            alt="Footer 4" 
            className="w-64 h-48 object-cover rounded-lg flex-shrink-0 animate-fade-in animate-laugh animation-delay-400 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <img 
            src={footer5} 
            alt="Footer 5" 
            className="w-64 h-48 object-cover rounded-lg flex-shrink-0 animate-fade-in animate-play animation-delay-500 hover-scale"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
        <p className="text-center text-black text-sm">
          © 2024 PIKACHU. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  )
}

export default App
