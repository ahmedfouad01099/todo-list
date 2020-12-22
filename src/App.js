import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "fontawesome/fontawesome-free-5.12.1-web/css/all.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// showing vs-code github setup
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handelChange = (e) => {
    this.setState({
      item: e.target.value
    })

  }


  handelSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    }, /*() => console.log(this.state)*/
    );
  }

  clearList = (e) => {
    this.setState({
      items: []
    })
  }

  handelEdit = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterItems,
      item:selectedItem.title,
      id: id,
      editItem: true
    })
  }

  handelDelete = (id) => {
    const fiteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: fiteredItems })
  }
  render() {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handelChange={this.handelChange}
                handelSubmit={this.handelSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handelDelete={this.handelDelete}
                handelEdit={this.handelEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
