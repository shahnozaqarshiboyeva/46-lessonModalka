import React, { Component } from 'react'
import { Modal,ModalHeader, ModalBody,ModalFooter } from 'reactstrap'
export default class AddModal extends Component {
  state={
    name:'',
    adress:'',
  }
  addUsers=()=>{
    const{users}=this.props
    const {name,adress}=this.state
    if (name && adress){
      users.push({name:name,adress:adress})
      this.setState({
     users
      })
      this.props.togleModal()
    }
this.setState({
  name:'',
  adress:''
})  
}
  render() {
    const {togleModal,modalVisible}=this.props
    return (
      <div>
        <Modal isOpen={modalVisible} toggle={togleModal}>
  <ModalHeader><h1>Add User</h1></ModalHeader>
  <ModalBody>
    <form>
      <input className='form-control my-2' type="text" placeholder='Name...'onChange={(e)=>this.setState({name:e.target.value})} />
      <input className='form-control my-2' type="text" placeholder='Adress...' onChange={(e)=>this.setState({adress:e.target.value})}/>
    </form>
  </ModalBody>
  <ModalFooter>
    <button className='btn btn-info mx-2' onClick={this.addUsers}><h5>Save</h5></button>
    <button className='btn btn-danger mx-2' onClick={togleModal}><h5>Close</h5></button>
  </ModalFooter>
</Modal>
      </div>
    )
  }
}
