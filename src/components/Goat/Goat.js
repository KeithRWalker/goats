import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    const imgAlt = `A goat named ${goat.name}`;
    return (
      <div className="Goat col-3">
        <div className="card bg-dark text-white mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={goat.imageUrl} className="card-img-top" alt={imgAlt}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{goat.name}</h5>
              <li>Color: {goat.color}</li>
              <li>Disposition: {goat.disposition}</li>
              <li>Fullness: {goat.fullness}%</li>
              <li>Favorite Pose: {goat.favPose}</li>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
