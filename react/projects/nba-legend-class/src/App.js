import Container from 'react-bootstrap/Container';
import Header from './Header';
import CardContainer from './CardContainer';

function App() {
  return (
    <Container className="text-center mt-4">
      {/* Header */}
        {/* This is just a header */}
      <Header />
      {/* Card Container */}
        {/* This card container will handle the state and have a form
            to change the state, filter the cards, and render cards based on the filter
        */}
      <CardContainer />

    </Container>
  );
}

export default App;