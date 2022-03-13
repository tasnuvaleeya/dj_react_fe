import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          userame: '',
          password: '',
          posts: []
      }
    }

    userNameHandler = (event) => {
        this.setState({
            userame: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => this.setState({posts: data}))
    }
    render() {
      const {posts} = this.state
    return (
        <div>
            <div className='container'>

            
            
                <input type="text" value={ this.state.userame} placeholder='Enter your username ' className='form-control' onChange={this.userNameHandler}/>
                <input type="password" value={ this.state.password} placeholder='Enter your password ' className='form-control'  onChange={this.passwordHandler}/>
                <button className="btn btn-success">Click Me</button>
                {posts.map(post => <h2 key={post.id}>{post.title}</h2>)}

                </div>
      </div>
    )
  }
}

export default Form