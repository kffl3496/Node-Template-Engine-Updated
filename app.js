const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');
global.employees = [];


function getNewEmployee() {
  inquirer.prompt([
    { 
      name: 'getEmployee', 
      question: 'Get a new Employee',
      type: 'confirm'
    }
  ]).then((answers) => {
    if(answers.getEmployee === true) {
      getEmployee();
    } else {
      const html = render(employees);
      fs.writeFile(outputPath, html, function(err) {
        if(err) throw err;
        console.log('Saved');
      });
    }
  });
}

function getEmployee() {
  inquirer.prompt([
    {
      name: 'type',
      question: 'What type of Team member?',
      choices: ['Manager', 'Engineer', 'Intern'],
      type: 'list'
    },
    { 
      name: 'name', 
      question: 'GetName'
    },
    {
      name: 'id',
      question: 'Enter Id: '
    },
    {
      name: 'email',
      question: 'Enter email: '
    }
  ]).then((answers) => {
    if (answers.type === 'Manager') {
      inquirer.prompt([
        {
          name: 'officenumber',
          question: 'Enter office number: '
        }]).then((answer) => {
          let employee = new Manager(answers.name, answers.id, answers.email, answer.officenumber);
          employees.push(employee);
          getNewEmployee();
        });
    }

    if (answers.type === 'Engineer') {
      inquirer.prompt([
        {
          name: 'github',
          question: 'Enter github: '
        }]).then((answer) => {
          let employee = new Engineer(answers.name, answers.id, answers.email, answer.github);
          employees.push(employee);
          getNewEmployee();
        });
    }

    if (answers.type === 'Intern') {
      inquirer.prompt([
        {
          name: 'school',
          question: 'Enter school: '
        }]).then((answer) => {
          let employee = new Intern(answers.name, answers.id, answers.email, answer.school);
          employees.push(employee);
          getNewEmployee();
        });
    }
  });
}

//     // Use user feedback for... whatever!!
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

const init = () => {

  getNewEmployee();

};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not. The fs npm package may have methods to check if a directory exists, and they
// may also have methods to create a directory that doesn't...

init();
