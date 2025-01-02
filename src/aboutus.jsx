import React from 'react';
import styles from './aboutus.module.css';
import Player from 'react-player';
import ReactPlayer from 'react-player';
import phlo from './assets/phlo.jpg';
import jingying from './assets/jingying.jpg';
import FELV from './assets/FELV-cat.jpg';
import cor_comps from './assets/cor_comps.png';
const AboutUs = () => {
    return (
        <div className = {styles.main} >
            <h1>公司概况</h1>
            <div className={styles.hozContianer}>
                <img src={cor_comps} className={styles.comImage}></img>
                <p className = {styles.aboutp}>青岛开拓隆海制冷配件有限公司，成立于 2 002年3月29日。经过二十余年专注经营，现已发展成为制造空 调系统元件的高科技、高附加值的高新技术企业。公司研发中心为青岛市认定的市级企业技术中心，同时与山 东大学、山东科技大学成立校企合作研发平台。应企业的发展需求，于2021年8月16日，全资建成“青岛开拓 隆海智控有限公司”。公司坐落于青岛市胶州上合示范区，厂区占地5.1万平方米，建筑面积4.3万平方米，注 册资金2000万元。设计年产能:容器:320万台/年;铜管件:5000吨/年，阻尼块:2000吨/年，板换、壳管 式换热器、护网等业务也同步提升，计划年产值8.8亿元。
公司有着年轻化、素质化、专业化的人才梯队。员工总人数:350余人，其中，大学以上学历人才占 35%，行业内中高级工程师三十余人。
公司主要从事空调系统元件的研发、 生产与销售。 容器类、管路件类、换热器类(板式、壳管式)等产品 为主导。并与国内外著名企业:三菱电机、日立、三菱重工、松下、富士通、开利、LG、海尔、海信、澳柯 玛、长虹、美的等建立长期战略合作联盟。产品远销日本、欧美、泰国、韩国等国家。</p>
            </div>
            <div className = {styles.container}>
                <div className={styles.subcontainer}
                    onClick={() => document.getElementById("philosophy").scrollIntoView({ behavior: "smooth" })}
                >
                    <div className={styles.upper}><img src={phlo} className={styles.itemImage}></img></div>
                    <div className={styles.lpper}><p>企业理念</p></div>
                </div>
                <div className={styles.subcontainer}
                        onClick={() => document.getElementById("policy").scrollIntoView({ behavior: "smooth" })}
                >
                    <div className={styles.upper}><img src={jingying} className={styles.itemImage}></img></div>
                    <div className={styles.lpper}><p>经营方针</p></div>
                </div>
                <div className={styles.subcontainer}
                        onClick={() => document.getElementById("chairman").scrollIntoView({ behavior: "smooth" })}
                >
                    <div className={styles.upper}><img src={FELV} className={styles.itemImage}></img></div>
                    <div className={styles.lpper}><p>董事长致辞</p></div>
                </div>
            </div>
            <div className={styles.coloredSection}>
    <h2 id = "philosophy" className={styles.subHeader}>企业理念</h2>
    <div className={styles.section}>
        <h3 className={styles.subHeader3}>
            <span className={styles.icon}>🎯</span> 企业目标
        </h3>
        <p className={styles.subText}>建设一个永远富有创新与挑战精神的团队，树立制冷行业第一品牌</p>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
        <h3 className={styles.subHeader3}>
            <span className={styles.icon}>✨</span> 核心精神
        </h3>
        <p className={styles.subText}>臻于至善，群策群力</p>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
        <h3 className={styles.subHeader3}>
            <span className={styles.icon}>🚀</span> 企业精神
        </h3>
        <p className={styles.subText}>开创一流，拓展百年，隆兴产业，海阔天空</p>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
        <h3 className={styles.subHeader3}>
            <span className={styles.icon}>🏆</span> 企业作风
        </h3>
        <p className={styles.subText}>专心，专注，专业</p>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
        <h3 className={styles.subHeader3}>
            <span className={styles.icon}>💡</span> 核心价值观
        </h3>
        <p className={styles.subText}>严谨工作，快乐生活，创造价值，回报社会</p>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
        <h3 className={styles.subHeader3}>
            <span className={styles.icon}>📊</span> 经营理念
        </h3>
        <p className={styles.subText}>管理严谨，经营诚信，办事高效，服务优质</p>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
        <h3 className={styles.subHeader3}>
            <span className={styles.icon}>🎖</span> 企业使命
        </h3>
        <p className={styles.subText}>打造中国制冷行业旗帜品牌</p>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
        <h3 className={styles.subHeader3}>
            <span className={styles.icon}>🤝</span> 诚实的供应商
        </h3>
        <p className={styles.subText}>良好的客户关系、员工关系和高度的社会责任感</p>
    </div>
</div>

    <div>
        <h2 id="policy" className={styles.subHeader}>经营方针</h2>
        <div className={styles.policyContainer}>
            <div className={styles.policyItem}>
                <span className={styles.policyIcon}>📈</span>
                <p className={styles.policyText}>管理严谨：以高标准规范流程，确保效率和质量。</p>
            </div>
            <div className={styles.policyItem}>
                <span className={styles.policyIcon}>🤝</span>
                <p className={styles.policyText}>经营诚信：始终恪守商业道德，建立客户信任。</p>
            </div>
            <div className={styles.policyItem}>
                <span className={styles.policyIcon}>⚡</span>
                <p className={styles.policyText}>办事高效：迅速响应客户需求，提供最佳解决方案。</p>
            </div>
            <div className={styles.policyItem}>
                <span className={styles.policyIcon}>🌟</span>
                <p className={styles.policyText}>服务优质：以客户为中心，提供超出预期的服务。</p>
            </div>
        </div>
    </div>

    <div className={styles.coloredSection}>
        <h2 id = "chairman" className = {styles.subHeader}>董事长致辞</h2>
        <p>
        十年开拓路，百年隆海情。开拓隆海人靠着精诚团结和锐意进取，见证了中国制冷配件产业走向辉煌的壮阔历程，记录了开拓隆海从弱到强的成长道路，实现了自身的跨越发展。

骄傲深藏心底，努力永不言弃。蓬勃向上的开拓隆海，正不断以创新的理念，优化的配置，完善的管理，为公司增添新的生机与活力。明天的开拓隆海，我们共同的未来，定将灿烂无比，价值无限！
        </p>
    </div>
    <iframe
  src="https://player.bilibili.com/player.html?bvid=BV1zm4y1q7Dt&autoplay=0"
  scrolling="no"
  frameBorder="no"
  width="100%"
  height="500"
  allowFullScreen
  title="Bilibili Video"
/>

        </div>
    );
};

export default AboutUs;