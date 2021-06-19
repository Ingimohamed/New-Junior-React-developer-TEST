import React, { Component } from "react";
import { connect } from "react-redux";
import { loaditems } from '../../store/items';



class ClothesItems extends Component {

  componentDidMount() {
      this.props.loaditems();
  }

  render() {
   
    return (
      <div className="cards">
        {this.props.items.map((item) => (
          <div key={item.id} className="card">
            {item.description}           
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    items: state.entities.items.list
});

const mapDispatchToProps = dispatch => ({
    loaditems:() => dispatch(loaditems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClothesItems);



