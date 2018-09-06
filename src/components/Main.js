import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import Roomers2 from '../images/portfolio/Roomers 2.jpeg'
import Roomers3 from '../images/portfolio/Roomers 3.jpeg'
import Roomers4 from '../images/portfolio/Roomers 4.jpeg'
import Roomers5 from '../images/portfolio/Roomers 5.jpeg'
import RoomersLanding from '../images/portfolio/Roomers Landing.mp4'
import TUNEder2 from '../images/portfolio/TUNEder 2.jpeg'
import TUNEder3 from '../images/portfolio/TUNEder 3.jpeg'
import TUNEder4 from '../images/portfolio/TUNEder 4.jpeg'
import TUNEder5 from '../images/portfolio/TUNEder 5.jpeg'
import TUNEderLanding from '../images/portfolio/TUNEder Landing.mp4'

import Carousel from './Carousel.js'
import './Main.css'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Roomers</h2>
          <span className="image main">
            <Carousel autoPlayInterval={4000} indicator={true} switcher={true}>
              <div
                className="spotify-box"
                style={{
                  height: '400px',

                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                  objectFit: 'cover',
                }}
              >
                <div className="spotify-item">
                  <img className="spotify-image" src={Roomers3} alt="" />
                </div>
              </div>

              <div
                className="spotify-box"
                style={{
                  height: '400px',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                  objectFit: 'cover',
                }}
              >
                <div className="spotify-item">
                  <img className="spotify-image" src={Roomers2} alt="" />
                </div>
              </div>

              <div
                className="spotify-box"
                style={{
                  height: '400px',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                  objectFit: 'cover',
                }}
              >
                <div className="spotify-item">
                  <img className="spotify-image" src={Roomers5} alt="" />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: '400px',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                  objectFit: 'cover',
                }}
              >
                <div className="spotify-item">
                  <img className="spotify-image" src={Roomers4} alt="" />
                </div>
              </div>
            </Carousel>
          </span>
          <p>
            Completion: August 2017
            <br />
            Role: Project Manager/Developer
            <br />
            Roomers was created with the idea of an app that could connect a
            user with potential roommates based on similar interests, budgets,
            and housing expectations. This site includes account creation,
            personal listing creation, a search feature for both users and
            rooms, and private messaging. As the project manager, I was in
            charge of choosing which technologies to integrate into the
            application and was the primary resource for team members that
            needed help with front-end and back-end issues.
          </p>
          <div className="video-box">
            <video id="video" loop autoPlay>
              <source src={RoomersLanding} type="video/mp4" />
            </video>
          </div>
          <p>
            Technologies used:
            <br />- Implemented MongoDB to hold and maintain all user data.
            <br />- Used AWS S3 to upload and store images
            <br />- Integrated Auth0 for user authentication and protection
            <br />- Implemented Express and Massive on top of Node.js
            <br />- Socket.io for feature similar to Facebook messenger
            <br />- Axios, Momentjs, Google Maps API and Sementic UIs
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">TUNEder</h2>
          <span className="image main">
            <Carousel autoPlayInterval={6000} indicator={true} switcher={true}>
              <div
                className="spotify-box"
                style={{
                  height: '400px',

                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                  objectFit: 'cover',
                }}
              >
                <div className="spotify-item">
                  <img className="spotify-image" src={TUNEder2} alt="" />
                </div>
              </div>

              <div
                className="spotify-box"
                style={{
                  height: '400px',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                  objectFit: 'cover',
                }}
              >
                <div className="spotify-item">
                  <img className="spotify-image" src={TUNEder3} alt="" />
                </div>
              </div>

              <div
                className="spotify-box"
                style={{
                  height: '400px',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                  objectFit: 'cover',
                }}
              >
                <div className="spotify-item">
                  <img className="spotify-image" src={TUNEder4} alt="" />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: '400px',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                  objectFit: 'cover',
                }}
              >
                <div className="spotify-item">
                  <img className="spotify-image" src={TUNEder5} alt="" />
                </div>
              </div>
            </Carousel>
          </span>
          <p>
            Completion: July 2017
            <br />
            Role: Full-Stack Developer
            <br />
            As a music enthusiast, I have found that I connect well with others
            that share my same taste. This inspired me to create "TUNEder", a
            dating and friend finding service based on music taste. Using the
            Spotify API, I was able to add a user's music streaming habits to
            their profile and the app also offers a matching and chat feature.
            This was a personally developed project.
          </p>
          <div className="video-box">
            <video id="video" loop autoPlay>
              <source src={TUNEderLanding} type="video/mp4" />
            </video>
          </div>
          <p>
            Technologies used:
            <br />- Utilized ReactJS, Redux, and ReactRrouter to create a
            dynamic application
            <br />- Integrated Spotify API using authorization tokens and
            displayed each user’s top artists
            <br />- Used bcryptjs and JSON Web Token to hash and salt user
            password in node backend
            <br />- Stored user, profile, and match information in MongoDB
            <br />- Additional technologies and libraries: Node, Express,
            Passport, and Axios
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img
              src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3860371df6121bd9176d5889b487c3e1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </span>
          <p>
            TECHNOLOGIES: Javascript, React, Vue, Next, HTML5, CSS3, Node.js,
            Express,
            <br />
            Socket.io, OAuth 2.0, JSON Web Token, MongoDB, PostgreSQL, RESTful
            APIs
            <br />
            <br />
            After graduating from the University of North Texas with a Bachelor
            of Business Administration, I entered the work force and fell into
            technical recruiting. To better understand what my clients and
            candidates needed, I began coding and was instantly hooked. I
            recently completed a programming course at DevMountain and have been
            freelancing since graduating.
            <br />
            <br /> My background is diverse, as I was previously both a
            professional artist and a business/accounting graduate. Web
            development has enabled me to fulfill both my need to create and
            utilize my talent for problem solving. Because of this, I'm truly
            passionate about my projects and enjoy working to make them as
            dynamic and asthetically appealing as possible.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <label htmlFor="name">Email: rodriguez.ashlynn@gmail.com</label>
          <label htmlFor="name">Phone: 972-832-8883</label>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>

              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
