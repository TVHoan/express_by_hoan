# **# express_by_hoan**
## Start project 
### ---- run commnd below -------
 
#### npm run init

###  Migration
#### npm run typeorm migration:generate -- src/migrations/product
#### npm run typeorm migration:run

### Seeding
#### typeorm-extension db:create to create the database
#### typeorm-extension db:drop to drop the database
#### typeorm-extension seed:run seed the database
#### typeorm-extension seed:create to create a new seeder
#### test api paginate http://localhost:3000/products/get?take=5&limit=0&name=wooden