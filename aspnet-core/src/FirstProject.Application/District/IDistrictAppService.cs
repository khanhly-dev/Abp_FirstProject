using FirstProject.District.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstProject.District
{
    public interface IDistrictAppService
    {
        Task<List<GetDistrictDto>> GetAllDistrictAsync();

        List<GetDistrictDto> GetDistrictByCityId(int cityId);

    
    }
}
