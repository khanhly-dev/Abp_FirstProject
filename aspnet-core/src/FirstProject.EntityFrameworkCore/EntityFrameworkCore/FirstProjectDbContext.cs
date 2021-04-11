using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using FirstProject.Authorization.Roles;
using FirstProject.Authorization.Users;
using FirstProject.MultiTenancy;
using FirstProject.City;
using FirstProject.District;
using FirstProject.CardInfo;

namespace FirstProject.EntityFrameworkCore
{
    public class FirstProjectDbContext : AbpZeroDbContext<Tenant, Role, User, FirstProjectDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<CityEntity> Citys { get; set; }
        public DbSet<DistrictEntity> Districts { get; set; }
        public DbSet<CardInfoEntity> CardInfos { get; set; }
        public FirstProjectDbContext(DbContextOptions<FirstProjectDbContext> options)
            : base(options)
        {
        }
    }
}
