import React, { Component } from 'react'
import { useState } from 'react'
//nestJS
import { api } from '../utils/conections'

export default class Home extends Component {
  
  getService = async () => {
    const data = await api.get('/')
    console.log(data);
  }

  
  render() {
    return (
      <div>Home View chikilin
        <button onClick={ this.getService } >
          Click para el evento
        </button>

      </div>
    )
  }
}
