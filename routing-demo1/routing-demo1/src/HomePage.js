const HomePage = () => {
    // Handle form submission and construct the URL with query parameters
    const handleSubmit = (event) => {
      event.preventDefault();
      const name = event.target.elements.name.value;
    //   const age = event.target.elements.age.value;
    //   const url = `/destinationPage?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`;
         const url=`/destinationPage?name=${encodeURIComponent(name)}`;
         // Redirect to the destination page
         window.location.href = url;
    };
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        {/* <input type="number" name="age" placeholder="Age" /> */}
        <button type="submit">Submit</button>
      </form>
    );
  };
  export default HomePage;