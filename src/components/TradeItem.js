import React, {Component} from 'react';
import { Grid, Col, Thumbnail, Button, Row } from 'react-bootstrap';


const arr = ['1','2','3','4']

class TradeItem extends Component {



  render() {
    return (
      <Grid>
        <Row>
          {arr.map((elem, i) => {
            return (
              <Col key={i} xs={6} md={4}>
                <Thumbnail src="http://bit.ly/2BRo3rO" alt="242x200">
                  <h3>Thumbnail label</h3>
                  <p>Category</p>
                  <p>Condition</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
              )
          })}
        </Row>
      </Grid>
    );
  }
}

export default TradeItem;
