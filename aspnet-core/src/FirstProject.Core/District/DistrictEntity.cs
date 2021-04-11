using Abp.Domain.Entities;
using FirstProject.City;
using System.ComponentModel.DataAnnotations.Schema;

namespace FirstProject.District
{
    [Table("District")]
    public class DistrictEntity : Entity
    {
        [ForeignKey(nameof(CityId))]
        public int CityId { get; set; }
        public CityEntity City { get; set; }
        public string Name { get; set; }
    }
}
