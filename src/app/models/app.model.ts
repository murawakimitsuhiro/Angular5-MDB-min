export class AppModel {

  constructor(data?: any) {
  }

  /**
   * 更新
   * @param newModel
   * @return {AppModel}
   */
  update(newModel, withModelData = false) {
    const keys = Object.keys(newModel);
    keys.map(key => {
      if (withModelData || key.slice(0, 1).match(/[a-z]/)) {
        this[key] = newModel[key];
      }
    });

    return this;
  }
}
