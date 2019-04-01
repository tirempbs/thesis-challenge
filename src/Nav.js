import React, { Component } from 'react';
import './AppDesktop.css';
import './AppMobile.css';
import { Responsive, Menu, Button, Icon, Sidebar } from 'semantic-ui-react';

class Nav extends Component {
    state = { visible: false }

    handleSidebardClick = () => this.setState({ visible: !this.state.visible })
    handleSidebarHide = () => this.setState({ visible: false })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
    const { activeItem } = this.state
    const { visible } = this.state

        return (
            <>
                <Responsive 
                    minWidth={768}
                    as={Menu}
                    secondary
                    inverted
                >
                    <Menu.Item
                        header
                        className='myWebNow'
                        content='MyWebNow'
                        name='myWebNow'
                        active={activeItem === 'myWebNow'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            content='Home'
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            content='Why Us'
                            name='whyUs'
                            active={activeItem === 'whyUs'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            content='Contact Us'
                            name='contactUs'
                            active={activeItem === 'contactUs'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            content='Login'
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                        />
                        <Button
                            content='Support'
                            name='support'
                            active={activeItem === 'support'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Responsive>

                <Responsive 
                    {...Responsive.onlyMobile}
                    as={Icon}
                    name='bars'
                    size='large'
                    inverted
                    className='bars'
                    onClick={this.handleSidebardClick}
                />

                <Sidebar
                    as={Menu}
                    animation='overlay'
                    // icon='labeled'
                    // inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item
                        header
                        className='myWebNow'
                        content='MyWebNow'
                        name='myWebNow'
                        active={activeItem === 'myWebNow'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        content='Home'
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        content='Why Us'
                        name='whyUs'
                        active={activeItem === 'whyUs'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        content='Contact Us'
                        name='contactUs'
                        active={activeItem === 'contactUs'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        content='Login'
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        content='Support'
                        name='support'
                        active={activeItem === 'support'}
                        onClick={this.handleItemClick}
                    />
                </Sidebar>
            </>
        );
    }
}

export default Nav;
