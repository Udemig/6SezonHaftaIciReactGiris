import "./App.css";
import Aside from "./components/Aside";
import Card from "./components/Card";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";
import HeaderRight from "./components/HeaderRight";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
function App() {
  const products = [
    {
      productImg:
        "https://images.unsplash.com/photo-1691478061394-28e2dbf46e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",

      productName: "mantar",
      productPrice: 150,
      productStock: 15,
    },

    {
      productImg:
        "https://images.unsplash.com/photo-1691478061394-28e2dbf46e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",

      productName: "patlıcan",
      productPrice: 150,
      productStock: 15,
    },

    {
      productImg:
        "https://images.unsplash.com/photo-1691478061394-28e2dbf46e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",

      productName: "biber",
      productPrice: 150,
      productStock: 15,
    },

    {
      productImg:
        "https://images.unsplash.com/photo-1691478061394-28e2dbf46e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",

      productName: "domates",
      productPrice: 150,
      productStock: 15,
    },
  ];

  return (
    <div >
      <Header />
      <UserCard />
      <ContactPage/>
      {/* <h1>Ana Sayfa</h1>
      <main className="main">
        <div className="products">
          {products.map((product) => {
            //Eğer fonksiyonda süslü parantez kullanıyosanız ekrana basmak istediğiniz jsx kodalrını return() içine alamsılınız
            //Örneğin dizi.map((diziitem)=>{return(<div>{diziitem}</div>)})
            //eğer sadece jsx return edeceksiniz harici js fonksiyonu yazamaycaksınız aşağıdaki gibi kullanbilirniz;
            //örneğin dizi.map((diziitem)=>(<div>{diziitem}</div>))
            console.log(product);
            //iki farklı component arasdında veri alışverişi için props yöntemini kullnaırız
            //Burada Card componentine map den dönen product objesini kendi belirlediğimiz props ismi altında gönderiyoruz
            return <Card productInfo={product} />;
          })}
        </div>
        <Aside />
      </main> */}
    </div>
  );
}

export default App;
