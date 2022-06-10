import { Carousel, Col, Row } from "antd";
import classnames from "classnames";
import React from "react";
import styles from "./index.less";

const Banner = () => {
  return (
    <Carousel autoplay effect="fade">
      <div>
        <div className={classnames(styles.content, styles.black)}>
          <Row>
            <Col md={12}>
              <div className={styles.left}>
                <div className={styles.title}>企业资产发现与脆弱性检查工具</div>
                <div className={styles.summary}>
                  <div>自动化资产信息收集与漏洞扫描</div>
                </div>
                <a href="/guide">
                  <div className={styles.download}>开始使用</div>
                </a>
              </div>
            </Col>
            <Col md={12}>
              <img
                className={styles.heatImg}
                src="/static/pc_home.png"
                alt={"home"}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
