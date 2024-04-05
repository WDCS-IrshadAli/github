// content-manager (user)

// 1. login api
http://localhost:1337/api/auth/local

// 2. roles api (token required)
http://localhost:1337/api/users-permissions/roles

// 3. permission api (token required)
http://localhost:1337/api/users-permissions/permissions

// 4. users profile details (token required)
http://localhost:1337/api/users/me

// 5. get api (token required)
http://localhost:1337/api/faqs

// 6. filter faqs basis on (organization name) using "populate" --relation (token required)
http://localhost:1337/api/faqs?populate[0]=organization_id&filters[organization_id][name]=codezeros

// 7. filter faqs basis on (organization name) without "populate" --relation (token required)
http://localhost:1337/api/faqs?filters[organization_id][name]=codezeros