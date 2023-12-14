import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import '../components/Container2.css'
import { HiMiniUserGroup } from "react-icons/hi2";

function Container3() {
  return (
    <div className='card'>
    <Card className='card1'>
      <Card.Body>
        <Card.Title>Welcome To <br/> <span>S</span>ri Guru infra Builders Pvt ltd</Card.Title><br/>
        <HiMiniUserGroup className='icon' />
        <h2><span>10</span></h2>
        <p>Employees</p>
        <Card.Text>
          SRI GURU INFRA BUILDERS PVT LTD DEALS WITH REAL ESTATE, BUILDERS,FARMLAND,VILLAS,PLOTTING,AGRICULTURE AND <br/> CONSTRUCTION LINE OF BUSINESS
        </Card.Text>
        <div className='button'>
        <Button variant="primary" className='button4'>Call Us</Button>
        <Button variant="primary" className='button2'>Mail Us</Button>
        <Button variant="primary" className='button3'>Reach Us</Button>
        </div>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Container3