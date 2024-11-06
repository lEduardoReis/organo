import Banner from './componentes/Banner/Banner.components';
import InputText from './componentes/InputText/InputText.components';
function App() {
  return (
    <div className="App">
      <Banner/>
      <InputText label ="Nome" placeholder="Digite seu nome"/>
      <InputText label="Cargo" placeholder="Digite seu cargo"/>
      <InputText label="Imagem" placeholder="Digite endereço da imagem"/>
      <InputText label="Time"/>
    </div>
  );
}

export default App;
