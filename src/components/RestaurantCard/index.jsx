/* import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = ({ restaurant }) => 
  <Restaurant>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c"/>
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurant.photos[0].getUrl()} alt="Foto do Restaurante"></RestaurantPhoto>
  </Restaurant>;

export default RestaurantCard; */



import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';


const RestaurantCard = () => 
  <Restaurant>
    <RestaurantInfo>
      <Title></Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c"/>
      <Address>Fl 11</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do Restaurante"></RestaurantPhoto>
  </Restaurant>;
  

export default RestaurantCard;
