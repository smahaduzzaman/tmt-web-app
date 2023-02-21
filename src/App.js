import './styles/main.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >Task Management Tool</motion.h1>

      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos></Todos>
        <DisplayTodos></DisplayTodos>
      </motion.div>
    </div>
  );
}

export default App;
