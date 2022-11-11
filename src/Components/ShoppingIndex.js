import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CategoriesComponent } from "./CategoriesComponent";
import { DetailsComponent } from "./DetailsComponent";
import { HomeComponent } from "./HomeComponent";
import { LoginComponent } from "./LoginComponent";
import { ProductsComponent } from "./ProductsComponent";
import { RegisterCompoment } from "./RegisterComponent";
import './ShoppingIndex.css';


export function ShoppingIndex(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
            <nav className="d-flex justify-content-around text-bg-success p-2">
              <div><span className="logo">@A</span>NUP</div>
              <div>My Website....</div>
            </nav>
              <header className="d-flex justify-content-between bg-dark text-white p-2">
                <div className="brand">Shopper.</div>
                <div>
                    <span><Link to='/home'>Home</Link></span>
                    <span><Link to='/categories'>Categories</Link></span>
                    <span><Link to='/register'>Register</Link></span>
                    <span><Link to='/login'>Login</Link></span>                    
                </div>
                <div className="nav-icons">
                    <span className="bi bi-search"></span>
                    <span className="bi bi-person"></span>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-cart4"></span>
                </div>
              </header>
              <section>
                <Routes>
                    <Route path="/home" element={<HomeComponent/>}></Route>
                    <Route path="/Categories" element={<CategoriesComponent/>}></Route>
                    <Route path="/products/:category" element={<ProductsComponent/>}></Route>
                    <Route path="/details/:id/" element={<DetailsComponent/>}></Route>
                    <Route path="register" element={<RegisterCompoment/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/" element={<HomeComponent/>}></Route>
                    <Route path="*" element={<code><p>Page you requested not found</p></code>}></Route>
                </Routes>
              </section>
              <footer className="row bg-dark text-white p-2">                  
                  <div className="col">
                    <h2>support</h2>
                    <ul className="list-unstyled">
                        <li>contact us</li>
                        <li>FAQS</li>
                        <li>Size Maters</li>
                        <li>Non of the above</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h2>support</h2>
                    <ul className="list-unstyled">
                        <li>contact us</li>
                        <li>FAQS</li>
                        <li>Size Maters</li>
                        <li>Non of the above</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h2>support</h2>
                    <ul className="list-unstyled">
                        <li>contact us</li>
                        <li>FAQS</li>
                        <li>Size Maters</li>
                        <li>Non of the above</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h2>support</h2>
                    <ul className="list-unstyled">
                        <li>contact us</li>
                        <li>FAQS</li>
                        <li>Size Maters</li>
                        <li>Non of the above</li>
                    </ul>
                  </div>
                  
              </footer>
            </BrowserRouter>

        </div>
    )
}