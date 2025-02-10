import "./index.css";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className='container flex h-screen justify-center items-center m-auto'>
        <div className='flex flex-col sm:w-3/5 mx-3 sm:mx-auto gap-8 p-12 bg-White rounded-br-[100px] md:rounded-br-[150px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-xl'>
          <Form />
          <Result />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
