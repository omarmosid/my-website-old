import React, { useState } from 'react'
import Layout from '../components/reusable/layout/layout'
import axios from 'axios'

const Test = () => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input)
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  return (
    <Layout>
      <form style={{ marginTop: '150px' }} onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </Layout>
  )
}

export default Test
