import './App.css';
import Profile from './components/profile/Profile';
import Adress from './components/profile/address';
import Fullname from './components/profile/fullname';
import i1 from './image1.jpg'
function App() {
  return (

    
      <div className="root container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img src={i1} alt="eeee" height="100" width="100" /> </button>
            <span className="name mt-3"></span> <Fullname /><span className="idd">@IKHLSSAMMAR</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <span className="idd1"><Adress /></span> <span><i className="fa fa-copy"></i></span> </div>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              <span className="number">11K <span className="follow">Followers</span></span>
            </div> <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> 
            </div>
            <div className="text mt-3">
            </div>
            
          </div>
        </div>
      </div>


  
  )

}



export default App;
