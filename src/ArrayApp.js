import './App.css';

function ArrayApp() {

    const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lukas"];

    return (

        <div className='App'>
            {names.map((name, key) => {
                return <h1 key={key}>{name}</h1>;
            })}
        </div>

    );
   }

    export default ArrayApp;