import './App.css';
import { useEffect, useState, useRef} from "react";
import { Link } from 'react-router-dom';
function App() {
  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState("");
  const inputRef = useRef();
  
  const helpData = [
    { command: "about...............", description: "Show the owner's personal information of the portfolio." },
    { command: "clear...............", description: "Clear the CLI board" },
    { command: "cv..................", description: "Link to the CV (curriculum vitae)." },
    { command: "experiences.........", description: "List all the experiences of the creator of this site." },
    { command: "help................", description: "Show all commands." },
    // { command: "interface...........", description: "Toggle the interface into dynamic mode." },
    { command: "projects............", description: "List large projects already done by the site owner." },
    { command: "social-network......", description: "Link to all social networks of the portfolio owner." },
    { command: "technical-skills....", description: "List all skills of the portfolio owner." }
  ];
  const about = [
    { command: "Full Name...........", description: "RANDRIAMBOLOLONA Andry Sambatra Gloria Flavien" },
    { command: "Cursus..............", description: "Graduate of ENI Fianarantsoa, UML designer, back-end and front-end developer." },
    { command: "About me............", description: "I'm a versatile IT professional comfortable with both front-end and back-end development. My strength lies in efficiently solving problems, as well as being adaptable in project management and design. My passion for technology drives me to constantly seek new ways to innovate and create effective solutions to meet my clients' needs." },
  ];

  const experience = [
    { command: "2024................", description: "President of ENI Students Association \n IDEA Academy Embassador \n Founder of ENI Hôtesse \n Founder and Organizer of ENI Novice Immersion (Tech Event) \n Organizer of the closing ceremony of the 40th anniversary of ENI" },
    { command: "2023................", description: "President of ENI Students Association \n  Founder and Organizer of Miray Tournament (sport event) \n Cofounder and CO-Organizer of Hack-It Hackathon \n Organizer of DevHunt Edition 02 \n Founder and Organizer of Bachelor IT (Tech Event and Forum ) \n Organizer of the 40th Anniversary of ENI" },
    { command: "2022................", description: "Designer and developper at ONN (Intern)" },
    { command: "2021................", description: "Designer and developper at CIDST (Intern) \n Designer and developper at Maison de la Communication Universitaire (Intern) \n Organizer of 'Salon de l'étudiant et de l'emploi 3rd edition' " },
  ];

  const project = [
    { command: "Portfolio CLI..................", description: "<a class='link' href='https://gloriaflavien.netlify.app' target='_blank'> Portfolio with a design apparenting as a Command Line Interface </a>" },
    { command: "Portfolio Dynamic Interface....", description: "<a class='link' href='' target='_blank'> Portfolio with a dynamic design </a>" },
    { command: "ENI Time Table schedule.......", description: "<a class='link' href='https://https://github.com/GloFlav/EDT_ENI' target='_blank'> A web application to automate the creation of the ENI timetable, considering the availability of teachers and the capacity of classrooms </a>" },
    { command: "FCE Geolocation Home...........", description: "A web application focused on GIS (Geographic Information System) to manage properties allocated to FCE (Fianarantsoa Côte Est) employees." },
    { command: "Task Scheduling................", description: "<a class='link' href='https://ordtab.netlify.app' target='_blank'> A Web application demonstrating the best scheduling of tasks using the table and graph method </a>." },
    { command: "ONN Stock board................", description: "A web application, focused on GIS, to manage the movements of automobile fleets at ONN (National Office of Nutrition) in Anosy, Antananarivo." },
    { command: "ONN Float board................", description: "A web application for the logistics management of ONN." }
  ];

  const socialnetwork = [
    { command: "Linkdin...........", description: "<a class='link' href='https://linkedin.com/in/gloria-flavien-randriambololona' target='_blank'>https://linkedin.com/in/gloria-flavien-randriambololona</a>" },
    { command: "Facebook..........", description: "<a class='link' href='https://facebook.com/flavien.randriambololona' target='_blank'>https://facebook.com/flavien.randriambololona</a>" },
    { command: "GitHub............", description: "<a class='link' href='https://github.com/GloFlav' target='_blank'>https://github.com/GloFlav</a>" },
    { command: "Mail..............", description: "<a class='link' href='mailto:rasgloflav@gmail.com'>rasgloflav@gmail.com</a>" }
  ];

  const technicalskill = [
    { command: "Programming languages.......................", description: "Java - Python - PHP - JavaScript - HTML5 - CSS3" },
    { command: "Technologie and more........................", description: "Spring Boot - React.js - React Native - Node.js - Flutter - Express - Next.js" },
    { command: "Project Management..........................", description: "Agile" },
    { command: "Design Methodologies - Modeling Languages...", description: "Merise - UML" },
    { command: "Version Control System......................", description: "GitHub" },
    { command: "Database Management Systems.................", description: "MySQL - PostgreSQL" }
  ];
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      let newOutput = '';
      newOutput += `gloriaflavien@portfolio:~$ ${input}\n`;

      switch (input) {
        case 'about':
          newOutput += '<table style="text-align: left; vertical-align: top;">';
          about.forEach(item => {
            newOutput += `<tr style="text-align: left; vertical-align: top;"><td class="command-cell" >${item.command}</td><td>${item.description}</td></tr>`;
          });
          newOutput += '</table>';
          break;

        case 'clear':
          setOutput('');
          setInput('');
          return;

        case 'cv':
          window.location.href = 'https://drive.google.com/file/d/1Y0gzoGKeHJkvvSkJY-6nBosmC5Vghhku/view?usp=sharing';
          break;

        case 'experiences':
          newOutput += '<table style="text-align: left; vertical-align: top;">';
          experience.forEach(item => {
            newOutput += `<tr style="text-align: left; vertical-align: top;"><td  class="command-cell" >${item.command}</td><td>${item.description}</td></tr>`;
          });
          newOutput += '</table>';
          break;

        case 'projects':
          newOutput += '<table style="text-align: left; vertical-align: top;">';
          project.forEach(item => {
            newOutput += `<tr style="text-align: left; vertical-align: top;"><td  class="command-cell" >${item.command}</td><td>${item.description}</td></tr>`;
          });
          newOutput += '</table>';
          break;
  
        case 'social-network':
          newOutput += '<table style="text-align: left; vertical-align: top;">';
          socialnetwork.forEach(item => {
            newOutput += `<tr style="text-align: left; vertical-align: top;"><td  class="command-cell"  >${item.command}</td><td>${item.description}</td></tr>`;
          });
          newOutput += '</table>';
          break;

        case 'technical-skills':
          newOutput += '<table style="text-align: left; vertical-align: top;">';
          technicalskill.forEach(item => {
            newOutput += `<tr style="text-align: left; vertical-align: top;"><td  class="command-cell" >${item.command}</td><td>${item.description}</td></tr>`;
          });
          newOutput += '</table>';
          break;

        case 'help':
        newOutput += '<table style="text-align: left; vertical-align: top;">';
        helpData.forEach(item => {
          newOutput += `<tr style="text-align: left; vertical-align: top;"><td class="command-cell" >${item.command}</td><td>${item.description}</td></tr>`;
        });
        newOutput += '</table>';
        break;
        
        case 'interface':
          return <Link to="/App1">Redirecting to App1</Link>;
          // break;

        default:
          newOutput += 'unknown command \n';
      }

      setOutput(output => output + newOutput);
      setInput('');
    }
  };
  useEffect(()=> {
    inputRef.current.focus()
  }, [])

  return (
    <div className="App">
      My Portfolio CLI  [Version 1.0.0] 
      <br/> Andry Sambatra Gloria Flavien RANDRIAMBOLOLONA (c) Not a Corporation.
      <div className='Title'>
        
        <br/>. . . . . . . . . .------.--. . . .-----. .-- . . . . . . . . . . . . . . . ....
        <br/>.. . . . . . . . .| . ___|. |. . / . \ .\/ ./. . . . . . . . . . . . . . . . ...
        <br/>.. __________ . . |. .__||. |__ / ._. \ . ./ . . . . . . . . . . . . . . . . ...
        <br/>..| . . . . .\ . .|__| . |_____|__/.\__\__/ . . . . . . . . . . . . . . . . . ..
        <br/>..|. . ._. . .\ . . . . . . . . . .__ . . . ._____. . . . ____. __. . . . . . ..
        <br/>..| . .|.|. . |. . . . . . . . . ./. | . . ./. . .\. . . | . .|/ .\. . . . . ...
        <br/>..|. . | | . .| . . . . . . . . _/. .|____ /. ._. .\. . .|. . ( . .). . . . . ..
        <br/>..| . .|.|. . |. . . . . . . . | . . . . .|. ./.|__| . . | . .|\__/. . . . . ...
        <br/>..|. . |_| . .|_____. .__ .____|_ . . ____| . |__ _____ .|. . |____ . _____ . ..
        <br/>..| . . . . . /. . .\.|. |/. . \ | . | .|. . . . / . . \ | . .|. . | / . . \ ...
        <br/>..|. . ._____/. ._. .\| . . __. \|. .|. |_. . ._/ . _ . \|. . | . .|/ . _ . \ ..
        <br/>..| . .|. . |. .|.|. .|. . / .\__| . | ___|. .|| . | | . | . .|. . | . | | . |..
        <br/>..|. . | . .| . |_| . | . | . . .|. .\/ . | . ||. .|_|. .|. . | . .|. .|_|. .|..
        <br/>..| . .|. . .\ . . . /|. .|. . . \ . . . /|. .|.\. . . ./| . .|. . |\. . . ./...
        <br/>..|____| . . .\_____/ |___| . . . \_____/ |___| .\_____/.|____|____|.\_____/. ..
        <br/>.. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ...
        
      </div>
      
      {/* <p>
        Type <div className="green"> interface </div> if you want to switch to dynamic mode
      </p> */}
      <p>
        Type <div className="green"> help </div> to know all commands
      </p>
      {/* <div className="terminal">
        {output} 
      </div> */}
      <div className="terminal" dangerouslySetInnerHTML={{ __html: output }} />

      <div className="input-line">
        <span>
          gloriaflavien@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleEnter}
        />
      </div>
        
    </div>
  );
}

export default App;
