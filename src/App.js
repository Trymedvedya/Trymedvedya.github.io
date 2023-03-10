import './App.css';
import React, { useState } from 'react';
import ModalWindowComp from './components/ModalWindowComp/ModalWindowComp';
import ButtonForm from './components/UI/ButtonForm/ButtonForm';
function App() {
  const [modVis, setModVis] = useState(false);
  return (
    <div className="App">
      <ModalWindowComp
        visible={modVis}
        setVisible={setModVis}>
      </ModalWindowComp>
      <ButtonForm 
        style={{fontSize:'30pt', marginTop:'50vh'}}
        onClick={() => setModVis(true)}>
        Отправить заявку
      </ButtonForm>
    </div>
  );
}

export default App;
