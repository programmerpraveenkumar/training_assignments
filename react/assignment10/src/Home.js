// To use a component, you must import it first
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  let message = "All are welcome";
  return (
    <div>
      {/* after importing, you can use the component */}
      <Header />
      <h1>Welcome home...</h1>
      <p>{message}</p>
      <Footer />
    </div>
  );
}

export default Home;
