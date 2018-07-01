import React from 'react';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Carousel from 'grommet/components/Carousel';
import Image from 'grommet/components/Image';


export default class Photos extends React.Component {
    render() {
        return (
            <Section pad="large"
                full="vertical"
                colorIndex="grey-4">
                <Headline margin="none">Photos</Headline>

<Carousel>
  <Image src='/Img/mike_wynn.jpg' />
  <Image src='/img/mike_wynn.jpg' />
</Carousel>
            </Section>
        );
    }
}
