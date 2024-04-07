import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
        
        <div className='center'>
          <div className='menu'>
            <div className='logo'>
              <h3>A2S Soluções Digitais</h3>
            </div>
            <div className='item-menu'>
              <a href='http://institucional-teste.s3-website-sa-east-1.amazonaws.com/'>Login</a>
            </div>
          </div>

          <div className='form'>
            <h2>Entre em Contato !</h2>
            
            <form>             
              <div className='items-form'>
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='submit' />
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
