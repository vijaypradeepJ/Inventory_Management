import React from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { RiHome3Fill } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaPersonBiking } from "react-icons/fa6";
import { FaShoppingCart,FaBell,  FaUser,FaDiscourse } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";



const Menubar =() => {

    return (
        <>
            <aside >
                

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                               <Link to="/" class="list"><RiHome3Fill/><span>Home</span></Link>
                            </li>

                            <li className="nav__item">
                            <Link to="/category" class="list"><FaDiscourse/><span>Category</span></Link>
                            </li>

                           

                            

                            <li className="nav__item">
                            <Link to="/product" class="list"><MdOutlineProductionQuantityLimits/><span>Product</span></Link>
                            </li>

                            <li className="nav__item">
                            <Link to="/customer" class="list"><FaPerson/><span>Customer</span></Link>
                            </li>

                            <li className="nav__item">
                            <Link to="/supplier" class="list"><FaPersonBiking/><span>Supplier</span></Link>
                            </li>
                            <li className="nav__item">
                            <Link to="/purchases" class="list"><FaShoppingCart/><span>Purchases</span></Link>
                            </li>
                            <li className="nav__item">
                            <Link to="/sales" class="list"><FaBell/><span>Sales</span></Link>
                            </li>
                            <li className="nav__item">
                            <Link to="/users" class="list"><FaUser/><span>Users</span></Link>
                            </li>
                            <li className="nav__item">
                            <Link to="/report" class="list"><IoDocument/><span>Report</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                
            </aside>

            
        </>
    );
};

export default Menubar;
