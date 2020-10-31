import { shallowMount } from "@vue/test-utils";
import leftPanel from "@/components/leftPanel.vue";
import form from "@/components/form.vue";
import rightPanel from "@/components/rightPanel.vue";
import list from "@/components/list.vue";

describe("Left Panel and child component Unit testing", () => {
  it("Calls the proper function when add button is clicked", () => {
    const wrapper = shallowMount(leftPanel);
    const addNumber = jest.fn();
    wrapper.setMethods({
      addNumber: addNumber,
    });
    wrapper.find("button").trigger("clicked");
    expect(addNumber).toHaveBeenCalled;
  });
  it("renders props.value when passed", () => {
    const wrapper = shallowMount(form, {
      propsData: {
        value: {
          userName: "John Doe",
          phoneNumber: "5555555555",
        },
      },
    });
    expect(wrapper.props().value.userName).toBe("John Doe");
    expect(wrapper.props().value.phoneNumber).toBe("5555555555");
  });
});

describe("RightPanel and child component Unit testing", () => {
  it("Calls the proper function when delete button is clicked", () => {
    const wrapper = shallowMount(rightPanel);
    const deleteRecord = jest.fn();
    wrapper.setMethods({
      deleteRecord: deleteRecord,
    });
    wrapper.find("button").trigger("clicked");
    expect(deleteRecord).toHaveBeenCalled;
  });
  it("renders props.value when passed", () => {
    const wrapper = shallowMount(list, {
      propsData: {
        borderActive: false,
      },
    });
    expect(wrapper.props().borderActive).toBe(false);
  });
});
