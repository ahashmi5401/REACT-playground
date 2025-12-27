import React from 'react'
import axios from 'axios'

const Axios =  () => {
    async function fetchData() {
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(`the using axios ${data}`);
    }
  return (
    <div>
      <button onClick={fetchData}>Fetch Data with Axios</button>
    </div>
  )
}

export default Axios