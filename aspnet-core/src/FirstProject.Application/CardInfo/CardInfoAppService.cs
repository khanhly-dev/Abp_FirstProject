using Abp.Domain.Repositories;
using FirstProject.CardInfo.Dto;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstProject.CardInfo
{
    public class CardInfoAppService : FirstProjectAppServiceBase, ICardInfoAppService
    {

        private readonly IRepository<CardInfoEntity> _cardRepository;

        public CardInfoAppService( IRepository<CardInfoEntity> cardRepository)
        {
            _cardRepository = cardRepository;
        }

        public void CreateCard(CreateCardDto input)
        {
            var card = new CardInfoEntity
            {
                Name = input.Name,
                PhoneNumber = input.PhoneNumber,
                City = input.City,
                District = input.District
            };

            _cardRepository.Insert(card);
        }

        public void DeleteCard(int cardId)
        {
            var card = _cardRepository.Get(cardId);

            _cardRepository.Delete(card);
        }

        public async Task<List<GetCardDto>> GetAllCardInfo()
        {
            var card = await _cardRepository.GetAll().ToListAsync();

            return new List<GetCardDto>(
               ObjectMapper.Map<List<GetCardDto>>(card)
           );
        }

        public void UpdateCard(UpdateCardDto input)
        {
            var card = _cardRepository.Get(input.Id);

            card.Name = input.Name;
            card.PhoneNumber = input.PhoneNumber;
            card.City = input.City;
            card.District = input.District;

            _cardRepository.Update(card);
        }
    }
}
