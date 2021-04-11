using FirstProject.City.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstProject.City
{
    public interface ICityAppService
    {
        Task<List<GetCityDto>> GetAllCity();
    }
}
