import Cnpj from "../database/models/Cnpj";
import Provider from "../database/models/Provider";

export default class ProviderService {
  private model = Provider;

  public async getById(id: number) {
    const provider = await this.model.findOne({
      where: {
        id,
      },
      include: [
        { model: Cnpj, as: 'cnpj', attributes: {
          exclude: ['id']
        } },
      ],
    });
    return provider;
  }
}
