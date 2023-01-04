import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card text-bg-success mt-3">
            <div class="card-header">PHP kursai</div>
            <div class="card-body">
              Čia išmoksite apie PHP
              <button class='btn btn-success'>Plačiau</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-bg-info mt-3">
              <div class="card-header">PHP kursai</div>
              <div class="card-body">
                Čia išmoksite apie PHP
                <button class='btn btn-success'>Plačiau</button>
              </div>
            </div>
        </div>
        <div class="col-md-4 ">
          <div class="card text-bg-warning mt-3">
              <div class="card-header">PHP kursai</div>
              <div class="card-body">
                Čia išmoksite apie PHP
                <button class='btn btn-success'>Plačiau</button>
              </div>
            </div>
        </div>
      </div>
      
    </div> 
     
  );
}

export default App;
