import { useEffect, useState } from 'react';
import './App.css';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import ModalGenerator from './components/ModalGenerator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Documents from './components/Documents';
import Pagetitle from './components/Pagetitle';
import Iot from './components/Iot';
import Admin from './components/Admin';

function App() {
  // data will be received from API and further send to COMPONENTS through props
  const [app, setApp]= useState(null);
  const [user, setUser] = useState(null);
  const [iot, setIot]= useState(null);
  const [notifications, setNotificaitons]= useState(null);
  const [reminder, setReminder]= useState(null);
  const [gallery, setGallery]= useState(null);
  const [documents, setDocuments]= useState(null);
  const [log, setLog]= useState(null);


  // with php rest api
  useEffect((e)=>{
    fetch("http://localhost/iot_controller.php", {
    })
      .then(response=>{
        // console.log(response);
        if (response.status===200 && response.ok===true) {
          return response.json();
        } else {
          throw ("sorry i cant access database services / api")
        }
       })
      .then(data=>{
        // console.log(data);
        setApp(data.app);
        setUser(data.user);
        setIot(data.iot);
        setLog(data.log);
        setNotificaitons(data.notification);
        setReminder(data.reminder);
        setGallery(data.gallery);
        setDocuments(data.documents);
      })
      .catch((e)=>{
        console.log(e)
      })
  }, [])

  // with json-server
  // useEffect((e)=>{
  //   fetch("http://localhost:3300/rest_api_php", {})
  //     .then(response=>{
  //       if (response.status===200 && response.ok===true) {
  //         return response.json();
  //       } else {
  //         throw ("sorry i cant access database services / api")
  //       }
  //      })
  //     .then(data=>{
  //       setApp(data.app);
  //       setUser(data.user);
  //       setIot(data.iot);
  //       setLog(data.log);
  //       setNotificaitons(data.notification);
  //       setReminder(data.reminder);
  //       setGallery(data.gallery);
  //       setDocuments(data.documents);
  //     })
  //     .catch((e)=>{
  //       console.log(e)
  //     })
  // }, [])
  
  
  return (
    <>
        <BrowserRouter>
        {user && <Header user={user} app={app} notifications={notifications} reminder={reminder} profile={""} />};
        {user && <Sidebar profile={user.profile} iot={iot} gallery={gallery} documents={documents} />}
        {<main id="main" className="main">
        {user && <Pagetitle />}
        <Routes>
          <Route path='/' element={iot && <Main iot={iot}gallery={gallery} documents={documents}  log={log} />} />
          <Route path='/gallery/:arg' element={<Gallery />}/>
          <Route path="/documents/:name" element={<Documents />}/>
          <Route path='/iot/:name' element={<Iot />} />
          <Route path='/adminsection/:name' element={<Admin />} />
        </Routes>
        </main>}
        <ModalGenerator />
      </BrowserRouter>
      
    </>
  );
}

export default App;
