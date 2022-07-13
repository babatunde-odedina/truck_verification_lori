import { useEffect, useState } from 'react';
import Addtasks from './components/Addtasks';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Input Truck Number',
      link: 'https://nvis.frsc.gov.ng/VehicleManagement/VerifyPlateNo',
      reminder: false,
    },
    {
      id: 2,
      text: 'Input Driver & Motor boy Number',
      link: '',
      reminder: false,
    },
    {
      text: 'Snap Driver License  ',
      link: '',
      reminder: false,
      id: 3,
    },
    {
      text: 'Snap Vehicle License',
      link: ' https://verify.autoreg.ng/',
      reminder: false,
      id: 4,
    },
    {
      id: 5,
      text: 'input VIN / Chassis Number',
      link: '',
      reminder: false,
    },

    {
      text: 'Check Road Worthiness  ',
      link: '',
      reminder: false,
      id: 6,
    },
    {
      text: 'Check Hackney Permit  ',
      link: '',
      reminder: false,
      id: 7,
    },
    {
      text: 'Heavy Duty Permit / State Carriage',
      link: '',
      reminder: false,
      id: 8,
    },
    {
      text: 'Vehicle Insurance',
      link: '',
      reminder: false,
      id: 9,
    },
    {
      text: 'Snap Driver and Motor Boy',
      link: '',
      reminder: false,
      id: 10,
    },
  ]);

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem('tasks'));
    console.log(ls);
    if (ls !== null) {
      setTasks(ls);
    } else if (ls === null) {
      setTasks(tasks);
    }
  }, []);

  // let newTask = JSON.parse(window.localStorage.getItem('tasks'));

  // toggle reminder
  const toggleReminder = (id) => {
    const elementsIndex = tasks.findIndex((element) => element.id === id);
    console.log(elementsIndex);
    let newTasks = [...tasks];
    newTasks[elementsIndex] = {
      ...newTasks[elementsIndex],
      reminder: !newTasks[elementsIndex].reminder,
    };
    console.log(newTasks);
    // setTasks(newTasks);
    const storeTaskLS = localStorage.setItem('tasks', JSON.stringify(newTasks));
    console.log(storeTaskLS);
    let updatedTasks = JSON.parse(localStorage.getItem('tasks'));

    setTasks(updatedTasks);
    // setTasks(localStorage.setItem('tasks', JSON.stringify(newTasks)));
  };

  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/' exact>
            {tasks.length > 0 ? (
              <Tasks tasks={tasks} onToggle={toggleReminder} />
            ) : (
              <h4>No task to show</h4>
            )}
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
