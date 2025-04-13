import { IoSearchOutline } from "react-icons/io5"
import { CiBellOn } from "react-icons/ci"
import { MdOutlineMessage } from "react-icons/md"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { IoHomeOutline } from "react-icons/io5"
import { TfiList } from "react-icons/tfi"
import { AiFillTag } from "react-icons/ai"
import { FiFolder } from "react-icons/fi"
import { FaUserFriends } from "react-icons/fa"
import { IoIosStarOutline } from "react-icons/io"
import { BsBarChartLineFill } from "react-icons/bs"
import { MdMessage } from "react-icons/md"
import { FaRegCircleQuestion } from "react-icons/fa6"
import { BiAward } from "react-icons/bi"
import { IoPerson } from "react-icons/io5"
import { CiSettings } from "react-icons/ci"
import CategoryList from "../CategoryList"

import "./index.css"

function Dashboard(){
    return(
        <div className="dashboard-container">
            <nav className="nav-bar">
                <div className="fast-image">
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="cart" className="cart-image"/>
                <p className="fastcart">fastcart</p>
                </div>
                <div className="searchname-icon">
                <IoSearchOutline className="search-icon"/>
                <p className="search">Search...</p>
                </div>
                <div className="header-icons-container">
                <div className="icons-section">
                <MdOutlineMessage className="message"/>
                <CiBellOn className="bell"/>
                </div>
                <div className="name-container">
                    <p className="style">R</p>
                    <p className="name">Randhir Kumar</p>
                </div>
                <MdOutlineKeyboardArrowDown className="key-arrow"/>
                </div>
            </nav>
            <div className="container">
            <div className="icons-text-container">
            <div className="icon-text">
                <IoHomeOutline className="icon"/>
                <p className="text">Dashboard</p>
            </div>
            <div className="icon-text">
                <TfiList className="icon"/>
                <p className="text2">Orders</p>
            </div>
            <div className="icon-text">
                <AiFillTag className="icon"/>
                <p className="text1">Products</p>
            </div>
            <div className="icon-text">
                <FiFolder className="icon"/>
                <p className="text">Categories</p>
            </div>
            <div className="icon-text">
                <FaUserFriends className="icon"/>
                <p className="text">Customers</p>
            </div>
            <div className="icon-text">
                <BsBarChartLineFill className="icon"/>
                <p className="text1">Reports</p>
            </div>
            <div className="icon-text">
                <IoIosStarOutline className="icon"/>
                <p className="text1">Coupons</p>
            </div>
            <div className="icon-text">
                <MdMessage className="icon"/>
                <p className="text2">Inbox</p>
            </div>
            <p className="text-heading">Other information</p>
            <div className="icon-text">
                <FaRegCircleQuestion className="icon"/>
                <p className="text3">Knowledge Base</p>
            </div>
            <div className="icon-text">
                <BiAward className="icon"/>
                <p className="text3">Product Updates</p>
            </div>
            <p className="text-heading">Settings</p>
            <div className="icon-text">
                <IoPerson className="icon"/>
                <p className="text3">Personal Settings</p>
            </div>
            <div className="icon-text">
                <CiSettings className="icon"/>
                <p className="text4">Global settings</p>
            </div>
            </div>
            <div className="categories-container">
                <div className="add-category-container">
                    <h1 className="category-heading">Categories</h1>
                    <button type="button" className="add-button">+ Add Category</button>
                </div>
                <CategoryList/>
            </div>
            </div>
        </div>
    )
}

export default Dashboard