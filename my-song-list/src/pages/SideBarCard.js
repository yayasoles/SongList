import { Card, Space } from "antd";
import React from "react";

function SideBarCard() {
  return (
    <div>
      <Space>
        <Card title="List of Songs" extra={<a href="#">More</a>}>

        </Card>
      </Space>
    </div>
  );
}

export default SideBarCard;
