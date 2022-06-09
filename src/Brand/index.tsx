import { Divider } from "antd";
import React from "react";
import styles from "./index.less";

const Brand = () => {
  return (
    <div className={styles.brand}>
      <div>
        <div className={styles.content}>
          <span className={styles.title}>
            轻量，跨平台。移动设备也可流畅运行
          </span>
          <div className={styles.desc}>
            可以在ARM、AMD、X86/X64等主流架构设备上流畅运行
          </div>
          <div className={styles.homeDiv}>
            <div className={styles.phone}>
              <img src="/static/phone_home.png" alt="phone home" />
            </div>
            <div className={styles.pc}>
              <img src="/static/pc_home.png" alt="pc home" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.content2}>
          <span className={styles.title}>CLI/WEB，满足多种需求</span>
          <div className={styles.desc}>
            以CLI命令行临时扫描，亦可以WEB服务常驻
          </div>
          <div className={styles.homeDiv}>
            <div className={styles.cli}>
              <img src="/static/cli.png" alt="cli" />
            </div>
            <div className={styles.web}>
              <img src="/static/pc2.png" alt="pc home" />
            </div>
          </div>
        </div>
      </div>
      <Divider style={{ marginTop: "5%" }} />
    </div>
  );
};

export default Brand;
