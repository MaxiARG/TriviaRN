describe('Debe mostrar Menu de seleccion de categorias', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {

  });

  it('Las categorias deben ser visibles', async () => {
    await expect(element(by.text('General Knowledge'))).toExist();
    
  });

});
