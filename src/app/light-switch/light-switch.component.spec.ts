import { LightSwitchComponent } from './light-switch.component';

describe('LightSwitchComponent', () => {

  it("#clicked() should toggle #isOn", ()=>{
    const como= new LightSwitchComponent();
    expect(como.isOn).toBe(false, "off at first")
    como.clicked();
    expect(como.isOn).toBe(true,"on after click")
    como.clicked();
    expect(como.isOn).toBe(false,"off after second click")
  });

  it("#clicked() should set #message to is on" , ()=>{
    const como= new LightSwitchComponent();
    expect(como.message).toMatch(/is off/i, "off at first");
    como.clicked();
    expect(como.message).toMatch(/is on/i,"on after clicked");

  });



});
