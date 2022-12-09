import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

const Cart = () => {
  return (
    <div>
      <div className="d-flex flex-column bg-white py-4 mt-5">
        <div className="d-flex justify-content-center">
          <Link to='/checkout'>
            <Button icon labelPosition='left'>
              <Icon name="money bill alternate" />
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart