import './App.css'
import {JobColumn} from './component/JobColumn'
import{ Header} from './component/Header'
import{ Footer} from './component/Footer'
import inProgressImg from './images/inprogess.png'
import startImg from './images/to-do-list-icon.jpg'
import completed from './images/correct.png'

function App() {  
    return ( <div className="App">
        <Header />
        <main className='headerfunc'>
       <JobColumn imgIcon={startImg} status='Need to Complete' />
       <JobColumn imgIcon={inProgressImg} status='InProgress'/>
       <JobColumn imgIcon={completed} status='Completed'/>
        </main>
        

    <Footer />
    </div>)
// const obj1 ={emid:'Emp123',empdept:'IT'} ;

// return (<div>EMP Department: {obj1.empdept}</div>)  

}


export default App;


