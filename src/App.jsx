
import './App.css'
import './fonts.css'

function App() {

  return (
    <>
      <div className="container header__container">
        <div className="logo">
          <a href="#" className="logo-link">
            <img src="./public/routex.svg" alt="" width="157px" height="40px" className="logo-img" />
          </a>
        </div>
        <nav class="nav">
            <ul class="nav-list">
              <li class="nav-item-one"><a href="#">Home</a></li>
              <li class="nav-item"><a href="#">About us</a></li>
              <li class="nav-item"><a href="#">Services</a></li>
              <li class="nav-item"><a href="#">Projects</a></li>
              <li class="nav-item"><a href="#">Blog</a></li>
            </ul>
        </nav>
        <div className="chat">
          <img src="./public/chat.svg" alt="" className="chat-img" />
          <div className="chat-words">
            <h6 className="chat-title">Need help?</h6>
            <h6 className="chat-number">(307) 555-0133</h6>
          </div>
        </div>
      </div>
      <div className="container hero__container">
        <img src="./public/triangle.svg" alt="" className="hero-img" />
        <h1 className="hero-title">Journey with Confidence <span>Migrate</span> with Us</h1>
        <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
        <button className="hero-btn">
          <span>Learn more</span>
          <img src="./public/right-arrow.svg" width="14" height="16" alt="" className="btn-img" />
        </button>
      </div>
      <div className="container about__container">
        <img src="./public/Image.png" alt="" className="about-img" />
        <div className="about-info">
          <div className="about-us">
            <h6 className="us-title">About Us</h6>
            <img src="./public/send.svg" alt="" className="send-img" />
          </div>
          <h2 className="about-title">Unknown Wanderlust <span>Your Journey into</span></h2>
          <p className="about-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          <div className="about-checks">
            <div className="check1">
              <div className="checkk">
              <img src="./public/check.svg" alt="" />
              <h6 className="check-title">Safety Guides</h6>
              </div>
              <p className="check-subtitle">Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
            </div>
            <div className="check1">
              <div className="checkk">
              <img src="./public/check.svg" alt="" />
              <h6 className="check-title">Passport Assistance</h6>
              </div>
              <p className="check-subtitle">Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
            </div>
            
          </div>
          <button className="hero-btn">
          <span>Read more</span>
          <img src="./public/right-arrow.svg" width="14" height="16" alt="" className="btn-img" />
        </button>
        </div>
      </div>
    </>
  )
}

export default App
