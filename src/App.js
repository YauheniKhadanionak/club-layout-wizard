import "./App.css";

import { Card, Form, Layout, IconSearch, Icon } from "@abc/protonpack";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Layout.Header className="header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="64"
          viewBox="0 0 120 64"
        >
          <text
            fill="rgba(255,255,255,0.75)"
            fontFamily="sans-serif"
            fontSize="30"
            dy="10.5"
            fontWeight="bold"
            x="50%"
            y="50%"
            textAnchor="middle"
          >
            LOGO
          </text>
        </svg>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(auto, 24rem) auto",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            gridGap: "2rem",
          }}
        >
          <Form.Input
            placeholder="Select Organization"
            before={<IconSearch />}
            className="input"
            name="select"
            abcId="select"
            id="select"
            outlined
          />
        </div>
      </Layout.Header>
      <Layout.SideMenu />
      <Layout.NavBar items={navItems} />
      <Layout.Content className="grid">
        <Card abcId="content1" shadow={false} className="content content1">
          1
        </Card>
        <Card abcId="content2" shadow={false} className="content content2">
          2
        </Card>
        <Card abcId="content3" shadow={false} className="content content3">
          3
        </Card>
        <Card abcId="content4" shadow={false} className="content content4">
          4
        </Card>
        <Card abcId="content5" shadow={false} className="content content5">
          5
        </Card>
      </Layout.Content>
    </Layout>
  </BrowserRouter>
);

const navItems = [
  { path: "2", label: "Business", key: "Business" },
  { path: "3", label: "Members", key: "Members" },
  { path: "4", label: "Staff", key: "Staff" },
  { path: "5", label: "Brand", key: "Brand" },
  { path: "7", label: "Reporting", key: "Reporting" },
];

export default App;
