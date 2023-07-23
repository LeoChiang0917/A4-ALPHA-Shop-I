import logoIcon from '../../asset/logo.svg'
import moonIcon from '../../asset/moon.svg'
import cartIcon from '../../asset/cart.svg'
import searchIcon from '../../asset/search.svg'
import './header.css'
export default function Header(){
return(
   <div className='header'>
      <nav className='nav-list'>
      <ul class="nav-list-item">
            <li class="nav-item">
              <a class="nav-link" href="#">男款</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">女款</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">最新消息</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">客製商品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">聯絡我們</a>
            </li>
          </ul>
      </nav>
         {/* logo */}
        <a class="header-logo-container"  href="#">
          <img src={logoIcon} class="cursor-point" style={{width: '200px', marginRight: '100px'}}/>
        </a>
        {/* search,cart,moon */}
        <div className='nav-icon'>
        <img style={{marginLeft: '20px'}} src={searchIcon} />
        <img style={{marginLeft: '20px'}} src={cartIcon} />
        <img style={{marginLeft: '20px'}} src={moonIcon} />  
      </div>
                     
             
      
   </div>
);
} 