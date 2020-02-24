import React from "react";
import { Input, Radio, Checkbox, InputNumber, Button } from "antd";

import "./../../style/form.scss";

//virtual dom prototype
const baseVD = {
  domType: 1,
  domTitle: "",
  domMark: "",
  domID: `uid${Math.floor(Math.random() * 1e10).toString(16)}`,
  domValue: []
};

class EditBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="lean-form-editBtnZone">
        <Button type="primary">删除</Button>
        <Button type="primary">编辑</Button>
      </div>
    );
  }
}

export class Formshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };

    this.DOMCreate = this.DOMCreate.bind(this);
  }

  //根据虚拟DOM返回antd组件.
  DOMCreate(item, index) {
    let dom;
    switch (
      item.domType //1 单行输入框;2 多行输入框;3 单选框;4 多选框;5 分值题,
    ) {
      case 1: {
        dom = (
          <div className="lean-form-widgetContainer">
            <h3>
              {index + 1}.{item.domTitle || "默认标题"}
            </h3>
            <h6>{item.domMark || "默认副标题"}</h6>
            <Input
              className={"lean-form-userWidget"}
              data-domid={item.domID}
              style={{ width: "300px" }}
              defaultValue={item.domValue[0]}
            />
            <br />
            <EditBtn />
          </div>
        );
        break;
      }
      case 2: {
        dom = (
          <div className="lean-form-widgetContainer">
            <h3>
              {index + 1}.{item.domTitle || "默认标题"}
            </h3>
            <h6>{item.domMark || "默认副标题"}</h6>
            <Input.TextArea
              className={"lean-form-userWidget"}
              data-domid={item.domID}
              autoSize={{ minRows: 4, maxRows: 10 }}
              style={{ resize: "none" }}
              defaultValue={item.domValue[0]}
            />
            <br />
          </div>
        );
        break;
      }
      case 3: {
        dom = (
          <div className="lean-form-widgetContainer">
            <h3>
              {index + 1}.{item.domTitle || "默认标题"}
            </h3>
            <h6>{item.domMark || "默认副标题"}</h6>
            <Radio.Group className={"lean-form-userWidget"}>
              {item.domValue.map((item, index) => {
                return (
                  <div key={index} className={"lean-form-selector"}>
                    <Radio value={item}>{item}</Radio>
                  </div>
                );
              })}
            </Radio.Group>
          </div>
        );
        break;
      }
      case 4: {
        dom = (
          <div className="lean-form-widgetContainer">
            <h3>
              {index + 1}.{item.domTitle || "默认标题"}
            </h3>
            <h6>{item.domMark || "默认副标题"}</h6>
            <div className={"lean-form-userWidget"}>
              {item.domValue.map((item, index) => {
                return (
                  <div key={index} className={"lean-form-selector"}>
                    <Checkbox>{item}</Checkbox>
                  </div>
                );
              })}
            </div>
          </div>
        );
        break;
      }
      case 5: {
        dom = (
          <div className="lean-form-widgetContainer">
            <h3>
              {index + 1}.{item.domTitle || "默认标题"}
            </h3>
            <h6>{item.domMark || "默认副标题"}</h6>
            <div className={"lean-form-userWidget"}>
              分值 :
              <InputNumber
                min={0}
                max={100}
                defaultValue={item.domValue[0]}
                step={1}
                formatter={value => Math.round(parseInt(value))}
              />
            </div>
          </div>
        );
        break;
      }
    }

    return dom;
  }

  render() {
    return (
      <div
        className={
          this.state.isEdit ? "lean-formstate-edit" : "lean-formstate-lock"
        }
      >
        <h1>component list:</h1>
        <hr />
        {this.props.componentList.map((item, index) => {
          return <div key={index}>{this.DOMCreate(item, index)}</div>;
        })}
      </div>
    );
  }
}

export default class FormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentList: [
        {
          domType: 1, //1 单行输入框;2 多行输入框;3 单选框;4 多选框;5 分值题,
          domTitle: "单行输入", //展示给用户看到的标题
          domMark: "", //展示给用户看到的备注
          domID: "1", //DOM-id 单选框是否同组互斥也由此值控制
          domValue: ["defaultValue"]
        },
        {
          domType: 2,
          domTitle: "多行输入",
          domMark: "",
          domID: "2",
          domValue: [
            "Aut voluptas similique molestiae. Nemo quis non pariatur accusamus provident. Qui sunt commodi dicta porro soluta minus."
          ]
        },
        {
          domType: 3,
          domTitle: "单选框",
          domMark: "",
          domID: "3",
          domValue: ["Value1", "Value2", "Value3", "Value4", "Value5", "Value6"]
        },
        {
          domType: 4,
          domTitle: "复选框",
          domMark: "",
          domID: "3",
          domValue: ["Value1", "Value2", "Value3", "Value4", "Value5", "Value6"]
        },
        {
          domType: 5,
          domTitle: "",
          domMark: "",
          domID: "3",
          domValue: [34]
        }
      ]
    };

    this.DOMCreateByID = this.DOMCreateByID.bind(this);
    this.pushVDToComponentList = this.pushVDToComponentList.bind(this);
  }

  //在state里插入虚拟DOM
  pushVDToComponentList(currentVirtualDOM) {
    let { componentList } = this.state;
    componentList.push(currentVirtualDOM);
    this.setState(componentList);
  }

  //根据ID查找到虚拟DOM,在页面上映射真实DOM.
  DOMCreateByID(domID) {
    const checkbox = <></>;

    const radio = <Radio.Group></Radio.Group>;

    const input = (
      <>
        <h3>标题</h3>
        <Input
          data-domid={"111"}
          onChange={e => {
            console.log(e.target.value);
          }}
          style={{ width: "300px" }}
          defaultValue={"defaultValue"}
        />
      </>
    );

    return input;
  }

  //返回单行输入框虚拟DOM
  createInputVD() {
    let inputVD = {
      ...baseVD
    };
    return inputVD;
  }

  //返回单选框虚拟DOM
  createRadioVD() {}

  //返回复选框虚拟DOM
  createCheckboxVD() {}

  //返回多行输入框虚拟DOM
  createTextareaVD() {}

  //返回分值框虚拟DOM
  createNumberVD() {}

  render() {
    return (
      <div>
        <hr />
        <Formshow componentList={this.state.componentList} />
      </div>
    );
  }
}
