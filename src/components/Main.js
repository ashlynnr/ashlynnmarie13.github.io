import React from 'react'
import Link from 'gatsby-link'

import RoomersLanding from '../images/portfolio/Roomers Landing.mp4'
import deafbible from '../images/portfolio/deafbible.jpg'
import CSV from '../images/portfolio/TTD - CSV.jpg'
import Progress from '../images/portfolio/TTD - Progress.jpg'
import TranslatorDashboard from '../images/portfolio/TTD - Translator Dash.jpg'
import Headshot from '../images/portfolio/Headshot.jpg'
import PizzaHutOne from '../images/portfolio/Screen Shot 2019-07-22 at 2.52.09 PM.png'
import PizzaHutTwo from '../images/portfolio/Screen Shot 2019-07-22 at 2.55.32 PM.png'
import PizzaHutThree from '../images/portfolio/Screen Shot 2019-07-22 at 2.56.14 PM.png'
import Roomers1 from '../images/portfolio/Roomers 5.jpeg'
import Roomers2 from '../images/portfolio/Roomers 1LI.jpeg'
import Roomers3 from '../images/portfolio/Roomers 2.jpeg'

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
          <h2 className="major">Deaf Bible Society Website</h2>
          <h3>
            <a
              href="https://www.deafbiblesociety.com/"
              className="roomers-link"
            >
              View at: deafbiblesociety.com
            </a>
          </h3>
          <br />
          <span className="image main">
            <img src={deafbible} alt="" />
          </span>
          <p>
            <br />
            Began Contributing: October 2018
            <br />
            Role: Front-End Developer
            <br />
            At Deaf Bible, one of my roles was to help develop and maintain the
            new version of the organization's website.
          </p>

          <p>
            Technologies used:
            <br />- Utilized ReactJS and implemented React Hooks
            <br />- SCSS and Bootstrap
            <br />- Google Analytics API: Web Tracking
            <br />- AWS: S3 and Dynamo DB
            <br />- AJAX
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
          <h2 className="major">Translation Database Tool</h2>
          <p>
            In-House Tool for DBS
            <br />
            Role: Full-Stack Developer (Individual Project)
            <br />
            This database tool was developed for Deaf Bible to be used by the
            translation teams. The goal of the app is to take phrases and text
            from all of Deaf Bible's media, translate them in desired languages,
            and allow users to log-in and approve/edit the translations so that
            they are both accurate and understandable to their deaf populations.
            <br />
            The application includes a log-in system, a CSV upload feature, a
            dashboard for both admin and users, progress information along with
            an alert/notification system, a workspace to edit/approve items, and
            the ability to export everything in the database to S3 from the app.
          </p>
          <p>
            Technologies used:
            <br />- Utilized ReactJS, Redux, and AWS Serverless to create both
            the front and back-end of a dynamic application
            <br />- Worked using AWS services and gained an in depth
            understanding of S3, DynamoDB, CloudWatch, API Gateway, and Data
            Pipeline
            <br />- Used redux saga middleware and integrated React Hooks
            <br />- Drafted a simple and clean design using Balsamiq
            <br />- Used the Semantic UI library along with styled components
            <br />- Created a login system using Amazon Cognito
            <br />- Google Translate API
          </p>
          <span className="image main">
            <img src={CSV} alt="" />
          </span>
          <span className="image main">
            <img src={TranslatorDashboard} alt="" />
          </span>
          <span className="image main">
            <img src={Progress} alt="" />
          </span>
          <br />

          {close}
        </article>

        <article
          id="pizza hut"
          className={`${this.props.article === 'pizza hut' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Pizza Hut App</h2>
          <br />
          <div className="ph-images-container">
            <span
              className="image main"
              style={{
                margin: '5%',
                border: 'solid rgba(255, 255, 255, 0.158) 5px',
              }}
            >
              <img src={PizzaHutOne} alt="" />
            </span>
            <span
              className="image main"
              style={{
                margin: '5%',
                border: 'solid rgba(255, 255, 255, 0.158) 5px',
              }}
            >
              <img src={PizzaHutTwo} alt="" />
            </span>
          </div>
          <p>
            Role: Team Member - UI pictured completed by me
            <br />
          </p>
          <p>
            Technologies used:
            <br />- React
            <br />- React Native
            <br />- Redux
            <br />- Material UI, JSDocs, XCode, Android Studio
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
          <h2 className="major">Roomers</h2>
          <br />
          <div className="video-box">
            <video id="video" controls>
              <source src={RoomersLanding} type="video/mp4" />
            </video>
          </div>
          <p>
            <br />
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

          <p>
            Technologies used:
            <br />- Implemented MongoDB to hold and maintain all user data
            <br />- Used AWS S3 to upload and store images
            <br />- Integrated Auth0 for user authentication and protection
            <br />- Implemented Express and Massive on top of Node.js
            <br />- Socket.io for feature similar to Facebook messenger
            <br />- Axios, Momentjs, Google Maps API and Sementic UIs
          </p>
          <div className="ph-images-container">
            <span
              className="image main"
              style={{
                margin: '1%',
                height: '100%',
              }}
            >
              <img src={Roomers1} alt="" />
            </span>
            <span
              className="image main"
              style={{
                margin: '1%',
              }}
            >
              <img src={Roomers2} alt="" />
            </span>
            <span
              className="image main"
              style={{
                margin: '1%',
                height: '100%',
              }}
            >
              <img src={Roomers3} alt="" />
            </span>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={Headshot} alt="" />
          </span>
          <p>
            TECHNOLOGIES: Javascript, React, Redux, AWS Serverless, Next, HTML5,
            CSS3, Node.js, Express,
            <br />
            Socket.io, OAuth 2.0, JSON Web Token, MongoDB, PostgreSQL, RESTful
            APIs,
            <br />
            DynamoDB, Amazon Cognito, S3, Axios, RESTful APIs, GraphQL
            <br />
            <br />
            I'm a dedicated full-stack developer that loves to create,
            contribute, and learn! After graduating from the University of North
            Texas, I entered the work force and fell into technical recruiting.
            To better understand what my clients and candidates needed, I began
            coding and was hooked.
            <br />
            <br /> My background is diverse, as I was previously both a
            professional dancer and a business graduate. Web development has
            enabled me to fulfill both my need to create and utilize my talent
            for problem solving. Because of this, I'm truly passionate about my
            projects and enjoy working to make them as dynamic and aesthetically
            appealing as possible.
          </p>
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
