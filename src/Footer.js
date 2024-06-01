import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="container" style={{height:'660px',background:'rgba(28,12,38,1)',marginTop:'10px'}}>
      <div className="container d-flex justify-content-between aligh-item-center mb-4">
        <div style={{color:'white',marginTop:'40px',marginLeft:'40px'}}>
            <button style={{height:'40px',borderRadius:'6px',background: 'linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%)'}}>
                <img src="img.png" alt="" />
            </button>
            </div>

        <div style={{color:'white',marginTop:'40px',marginRight:'40px'}}>
            <button style={{color:'white',height:'40px',borderRadius:'20px',width:'120px',background: 'linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%)'}}>Contact Us &#8599;</button>
            </div>

      </div >
      <div style={{borderBottom:'2px solid white'}}>
      </div>
<br/>
      <div className="container d-flex justify-content-between aligh-item-center" style={{borderTop:'60px',color:'white'}}>
        <div><h6>Services</h6>
        <div style={{borderBottom:'2px solid white',width:'500px'}}></div>
        <div className="container d-flex justify-content-between aligh-item-center">
           <div  style={{color:'grey',marginTop:'20px'}}>
           <div className="list-container">
    <div className="list-item" style={{color:'white'}}>Digital Marketing</div>
    <div className="list-item">Email Nurture</div>
    <div className="list-item">SEO</div>
    <div className="list-item">Social Media Marketing</div> 
    <div className="list-item">Conversion Rate Optimization</div>
    <div className="list-item">Copy Writting</div>
    <div className="list-item">Email Marketing</div>
    <div className="list-item">Remarketing</div>
    <div className="list-item">PPC</div>
  </div>
           </div>


           <div style={{color:'grey',marginTop:'20px'}}>
           <div className="list-container">
    <div className="list-item" style={{color:'white'}}>Bespoke Web Design</div>
    <div className="list-item">Web Design</div>
    <div className="list-item">Web Redesign</div>
    <div className="list-item">UI/UX Design</div> 
    <div className="list-item">Brand Identity And Logo</div>
    <div className="list-item" style={{color:'white'}}>  App Development</div>
    
  </div>
           
           
           </div>
           

        </div>
        </div>
        <div><h6>Home</h6>
        <div style={{borderBottom:'2px solid white',width:'100px'}}></div>
        <br/>
        <b>About Us</b>
        <div style={{borderBottom:'2px solid white',width:'100px',marginTop:'10px'}}></div>
        <br/>
        <b>Contact Us</b>
        <div style={{borderBottom:'2px solid white',width:'100px',marginTop:'10px'}}></div>
        <br/>
        <br/>
<div style={{color:'grey'}}>
        <p>United Kingdom<br/>
        TW4 7LU<br/>
        London</p>
        </div>
        </div>
        <div><h6>Resources</h6>
        <div style={{borderBottom:'2px solid white',width:'100px'}}></div>

        <div style={{color:'grey',marginTop:'20px'}}>
        <p>Our Wish</p>
        <p>Insight</p>
        </div>

        </div>
        
        <div><h6>Social Media</h6>
        <div style={{borderBottom:'2px solid white',width:'100px'}}></div>
        <div style={{marginTop:'20px'}}>
<img src="social media.png" alt="" />
        </div>
        <div className="container mt-5"style={{marginTop:'10px'}}>
        <p style={{color:'grey',marginBottom:'20px'}}><h8 style={{color:'white'}}>Subscribe </h8>to our weekly newsletter today!</p>

    <div className="input-group" style={{width:'280px'}}>
      <input type="text" className="form-control" placeholder="Enter your email address here" style={{background:'rgba(28,12,38,1)'}}/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" style={{background:'linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%)' , color:'white',border:'1px solid white'}} type="button">&gt;</button>
      </div>
    </div>
  </div>
        </div>
    

     

      </div>
      <br/>
      <br/>

      <p className="container d-flex justify-content-center aligh-item-center" style={{color:'grey',marginBottom:'20px'}}>
        Copyright.2024 Web Magnetism All rights reserved | Terms and Condition | Privacy Policy
      </p>
    </div>
    </>
  )
}
