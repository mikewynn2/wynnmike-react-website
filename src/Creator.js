import React from 'react';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';


export default class Creator extends React.Component {
    render() {
        return (
            <Section pad="large"
                full="vertical"
                colorIndex="grey-4">
                <Headline margin="none">Creator</Headline>
                <Headline margin="none">COMING SOON</Headline>
            </Section>);
    }
}
