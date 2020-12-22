import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handelChange, handelSubmit, editItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handelSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primay text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handelChange}
            />
          </div>
          <button type="submit"
            disabled={item ? false : true}
            className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3 text-uppercase"}>
            {editItem ? "Edit Item" : "Add Item"}</button>
        </form>
      </div>
    );
  }
}
