import React from 'react';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';
import Paragraph from 'grommet/components/Paragraph';
import Article from 'grommet/components/Article';


export default class Bio extends React.Component {
    render() {
        return (
            <Section pad="large"
                full="vertical"
                colorIndex="grey-4">
                <Headline margin="none"></Headline>
                <Animate enter={{"animation": "fade", "duration": 1000, "delay": 0}}
                    leave={{"animation": "fade", "duration": 1000, "delay": 0}}
                    keep={true}>
                    <Hero background={<Image src='/Img/mike_wynn.jpg'
                        fit='contain'
                        align={{"top": true}} />}
                    backgroundColorIndex='dark'
                    size='medium'> 
                    </Hero>
                    <Paragraph size='medium'>
                        Mike Wynn, self taught acrobat originally from Califonia. 
            Mike has been a professional acrobat since 2005 when he started his career at Disney. Since he has
            been lucky enough to be an acrobat on the Las Vegas strip in "Le Reve", America's Got Talent finalist with "DIAVOLO",
            A stunt cowboy at Knott's, Traveled around the world, and been in tv shows and movies like "Dodgeball", "Mall-cop 2", "FlashForward", and "Terriers".
                    </Paragraph>
                </Animate>
            </Section>
        );
    }
}
