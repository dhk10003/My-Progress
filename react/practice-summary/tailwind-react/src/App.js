import {useState, useEffect} from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(()=>{
    console.log("Dark Mode: ", darkMode)
  },[darkMode]) 


  function SideNav() {
    return (
      <div className={ darkMode ? "dark" : ""}>
        <nav className="flex flex-col fixed bg-primary dark:bg-secondary h-screen ">
          {/* text-2xl will be 1.5 rem*/}
          <ul className="p-[20px] text-2xl">

            <li className="navItem group">
              <h1>Item 1</h1>
              <span className="toolTip group-hover:scale-100">
                <h3>ToolTip!</h3>
              </span>
            </li>

            <li className="navItem group">
              <h1>Item 2</h1>
              <span className="toolTip group-hover:scale-100">
                <h3>ToolTip!</h3>
              </span>
            </li>

            <li className="navItem group">
              <h1>Item 3</h1>
              <span className="toolTip group-hover:scale-100">
                <h3>ToolTip!</h3>
              </span>
            </li>

            <li className="navItem group">
              <h1>Item 4</h1>
              <span className="toolTip group-hover:scale-100 group/span">
                <h3>ToolTip!</h3>
                <h5 className="group-hover/span:text-blue-900">TEST</h5>
              </span>
            </li>

          </ul>
        </nav>

        <main className="flex flex-col flex-grow left-">
          <div className="flex items-center justify-center bg-secondary dark:bg-primary p-[20px] h-screen">
            <button className="bg-secondary-200 dark:bg-primary-500 w-[100px] h-[100px] shadow-xl" onClick={()=>{setDarkMode(!darkMode)}}>Toggle Dark Mode</button>
          </div>
        </main>
      </div>

    );
  }

  return (
    // sizing with tailwind:
    // w-1 evaluates to width: .25rem or 4px
    // w-2 evaluates to width: .5rem or 8px
    // w-3 evaluates to width: .75rem or 12px
    // w-4 evaluates to width: 1rem or 16px
    // w-16 evaluates to width: 4rem or 64px

    // we can add our own custom values by adding brackets after the dash.
    // this looks like: w-[1.5rem] which evaluates to width: 1.5rem or 24px

    <div>
      <SideNav />
    </div>
  );
}

export default App;
