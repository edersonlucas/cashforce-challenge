import Buyer from "../database/models/Buyer";
import Cnpj from "../database/models/Cnpj";
import Order from "../database/models/Order";
import Provider from "../database/models/Provider";
import User from "../database/models/User";

export default class OrderService {
  private model = Order;

  public async getAllByUserId(userId: number) {
    const orders = await this.model.findAll({
      where: {
        userId,
      },
      include: [
        { model: Provider, as: 'provider' },
        { model: Buyer, as: 'buyer' },
        { model: Cnpj, as: 'cnpj' },
        { model: User, as: 'user' },
      ],
      attributes: {
        exclude: ['cnpjId', 'userId', 'providerId', 'buyerId']
      },
    });
    return orders;
  }
}
