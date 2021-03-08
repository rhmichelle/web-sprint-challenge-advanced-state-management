import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
// import { } from '../actions/index';

 const SmurfList = (props) => {
    const isLoading = props.smurfs.isLoading;


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="listContainer">
            {props.smurfs.smurfs.map((smurf) => (
                 <Smurf key={smurf.id} smurf={smurf}/>
                )
                )}
        </div>
        )
}


const mapStateToProps = (state) => {
    return {
        isLoading: state,
        smurfs: state
    }
}

export default connect(mapStateToProps, { })(SmurfList);



