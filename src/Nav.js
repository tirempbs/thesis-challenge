import React, { Component } from 'react';
import './App.css';
import { Responsive, Menu, Button, Dropdown } from 'semantic-ui-react';

class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted borderless>
        <Responsive
          {...Responsive.onlyMobile}
          as={Dropdown}
          item
          icon='bars'

        >
          <Responsive {...Responsive.onlyMobile} as={Dropdown.Menu}>
            <Responsive {...Responsive.onlyMobile} as={Dropdown.Item} content='MyWebNow' />
            <Responsive {...Responsive.onlyMobile} as={Dropdown.Item} content='Home' />
            <Responsive {...Responsive.onlyMobile} as={Dropdown.Item} content='Why Us' />
            <Responsive {...Responsive.onlyMobile} as={Dropdown.Item} content='Contact Us' />
            <Responsive {...Responsive.onlyMobile} as={Dropdown.Item} content='Login' />
            <Responsive {...Responsive.onlyMobile} as={Button} color='teal' content='Support' />
          </Responsive>
        </Responsive>

        <Responsive
          minWidth={768}
          as={Menu.Item}
          className='myWebNow'
          content='MyWebNow'
          name='myWebNow'
          active={activeItem === 'myWebNow'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Responsive
            minWidth={768}
            as={Menu.Item}
            content='Home'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />

          <Responsive
            minWidth={768}
            as={Menu.Item}
            content='Why Us'
            name='whyUs'
            active={activeItem === 'whyUs'}
            onClick={this.handleItemClick}
          />

          <Responsive
            minWidth={768}
            as={Menu.Item}
            content='Contact Us'
            name='contactUs'
            active={activeItem === 'contactUs'}
            onClick={this.handleItemClick}
          />

          <Responsive
            minWidth={768}
            as={Menu.Item}
            content='Login'
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />

          <Responsive
            minWidth={768}
            as={Button}
            color='teal'
            content='Support'
            name='support'
            active={activeItem === 'support'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Nav;
