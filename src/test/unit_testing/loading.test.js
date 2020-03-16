import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { expect } from "chai";

Enzyme.configure({ adapter: new Adapter() });

import Loading from "../../view/page/layout-loading";
import { shallow, mount, render } from "enzyme";

describe("<Loading />组件shallow挂载测试:", () => {
  test("shallow testing:", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).to.be.a("object");
  });
});

describe("<Loading />组件mount挂载测试:", () => {
  it("render testing:", () => {
    const wrapper = mount(<Loading />);
    expect(wrapper.find(".lean-mask")).to.have.lengthOf(1);
    expect(wrapper.find("button")).to.have.lengthOf(1);
  });
});
