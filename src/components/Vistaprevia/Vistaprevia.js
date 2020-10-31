import React from "react";
import { Collapse } from 'antd';

import "./Vistaprevia.scss";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many 
  households across the world.
`;


export default function Vistaprevia() {
    return (
      <div className = "detalles-grid-container">
      <Collapse defaultActiveKey={['1']} ghost>
      <Panel header="INFO" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="MEDIDAS" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="DETALLES" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
    </div>
    )
}
