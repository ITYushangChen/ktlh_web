import React, { useState } from 'react';
import { Map } from 'react-amap';
import styles from './contactus.module.css';
import wechat from './assets/wechat.jpg'
const ContactUs = () => {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert('复制成功: ' + text); // 显示提示信息
          })
          .catch(() => {
            alert('复制失败，请重试');
          });
      };
      
    return (
        <div className = {styles.container}>
            <h1>联系我们</h1>
            <div className = {styles.leftcontainer}>
                <img src={wechat} className={styles.wechat}></img>
            </div>
            <div className = {styles.contactContainer}>
                <span className= {styles.text}>感谢您对开拓隆海的关注，如果您有任何问题，请随时通过以下任意方式联系我们。</span>
                <h2>地址:</h2>
                <p onClick={() => handleCopy('青岛市胶州市湘江路21号')} style={{ cursor: 'pointer'}}>
                    青岛市胶州市湘江路21号                
                    <span className={styles.copyIcon}>📋</span>
                </p>
                <h2>电话:</h2>
                <p onClick={() => handleCopy('+86 15258568652')} style={{ cursor: 'pointer'}}>
                    +86 15258568652
                    <span className={styles.copyIcon}>📋</span>
                </p>

                <h2>邮箱:</h2>
                <p onClick={() => handleCopy('cys010122@gamil.com')} style={{ cursor: 'pointer'}}>
                    cys010122@gamil.com
                    <span className={styles.copyIcon}>📋</span>
                </p>
            </div>
        </div>
    );
};

export default ContactUs;