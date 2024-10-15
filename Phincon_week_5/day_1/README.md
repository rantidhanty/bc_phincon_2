// utk manggil 1 file seeder, cara panggil di cli npm run seed:run -- namafile
"seed:run": "npx sequelize-cli db:seed --seed",

//utk manggil semua file seeder, cara panggil di cli npm run seed:all
"seed:all": "npx sequelize-cli db:seed:all"