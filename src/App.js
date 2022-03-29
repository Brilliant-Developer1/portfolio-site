import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './App.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
import loader from './assets/loading.gif';

function App() {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const getRandomQuotes = arr => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const randomQuote = arr[randomIndex];

    return randomQuote;
  };
  const quote = getRandomQuotes(quotes);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setQuotes(data);
      });
  }, []);
  console.log(quote);
  // console.log(quotes.random());
  const scaleVariants = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: 0.3,
        delayChildren: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div className="app">
      {loading ? (
        <motion.div
          whileInView={{ scale: [1, 0] }}
          transition={{ ease: 'easeOut', delay: [7.8], duration: 0.4 }}
          className="app__loading-screen app__flex"
        >
          <img src={loader} alt="loading..." />
          <div>
            <p className="bold-text">{quote?.text}</p>
            <p className="p-text"> - {quote?.author}</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        >
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Testimonial />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
