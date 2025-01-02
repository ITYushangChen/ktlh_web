import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './products.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: '#086c7b 2px solid',
  color: theme.palette.text.secondary,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
}));

const Products = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered Grid index

  // Function to handle click and navigate to different routes
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Function to handle hover state
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.customBox}>
      <Grid container spacing={5}>
        {[
          { title: '储液器系列', path: '/liquid-storage', img: 'reservoir.png' },
          { title: '铜管系列', path: '/copper-tube', img: 'tongguan.png' },
          { title: '气液分离器', path: '/separator', img: 'qiye.png' },
          { title: '油分离器', path: '/component1', img: 'you.png' },
          { title: '阻尼块系列', path: '/component2', img: 'huanreqi.png' },
          { title: '壳管式换热器', path: '/component3', img: 'huanreqi.png' },
        ].map((item, index) => (
          <Grid
            item
            xs={4}
            key={index}
            className={styles.customGrid}
            onClick={() => handleNavigation(item.path)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Item
              style={{
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredIndex === index ? '0 4px 15px rgba(0, 0, 0, 0.2)' : 'none',
                border: hoveredIndex === index ? '2px solid #00aaff' : '2px solid #086c7b',
              }}
            >
              <h2 className={styles.inlineText}>{item.title}</h2>
              <img src={item.img} className={styles.proImages} alt={item.title} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
