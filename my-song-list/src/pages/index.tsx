import React, { useEffect, useState } from "react";
import { Button, Collapse, Layout } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
const SideBarCard = 'SideBarCard';
const { Panel } = Collapse;
const { Content, Footer, Header, Sider } = Layout;

function Home() {
  // const  [data, setdata] = useState([{}])
  // useEffect(() => {
  // fetch('http://localhost:3001/api/v1/songs/Album/Kena Leb').then(
  //   response=>
  //     response.json()
  // ).then(
  //   data=>{
  //     setdata(data)}
  // )
  // }, [])

  return (
    <div className="App">
      <Header>this is Header</Header>
      <Sider>
        {/* <SideBarCard>

        </SideBarCard> */}
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
          <li>List 4</li>
          <li>List 5</li>
          <li>List 6</li>
        </ul>
      </Sider>
      <Content>
        <Button type="primary">Click</Button>
        <Collapse>
          <Panel header="This is panel header 1" key="1">
            <p>Hello Collapse</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>Header 3</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>Header 2</p>
          </Panel>
        </Collapse>
      </Content>
    </div>
  );
}

export default Home;
