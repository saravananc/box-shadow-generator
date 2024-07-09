import React, { useState } from "react";
import { Slider, Input, Row, Col, Typography } from "antd";

const { Text } = Typography;

const App = () => {
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState(0);
  const [blurRadius, setBlurRadius] = useState(10);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [shadowColor, setShadowColor] = useState("rgba(0, 0, 0, 0.25)");

  const boxShadowStyle = {
    boxShadow: `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    margin: "20px auto",
  };

  const boxShadowCss = `box-shadow: ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor};`;

  return (
    <div style={{ padding: 20 }}>
      <h1>Box Shadow Generator</h1>
      <Row gutter={16}>
        <Col span={12}>
          <label>Horizontal Offset</label>
          <Slider
            min={-50}
            max={50}
            value={horizontalOffset}
            onChange={setHorizontalOffset}
          />
        </Col>
        <Col span={12}>
          <label>Vertical Offset</label>
          <Slider
            min={-50}
            max={50}
            value={verticalOffset}
            onChange={setVerticalOffset}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <label>Blur Radius</label>
          <Slider
            min={0}
            max={100}
            value={blurRadius}
            onChange={setBlurRadius}
          />
        </Col>
        <Col span={12}>
          <label>Spread Radius</label>
          <Slider
            min={-50}
            max={50}
            value={spreadRadius}
            onChange={setSpreadRadius}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <label>Shadow Color</label>
          <Input
            type="color"
            value={shadowColor}
            onChange={(e) => setShadowColor(e.target.value)}
          />
        </Col>
      </Row>
      <div style={boxShadowStyle}></div>
      <hr/>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text copyable>{boxShadowCss}</Text>
      </div>
      <hr/>
    </div>
  );
};

export default App;
