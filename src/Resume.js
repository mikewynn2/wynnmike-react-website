import React from 'react';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';
import Article from 'grommet/components/Article';


export default class Resume extends React.Component {
    render() {
        return (
            <Section pad="large"
                full="vertical"
                colorIndex="grey-4">

                <Article>
                <Headline margin="none">Resume</Headline>
                <Headline />
                <Headline />
                <Headline />
                <Heading strong={true}
                    uppercase={true}
                    truncate={false}
                    align='start'
                    margin='none'
                    tag='h3'>
                    Diavolo - Jacques Heim
                </Heading>
                <Paragraph align='start'>Acrobat</Paragraph>
                <Heading strong={true}
                    uppercase={true}
                    truncate={false}
                    align='start'
                    margin='none'
                    tag='h3'>
                    Le Reve - Dragone/Wynn Las Vegas
                </Heading>
                <Paragraph align='start'> Acrobatic generalist 
                </Paragraph>
                <Heading strong={true}
                    uppercase={true}
                    truncate={false}
                    align='start'
                    margin='none'
                    tag='h3'>
                    Le Reve - Dragone/Wynn Las Vegas
                </Heading>
                <Paragraph align='start'> Acrobatic generalist 
                </Paragraph>
                <Heading strong={true}
                    uppercase={true}
                    truncate={false}
                    align='start'
                    margin='none'
                    tag='h3'>
                    Le Reve - Dragone/Wynn Las Vegas
                </Heading>
                <Paragraph align='start'> Acrobatic generalist 
                </Paragraph>
                <Heading strong={true}
                    uppercase={true}
                    truncate={false}
                    align='start'
                    margin='none'
                    tag='h3'>
                    Le Reve - Dragone/Wynn Las Vegas
                </Heading>
                <Paragraph align='start'> Acrobatic generalist 
                </Paragraph>
                <Heading strong={true}
                    uppercase={true}
                    truncate={false}
                    align='start'
                    margin='none'
                    tag='h3'>
                    Le Reve - Dragone/Wynn Las Vegas
                </Heading>
                <Paragraph align='start'> Acrobatic generalist 
                </Paragraph>

                <Box pad='medium'
                    colorIndex='critical'>
                    <Button
                        label='Download Full Resume'
                        href='#'
                        primary={false} />
                </Box>
            </Article>

        </Section>
        );
    }
}
