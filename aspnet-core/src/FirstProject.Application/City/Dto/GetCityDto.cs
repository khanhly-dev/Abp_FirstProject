using Abp.AutoMapper;

namespace FirstProject.City.Dto
{
    [AutoMapFrom(typeof(CityEntity))]
    public class GetCityDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
