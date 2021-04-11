using Abp.Domain.Repositories;
using FirstProject.City.Dto;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstProject.City
{
    public class CityAppService : FirstProjectAppServiceBase, ICityAppService
    {
        private readonly IRepository<CityEntity> _cityRepository;

        public CityAppService(IRepository<CityEntity> cityRepository)
        {
            _cityRepository = cityRepository;
        }
        public async Task<List<GetCityDto>> GetAllCity()
        {
            var citys = await _cityRepository
                .GetAll()
                .ToListAsync();

            return new List<GetCityDto>(
                ObjectMapper.Map<List<GetCityDto>>(citys)
            );
        }
    }
}
