import React from 'react';


function Trailers(props){
props.selectedMovie

    return (
      <div className='row'>
        <div className='col-md-4'>
          <iframe width="90%" src="https://www.youtube.com/embed/WHXxVmeGQUc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='col-md-4'>
          <iframe width="90%" src="https://www.youtube.com/embed/Pso0Aj_cTh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='col-md-4'>
          <iframe width="90%" src="https://www.youtube.com/embed/KA3kQKTbjzs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
  
  export default Trailers;

