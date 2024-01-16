import BreadCrumb from './components/BreadCrumb';
import Content from './components/Content';
import FAQ from './components/FAQ';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  return (
    <>
      <div className="ml-16 max-w-7xl">
        <Navbar />
        <BreadCrumb />
        <Heading />
        <Title />
        <Content />
        <FAQ />
      </div>
    </>
  );
}

document.body.style.marginBottom = '300px';

export default App;
