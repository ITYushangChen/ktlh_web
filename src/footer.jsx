import React, { useState } from 'react';
import styles from './footer.module.css';
import wechatImage from './assets/wechat.jpg'; // 引入您的 WeChat 二维码图片

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <footer className={styles.footer}>
            <div>
                <div
                    className={styles.wechat}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <svg enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <g clip-rule="evenodd" fill="#ffffff" fill-rule="evenodd">
                            <path d="m23.218 6c-12.7 0-23 8.6-23 19.1 0 5.8 3.1 11 7.9 14.5.4.3.6.7.6 1.2 0 .2 0 .3-.1.5-.4 1.4-1 3.8-1 3.9 0 .2-.1.4-.1.6 0 .4.3.8.8.8.2 0 .3-.1.4-.1l5-2.9c.4-.2.8-.4 1.2-.4.2 0 .5 0 .7.1 2.3.7 4.9 1 7.5 1h1.3c-.5-1.5-.8-3.1-.8-4.7 0-9.6 9.4-17.5 20.9-17.5h1.2c-1.5-9.1-11-16.1-22.5-16.1m-7.6 16c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1m15.3 0c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1" />
                            <path d="m57.218 51.6c4-2.9 6.6-7.3 6.6-12.1 0-8.8-8.6-16-19.1-16-10.6 0-19.1 7.1-19.1 16 0 8.8 8.6 16 19.1 16 2.2 0 4.3-.3 6.2-.9.2-.1.4-.1.6-.1.4 0 .7.1 1 .3l4.2 2.4c.1.1.2.1.4.1.4 0 .6-.3.6-.6 0-.2-.1-.3-.1-.5 0-.1-.5-2-.9-3.2 0-.1-.1-.3-.1-.4.1-.4.3-.8.6-1m-18.9-14.6c-1.4 0-2.6-1.1-2.6-2.6 0-1.4 1.1-2.6 2.6-2.6 1.4 0 2.6 1.1 2.6 2.6-.1 1.4-1.2 2.6-2.6 2.6m12.7 0c-1.4 0-2.6-1.1-2.6-2.6 0-1.4 1.1-2.6 2.6-2.6 1.4 0 2.6 1.1 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6" />
                        </g>
                    </svg>
                    {isHovered && (
                        <div className={styles.qrCode}>
                            <img src={wechatImage} alt="WeChat QR Code" />
                        </div>
                    )}
                </div>
                <p className={styles.copy}>&copy; {new Date().getFullYear()} 青岛开拓隆海智控有限公司</p>
                <p className={styles.icp}>鲁ICP备19043519号-1</p>
            </div>
        </footer>
    );
};

export default Footer;
