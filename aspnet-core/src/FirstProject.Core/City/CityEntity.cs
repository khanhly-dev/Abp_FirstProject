using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject.City
{
    [Table("City")]
    public class CityEntity : Entity
    {
        public string Name { get; set; }
    }
}
