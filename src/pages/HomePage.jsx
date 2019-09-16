import React from 'react'
import newProfileImage from '../images/090419_Tony-3.jpg'
import profileImage from '../images/cocktail-panda.jpg'
import QuotesArray from '../components/QuotesArray'

const HomePage = () => {
  return (
    <>
      <nav className="nav-bar">
        <p className="nav-name">Anthony Grimm</p>
        <div className="nav-menu">
          <p>About</p>
          <p>Projects</p>
          <p>Skills</p>
          <p>Contact</p>
        </div>
      </nav>
      <main>
        <header className="header">
          <section className="img-quote-area">
            <img
              className="profile-image"
              src={newProfileImage}
              alt="Anthony Grimm"
            />
          </section>
          <section className="name-title">
            <h1>Anthony Grimm</h1>
            <div className="header-contact-info">
              <a href="https://www.linkedin.com/in/anthony-grimm/">LinkedIn</a>-
              <a href="https://github.com/AntGrimm">GitHub</a>-
              <a href="mailto:anthony.l.grimm@gmail.com">E-mail</a>
            </div>
            <h3>
              <QuotesArray />
            </h3>
          </section>
        </header>
        <h2>Full Stack Developer</h2>
        <section className="projects">
          <h2>Projects</h2>
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
          <div>Project 4</div>
        </section>
        <section className="skills-section">
          <h2>Skills</h2>
          <div>
            <div>Skill</div>
            <div>Skill</div>
            <div>Skill</div>
            <div>Skill</div>
          </div>
        </section>
        <section className="contact-section">
          <h2>Contact</h2>
          <div className="contact-me">
            <a href="https://www.linkedin.com/in/anthony-grimm/">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/AntGrimm">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="mailto:anthony.l.grimm@gmail.com">
              <i class="fas fa-envelope fa-2x"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
