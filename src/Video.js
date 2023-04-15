import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap'

function YouTube({data}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      
      <Button variant="dark" onClick={handleShow}>
              Play Video
            </Button>

            <Modal
              show={show} onHide={handleClose}
              size='xl'
            >

              <div>
                <Container>  
                  <Row>

                    <Col>
                      <div align='center'>
                      <div class='embad-responsive embad-responsive-16by9'>

                        <iframe width="1024" height="600" className='size' src={data.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                      </div>
                      </div>

                    </Col>
                  </Row>
                </Container>

              </div>
            </Modal>

    </div>
  );
}

export default YouTube;
