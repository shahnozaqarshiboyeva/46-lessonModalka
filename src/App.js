import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddModal from './components/AddModal'
export default class App extends Component {
 state={
    modalVisible:false,
    users:[
      {name:'Usmon',adress:'Samarqand'}
    ]

 }
 togleModal=()=>{
  this.setState({
    modalVisible: !this.state.modalVisible
  })
 }
  render() {
const {modalVisible,users}=this.state
    return (
      <div className='container'>
        <button className='btn btn-info mt-3' onClick={this.togleModal}><h5>Modal</h5></button>
      <AddModal users={users} modalVisible={modalVisible} togleModal={this.togleModal}/>
      <table className='table table-bordered table-hover table-striped mt-3'>
  <thead>
    <tr>
      <th>T/h</th>
      <th>Name</th>
      <th>Adress</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((item,index)=>{
        return <tr>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.adress}</td>
        </tr>
      })
    }
  </tbody>
 </table>
</div>
    )
  }
}
