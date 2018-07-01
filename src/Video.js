import React from 'react';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';


export default class Video extends React.Component {
    render() {
        return (
            <Section 
                colorIndex="grey-4">
                <Headline margin="none">Video</Headline>
                <iframe src="https://www.youtube.com/embed/q2O3giPoJU0?vq=hd1080&autoplay=1&modestbranding=1&color=white" width="960" height="540" frameborder="0"></iframe>
            </Section>
        );
    }
}
