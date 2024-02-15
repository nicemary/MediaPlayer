import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VedioCard() {
  return (
   <>
    <Card style={{ width: '18rem' }} className='mt-5 mb-5'>
      <Card.Img height="300px" variant="top" src="https://th.bing.com/th/id/R.47e0c2d0ca9c0b7887b7706cd4e164bc?rik=gQb76P9y1SY1jg&riu=http%3a%2f%2fi1.ytimg.com%2fvi%2fjHNNMj5bNQw%2fmaxresdefault.jpg&ehk=ZDDUruxAGdAs%2fyi5fzgXsNwH6%2fwTWqGPJCnggFcGlxE%3d&risl=&pid=ImgRaw&r=0" />
      <Card.Body>
       <div className='d-flex align-item-center justify-content-evenly'>
        
       <h6>Vedio Caption</h6>
        <Button variant="danger " className='ms-5'>
<i class="fa-solid fa-trash"></i>
        </Button>
        </div>
      </Card.Body>
    </Card>
   
   </>
  )
}
export default VedioCard;
