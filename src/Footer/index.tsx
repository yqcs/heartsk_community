import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import { Col, Popover, Row } from "antd";
import classnames from "classnames";
import React from "react";
import styles from "./index.less";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Row>
        <Col xs={24} md={14} lg={20}>
          <div className={styles.leftDiv}>
            <img
              width="150"
              height={"150"}
              src="/static/wx_qrcode.jpg"
              alt="logo"
            />
            <div>
              <div>Copyright © 2020 Hearts K</div>
              <a href="https://HeartsK.com/" className={styles.link}>
                HeartsK.com
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8} lg={4}>
          <Row>
            <Col span={24}>
              <div>
                <Row>
                  <Col xs={12}>
                    <div className={styles.column} data-flex="dir:top">
                      <div className={styles.label}>帮助</div>
                      <a
                        href={"/guide#任务管理"}
                        className={classnames(styles.item, styles.link)}
                      >
                        创建任务
                      </a>
                      <a
                        href={"/guide#插件编写"}
                        className={classnames(styles.item, styles.link)}
                      >
                        编写插件
                      </a>
                      <a
                        href={"/guide#威胁情报"}
                        className={classnames(styles.item, styles.link)}
                      >
                        资产收集
                      </a>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={styles.column} data-flex="dir:top">
                      <div className={styles.label}>项目</div>
                      <a
                        href={"https://github.com/yqcs/ZheTian"}
                        className={classnames(styles.item, styles.link)}
                      >
                        ZheTian
                      </a>
                      <a
                        href={"https://github.com/yqcs/heartsk_community"}
                        className={classnames(styles.item, styles.link)}
                      >
                        Hearts K
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <div
                className={styles.meta}
                data-flex="main:justify cross:bottom"
              >
                <div>
                  <Popover
                    content={
                      <img width="120" src="/static/wx.jpg" alt={"wx"} />
                    }
                  >
                    <div
                      className={styles.iconWrap}
                      style={{ color: " #5d6494" }}
                    >
                      <WechatOutlined
                        className={styles.icon}
                        style={{ transform: "translateY(2px)" }}
                      />
                    </div>
                  </Popover>
                  <div className={styles.iconWrap}>
                    <a
                      href="https://jq.qq.com/?_wv=1027&k=kFLjqm66"
                      style={{ color: "#5d6494" }}
                      target={"_blank"}
                    >
                      <QqOutlined
                        className={styles.icon}
                        style={{ transform: "translateY(1px)" }}
                      />
                    </a>
                  </div>
                  <div className={styles.iconWrap}>
                    <a
                      href="https://github.com/yqcs/heartsk_community"
                      style={{ color: "#5d6494" }}
                      target={"_blank"}
                    >
                      <GithubOutlined
                        className={styles.icon}
                        style={{ transform: "translateY(2px)" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
