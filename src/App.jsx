import  { useState } from 'react';
import './App.css';
import Card from './components/Card';
import WeatherApp from './components/weather-app';
import TTT from './components/tic-tac-toe';
import GithubUserFinder from './components/github-finder';
import SearchDropDown from './components/search-dropdown';
import ScrollBar from './components/scroll-bar';
import ThemeSwitch from './components/theme-switch';
import QRGenerator from './components/qr-generator';
import LoadMore from './components/load-more';
import StarRating from './components/star-rating';
import RandomColorGen from './components/randomColorGen';
import Accordion from './components/accordion';

const components = {
  'Weather App': WeatherApp,
  'Tic Tac Toe': TTT,
  'Github User Finder': GithubUserFinder,
  'Search Drop Down': SearchDropDown,
  'Scroll Bar': ScrollBar,
  'Theme Switch': ThemeSwitch,
  'QR Generator': QRGenerator,
  'Load More': LoadMore,
  'Star Rating': StarRating,
  'Random Color Generator': RandomColorGen,
  'Accordion': Accordion,
};

function App() {
  const [activeComponentKey, setActiveComponentKey] = useState(null);

  const renderActiveComponent = () => {
    if (!activeComponentKey) return null;
    const ActiveComponent = components[activeComponentKey];
    return <ActiveComponent />;
  };

  return (
    <div className="App">
      <div className="card-container">
        {Object.keys(components).map((key) => (
          <Card key={key} title={key} onClick={() => setActiveComponentKey(key)} />
        ))}
      </div>
      <div className="component-container">
        {renderActiveComponent()}
      </div>
    </div>
  );
}

export default App;
