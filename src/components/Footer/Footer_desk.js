import React from 'react'
import { Link } from 'react-router-dom';

function Footer()
{
    return(
        <div>
            <div class="grid grid-cols-6  bg-black h-56 text-white p-4">
                <div>
                    <p>EGuidance Labs </p>
                    <p> 2336 Highland Ct, </p> 
                    <p> Schaumburg, IL-60194</p>
                    <p>Phone: +1 (847) 278-9212</p>
                </div>
                <div>
                    <p>Our Core Capabilities</p>
                    <p>Cloud Computing</p>
                    <p>Web App Development</p>
                    <p>Artificial Intelligence</p>
                    <p>Artificial Intelligence</p>
                    <p>DevOps</p>
                    <p>Mobile App development</p>
                </div>

                <div>
                    <p>Techstack</p>
                    <p>Flutter</p>
                    <p>React</p>
                    <p>Node.js</p>
                </div>

                <div>
                    <p>Products</p>
                    <p>Memshots</p>
                    <p>Weva Prime</p>
                    <p>Recruiter i</p>
                </div>

                <div>
                    <p>Company</p>
                    <p>About</p>
                    <p>Knowledge Hub</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                    <p>Privacy Policy</p>
                </div>

                <div>2</div>

            </div>
            <div className="grid grid-cols-2 text-white bg-black h-20 text-white p-8">
                    <div>
                            <a href="#">© 2021, E Guidance Labs</a>
                    </div>
                    <div>
                            <a href="#">Follow Us on: </a> 
                    </div>
                </div>   

            </div>
    );
    
    }
     export default Footer;