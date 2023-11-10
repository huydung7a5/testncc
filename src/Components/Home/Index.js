// Thành phần đăng nhập
import './Index.css';
import icon1 from '../../assets/images/css-icon.png';
import icon2 from '../../assets/images/html-icon.png';
import icon3 from '../../assets/images/url-icon.png';
import logo from '../../assets/images/logoNCC.png';
function Index(props) {

    return (
        <div className="swaper">
            <div className="viewleft">
                <div className="viewtext">
                    <h1 className="text">Home</h1>
                </div>
                <div className="viewtext">
                    <h1 className="text">News</h1>
                </div>
                <div className="viewtext">
                    <h1 className="text">Blog</h1>
                </div>
                <div className="viewtext">
                    <h1 className="text">Contact</h1>
                </div>
            </div>
            <div className="viewright">
                <div className="viewimage">
                    <img className="image" src={logo} alt="" />
                </div>
                <div className="viewtitle">
                    <div className="viewitem">
                        <div className="viewitem1">
                            <p>Logen ipsum dolor sit asmet? </p>
                        </div>
                        <div className="viewitem2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
                        </div>
                    </div>
                </div>
                <div className="viewfooter">
                    <div className="viewfooter1">
                        <div className="viewtxtlorem">
                            <p className="txtlorem">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='viewimageicon'>
                            <img className="imageicon" src={icon1} alt="" />
                            <p className="detail">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis
                            </p>
                        </div>
                    </div>
                    <div className="viewfooter2">
                        <div className="viewtxtlorem">
                            <p className="txtlorem">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='viewimageicon'>
                            <img className="imageicon" src={icon2} alt="" />
                            <p className="detail">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis
                            </p>
                        </div>
                    </div>
                    <div className="viewfooter3">
                        <div className="viewtxtlorem">
                            <p className="txtlorem">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='viewimageicon'>
                            <img className="imageicon" src={icon3} alt="" />
                            <p className="detail">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index;
