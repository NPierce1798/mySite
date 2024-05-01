import flatironCert from '../images/FlatIron - DS_ML.png'
import appCert from '../images/Apprenticeship.jpg'
import webDesign from '../images/fcc - responsive_web_design.png'


function Resume() {


    return (

      <div className="home__container">
        <div className="home__body-container">
            <h2 className="resume__h2">Nicolas T. Pierce</h2>
            <p className="resume__top-info">621 Almonesson Road, Westville, NJ, 08093 | (609) - 941 - 4431 | <a href="mailto:name@email.com"  target="_blank" rel="noopener noreferrer" style={{color: 'lightblue'}}>npierce1798@gmail.com</a> </p>

            <h3 className="resume__section-heading">Overview:</h3>
            <ul>
                <li className="resume__list-item">Data Scientist with training and experience in data aquisition and modeling, statistical analysis, machine learning, deep learning, NLP, as well as front and back end development.</li>
                <li className="resume__list-item">Skilled in working within a team to bring efficient and effective results to a project. Leadership, teamwork, problem solving, communication of ideas, project management, and customer relations.</li>
            </ul>

            <h3 className="resume__section-heading">Technical Skills:</h3>
            <ul className=".resume__list">
                <li className="resume__list-item-skills">Python</li>
                <li className="resume__list-item-skills">SQL</li>
                <li className="resume__list-item-skills">Machine Learning</li>
                <li className="resume__list-item-skills">Natural Language Processing</li>
                <li className="resume__list-item-skills">Data Processing</li>
                <li className="resume__list-item-skills">Statistical Analysis and Testing</li>
                <li className="resume__list-item-skills">Tensorflow</li>
                <li className="resume__list-item-skills">Pandas</li>
                <li className="resume__list-item-skills">Numpy</li>
                <li className="resume__list-item-skills">Scikit-Learn</li>
                <li className="resume__list-item-skills">JavaScript</li>
                <li className="resume__list-item-skills">HTML</li>
                <li className="resume__list-item-skills">CSS</li>
                <li className="resume__list-item-skills">React JS</li>
                <li className="resume__list-item-skills">Flask</li>
            </ul>


            <h3 className="resume__section-heading">Education and Training:</h3>
            <h5 className="resume__h5">Flatiron School:</h5>
            <p className="resume__exp">Data Science and Machine Learning (June 27 - October 7). Certificate of completion included below.</p>
            <img alt='flatirom-cert' src={flatironCert} className='resume__flatiron'/>

            <h5 className="resume__h5">Pennco Tech.:</h5>
            <p className="resume__exp"> Electrical Theory, Residential and Commersial Wiring (August 2017 - February 2018)</p>

            <h5 className="resume__h5">Flash Electric NJ Corp.:</h5>
            <p className="resume__exp">Completion of Apprenticeship for the occupation of Electrician in accordance with the U.S. Department of Labor</p>
            <img alt='apprentiship-cert' src={appCert} className='resume__app-cert'/>

            <h5 className="resume__h5">Addition Training:</h5>
            <img alt='fcc-cert' src={webDesign} className='resume__fcc-cert'/>

            <h3 className="resume__section-heading">Work History:</h3>

            <h5 className="resume__h5">JustAsk Technologies, Co-Founder, NJ (April 2023 - Present)</h5>
            <ul className=".resume__list">
                <li className="resume__list-item-skills">Gather and Clean Data</li>
                <li className="resume__list-item-skills">Encode and Train on Data</li>
                <li className="resume__list-item-skills">Test and Fine Tune Model</li>
                <li className="resume__list-item-skills">Worked on backend and frontend</li>
                <li className="resume__list-item-skills">Marketing</li>
            </ul>


            <h5 className="resume__h5">Flash Electric NJ Corp., Electrician,  Swedesboro NJ (09/2018 - 06/2022)</h5>
            <ul className=".resume__list">
                <li className="resume__list-item-skills">Work in a team to on projects</li>
                <li className="resume__list-item-skills">Manage projects</li>
                <li className="resume__list-item-skills">Train team members</li>
            </ul>

            <h5 className="resume__h5">Resicom Electrical, Electrician, Pennsville NJ (02/2018 - 09/2018, 06/2022 - Present)</h5>
            <ul className=".resume__list">
                <li className="resume__list-item-skills">Train new team members</li>
                <li className="resume__list-item-skills">Manage projects</li>
                <li className="resume__list-item-skills">Lead a team on projects</li>
                <li className="resume__list-item-skills">Customer Relations</li>
            </ul>


            <h3 className="resume__section-heading">Technical Projects:</h3>
            <h5 className="resume__h5">JustAsk Ai <a href='https://justask.codes/' target="_blank" rel="noopener noreferrer">(JustAsk.codes)</a>.</h5>
            <ul className=".resume__list">
                <li className="resume__list-item-skills">Helped create and deploy a question answering web app for tradesmen</li>
                <li className="resume__list-item-skills">Worked on the machine laerning, frontend, backend, and marketing aspects of the project</li>
            </ul>

            <h5 className="resume__h5">This Website!</h5>
            <ul className=".resume__list">
                <li className="resume__list-item-skills">Fully created and deployed this site using React</li>
            </ul>

            <h5 className="resume__h5">Stellar Classifier</h5>
            <ul className=".resume__list">
                <li className="resume__list-item-skills">A Machine Learning project to predict source of incoming data</li>
                <li className="resume__list-item-skills">Recieves Data relating to stellar objects</li>
                <li className="resume__list-item-skills">Cleans and Processes data</li>
                <li className="resume__list-item-skills">Predicts if data is coming from a star, quasar, or galaxy</li>
                <li className="resume__list-item-skills"><a href='https://github.com/NPierce1798/StellarClassifier' target="_blank" rel="noopener noreferrer">(Github)</a></li>
            </ul>



            <p className="resume__top-info">621 Almonesson Road, Westville, NJ, 08093 | (609) - 941 - 4431 | <a href="mailto:name@email.com"  target="_blank" rel="noopener noreferrer" style={{color: 'lightblue'}}>npierce1798@gmail.com</a> </p>

        </div>
      </div>
    );
  }
  
  export default Resume;