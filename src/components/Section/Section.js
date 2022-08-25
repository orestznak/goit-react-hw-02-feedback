import React from 'react';
import { Box } from 'components/Box';
import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Box as="section"   
    backgroundColor= "#e2e6fa"
    border="1px solid #9498b1"
    borderRadius="8px"
    marginX= "auto"
    width="400px"
    display="flex"
    flexDirection="column"
    alignItems= "center"  
    pb = "16px"
    mb ="16px">
        <Title>{title}</Title>
        {children}
  </Box>
)

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};