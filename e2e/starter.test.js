describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {

  });

  it('should test something', async () => {
    await expect(element(by.text('Hola'))).toExist();
  });

});
