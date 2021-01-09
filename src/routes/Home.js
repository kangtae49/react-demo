import Foot from 'components/Foot';
import Head from 'components/Head';
import Nav from 'components/Nav';
import Section from 'components/Section';
import { useState } from 'react';

function Home() {
  const [displayMenu, setDisplayMenu] = useState(true);

  return (
    <div className="Home">
      <Head displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
      <div className="Contents">
        {displayMenu && <Nav />}
        <Section />
      </div>
      <Foot />
    </div>
  );
}

export default Home;
