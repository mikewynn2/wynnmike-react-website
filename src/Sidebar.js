import React from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import User from 'grommet/components/SVGIcon';
import Button from 'grommet/components/Button';


export default class Sidemenu extends React.Component {
    render() {
        return (
            <Sidebar colorIndex="critical"
                fixed={true} full={true} size="small" style={{overflow: 'hidden'}}> 
                <Header pad="medium"
                    justify="between">
                    <Heading uppercase={true}>
                        mike wynn
                    </Heading>
                </Header>
                <Box flex="grow"
                    justify="start">
                    <Menu primary={true}>{
                        this.props.items.map((menuItem, i) => {
                            return (
                                <Anchor 
                                    key={i} 
                                    onClick={() => this.handleClick(i)}>
                                    {menuItem}
                                </Anchor>
                            );
                        })
                    }</Menu>
                </Box>
                <Footer pad="medium">
                    <Button icon={<User />} />
                </Footer>
            </Sidebar>
        );
    }

    handleClick(index) {
        this.props.onMenuClick(index);
    }
}
