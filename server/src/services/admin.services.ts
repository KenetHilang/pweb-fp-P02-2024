import Items from "../models/admin.models";
import { ItemInter } from "../models/admin.models";

class ItemServices {
  async ShowAll() {
    return await Items.find();
  }

  async AddItem(itemData: Partial<ItemInter>) {
    const item = new Items(itemData);
    return await item.save();
  }
}

export default new ItemServices();