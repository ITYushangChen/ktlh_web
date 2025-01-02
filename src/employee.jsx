import React from 'react';
import styles from './employee.module.css';

const Employee = () => {
    // 示例 JSON 数据
    const positions = [
        {
            position: "高级焊工",
            description: "负责焊接工作，保证焊接质量。",
            requirements: [
                "熟练掌握各种焊接技术。",
                "有3年以上相关工作经验。",
                "能够适应高强度的工作环境。"
            ],
            salary: "8,000 - 12,000元/月"
        },
        {
            position: "生产线操作员",
            description: "负责生产线日常操作，确保产品质量。",
            requirements: [
                "熟悉生产线操作流程。",
                "有责任心和团队合作能力。",
                "能够接受轮班制。"
            ],
            salary: "5,000 - 8,000元/月"
        },
        {
            position: "生产线操作员",
            description: "负责生产线日常操作，确保产品质量。",
            requirements: [
                "熟悉生产线操作流程。",
                "有责任心和团队合作能力。",
                "能够接受轮班制。"
            ],
            salary: "5,000 - 8,000元/月"
        },
        {
            position: "生产线操作员",
            description: "负责生产线日常操作，确保产品质量。",
            requirements: [
                "熟悉生产线操作流程。",
                "有责任心和团队合作能力。",
                "能够接受轮班制。"
            ],
            salary: "5,000 - 8,000元/月"
        }
    ];

    return (
        <div className="main">
            <h1>加入我们</h1>
            <div className = "fl">
                <p>我们正在寻找有才华、有激情的人才加入我们的团队。如果您对我们的公司感兴趣，请查看以下职位空缺。</p>
            </div>

            <div className={styles.positions}>
                {positions.map((job, index) => (
                    <div key={index} className={styles.jobCard}>
                        <h2>{job.position}</h2>
                        <p><strong>岗位介绍：</strong>{job.description}</p>
                        <p><strong>岗位要求：</strong></p>
                        <ul>
                            {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex}>{req}</li>
                            ))}
                        </ul>
                        <p><strong>薪资：</strong>{job.salary}</p>
                    </div>
                ))}
            </div>

            <h2>如何申请</h2>
            <p>请附上您的简历到 <a href="mailto:careers@example.com">careers@example.com</a> 格式请依照 应聘-职位-入职时间.</p>
        </div>
    );
};

export default Employee;
