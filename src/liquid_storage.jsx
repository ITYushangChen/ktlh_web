import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import styles from './liquidStorage.module.css'; // Custom styles

const LiquidStorage = () => {
  return (

    <Box sx={{ padding: '20px' ,paddingTop:'200px'}}>
      {/* Title Section */}
      <Typography variant="h4" component="h2" gutterBottom>
        储液器系列
      </Typography>
      
      {/* Description Section */}
      <Typography variant="body1" component="p" gutterBottom>
        我们的储液器系列产品以高品质和耐用性著称，广泛应用于各种工业和商业环境。
        以下是一些产品详细信息和特点：
      </Typography>
      
      {/* Product Features Section */}
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          产品特点：
        </Typography>
        <ul className={styles.featuresList}>
          <li>高强度材料，确保长期使用寿命</li>
          <li>防腐设计，适应多种化学环境</li>
          <li>模块化设计，方便安装和维护</li>
          <li>多种容量规格可选，满足不同需求</li>
        </ul>
      </Paper>
      
      {/* Image Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <img src="liquid_storage_1.jpg" alt="储液器产品1" className={styles.productImage} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="liquid_storage_2.jpg" alt="储液器产品2" className={styles.productImage} />
        </Grid>
        <Grid item xs={12} sm={6} md={1.9}>
          <img src="liquid_storage_3.jpg" alt="储液器产品3" className={styles.productImage} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="liquid_storage_4.jpg" alt="储液器产品4" className={styles.productImage} />
        </Grid>
      </Grid>

      {/* Additional Information Section */}
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          适用场景：
        </Typography>
        <Typography variant="body1" component="p">
          储液器适用于化工、制药、食品加工、电子等行业，能够高效、安全地存储各种液体。
        </Typography>
      </Paper>
    </Box>
  );
};

export default LiquidStorage;
