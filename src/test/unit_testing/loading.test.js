import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { expect } from "chai";

Enzyme.configure({ adapter: new Adapter() });

import Loading from "../../view/page/loading";
import Event from "./../../view/components/event";
import { shallow, mount, render } from "enzyme";

describe("<Loading />", () => {
  test("shallow testing:", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).to.be.a("object");
  });
});

describe("<Loading />", () => {
  it("render testing:", () => {
    const wrapper = mount(<Loading />);
    expect(wrapper.find(".lean-mask")).to.have.lengthOf(1);
    expect(wrapper.find("button")).to.have.lengthOf(1);
  });
});

describe("<event />", () => {
  it("event testing:", () => {
    const warpper = mount(<Event />);
  });
});
