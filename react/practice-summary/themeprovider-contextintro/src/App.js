
import './App.css';
import { styled, createGlobalStyle, ThemeProvider } from 'styled-components';
import ThemeContext from './ThemeContext';
import H2 from './H2';

// Import theme object:
import { theme } from './theme';

console.log(theme)

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.colors.text.other};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.other};
`

function App() {
  return (
    // This is a context provider:
    // This gives every component access to an object called theme:
    // in order to access the theme object, you need to use the useContext hook:
    <ThemeContext.Provider value={theme}>
      {/* THEME PROVIDER FROM STYLED COMPONENTS (This basically gives all styled components access to a prop called theme:): */}
      <ThemeProvider theme={theme}>
        <div className="App">
          <H1>This is my H1!</H1>
          <H2 />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
