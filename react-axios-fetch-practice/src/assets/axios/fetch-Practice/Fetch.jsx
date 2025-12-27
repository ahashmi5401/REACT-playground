const Fetch = () => {
    async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(` the data using fetch ${data}`);
    }
  return (
    <div>
      <button onClick={fetchData}>Fetch Data with Fetch API</button>
    </div>
    
  )
}

export default Fetch