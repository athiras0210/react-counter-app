import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='light ms-1'>
            <img
              src='https://lh5.googleusercontent.com/proxy/LPjMfDWBNJG0ciAJdYsT3vWjR-SUPFLW6CwJU5HK5I_lVQeUj1XoujN_HMJSBeP-ysqsVUgA61BOJgLnojlVqt1aupx90XPEm0mrRBixbkngQ_L7wkIB51sxVAa5qF8bv6A7UybblQ=s0-d'
              height='30'
              alt=''
              loading='lazy'
            />
            Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header