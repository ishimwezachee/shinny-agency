import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultPicture from '../../assets/profile.png';

const CardLabel = styled.span`
   color: #5843e4;
   font-size: 22px;
   font-weight: bold;
   `;

const CardImage = styled.img`
   height: 80px;
   width: 80px;
   border-radius: 50%;
`;

function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelancer" />
      <span>{title}</span>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
};

Card.defaultProps = {
  label: '',
  title: '',
  picture: defaultPicture,
};

export default Card;
