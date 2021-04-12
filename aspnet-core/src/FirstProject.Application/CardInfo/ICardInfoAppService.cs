using FirstProject.CardInfo.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstProject.CardInfo
{
    public interface ICardInfoAppService
    {
        Task<List<GetCardDto>> GetAllCardInfo();
        Task CreateCard(CreateCardDto input);

        Task UpdateCard(UpdateCardDto input);

        Task DeleteCard(int  cardId);
    }
}
