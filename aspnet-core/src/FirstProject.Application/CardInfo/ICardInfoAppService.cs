using FirstProject.CardInfo.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstProject.CardInfo
{
    public interface ICardInfoAppService
    {
        Task<List<GetCardDto>> GetAllCardInfo();
        void CreateCard(CreateCardDto input);

        void UpdateCard(UpdateCardDto input);

        void DeleteCard(int  cardId);
    }
}
