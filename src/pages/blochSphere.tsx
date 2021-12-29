import BlochSphere from '../engines/BlochSphereEngine';
import text from '../assets/text/blochSphereText';
import Latex from 'react-latex';

const Home = () => {
  return (
    <div className="container">
      <div>
        <h1> Bloch Sphere </h1>
      </div>
      <div className="row row-cols-2">
        <div className="col-md">
          <BlochSphere />
          <div>
            <label className="form-label">
              <Latex> $\theta$ value </Latex>
            </label>
            <input type="range" className="form-range"></input>
          </div>
          <div>
            <label className="form-label">
              <Latex> $\phi$ value </Latex>
            </label>
            <input type="range" className="form-range"></input>
          </div>
        </div>
        <div className="col-sm overflow-auto">
          <p className="explain">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
