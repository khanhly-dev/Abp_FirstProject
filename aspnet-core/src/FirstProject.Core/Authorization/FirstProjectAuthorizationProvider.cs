using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace FirstProject.Authorization
{
    public class FirstProjectAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Users_Activation, L("UsersActivation"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
            var dashBoard = context.CreatePermission(PermissionNames.Pages_Dashboard, L("Pages_Dashboard"));
            dashBoard.CreateChildPermission(PermissionNames.Pages_CardCreate, L("Pages_CardCreate"));
            dashBoard.CreateChildPermission(PermissionNames.Pages_CardView, L("Pages_CardView"));
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, FirstProjectConsts.LocalizationSourceName);
        }
    }
}
