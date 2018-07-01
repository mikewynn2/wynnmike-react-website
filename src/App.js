import React from 'react';
import Article from 'grommet/components/Article';
import Split from 'grommet/components/Split';
import 'grommet/grommet.min.css';

import Sidemenu from './Sidebar';
import Bio from './Bio'
import Resume from './Resume'
import Video from './Video'
import Photos from './Photos'
import Creator from './Creator'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: 0};
    }

    render() {
        return (
            <Split flex="right" priority="right">

                <Sidemenu 
                    items={['BIO', 'RESUME/CV', 'VIDEO', 'PHOTOS', 'CREATOR']} 
                    onMenuClick={this.handleMenuClick.bind(this)}
                />

                <Article scrollStep={true} controls={true} selected={this.state.selected}>
                    <Bio />
                    <Resume />
                    <Video />
                    <Photos />
                    <Creator />
                </Article>
            </Split>

        );
    }

    handleMenuClick(index) {
        this.setState(previousState => {
            previousState.selected = index;
            return previousState;
        });
    }
}
