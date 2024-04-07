import React from 'react';

function Commands() {
  
    const help = [
        { id: 1, command: "about", description: "Show the owner's personal information of the portfolio." },
        { id: 2, command: "cv", description: "Link to the CV (curriculum vitae)." },
        { id: 3, command: "experiences", description: "List all the experiences of the creator of this site." },
        { id: 4, command: "help", description: "Show all commands." },
        { id: 5, command: "interface", description: "Toggle the interface into dynamic mode." },
        { id: 6, command: "project", description: "List large projects already done by the site owner." },
        { id: 7, command: "social-network", description: "Link to all social networks of the portfolio owner." },
        { id: 8, command: "technical-skills", description: "List all skills of the portfolio owner." }
      ];

  return (
    <table>
      <tbody>
        {help.map(item => (
          <tr key={item.id}>
            <td>{item.command}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Commands;
