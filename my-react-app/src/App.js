import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import QuizPage from './pages/QuizPage';

// import QuizPage from './pages/QuizPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <QuizPage />
      <Footer />
    </div>
  );
}

export default App;

