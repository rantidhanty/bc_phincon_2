# bc_phincon_2

Langkah-langkah untuk git
- git init
- git status => cek status di folder project
- git add => Menambahkan file ke staging yang akan di commit
- git commit -m [pesan-commit] => Menambahkan pesan commit / commit file yang akan di push
- git remote -v => untuk mengecek url repository online
- git remote add origin [url-repository] => untuk set remote url nya, di push ke mana
- git remote set-url origin [url-reposiroty] => untuk set remote url jika sudah ada url existing
- git push => push ke repository online
- git push origin [name-branch] => push ke repository dengan nama branch tertentu
- git fetch => unutk menarik branch dan perubahan yang ada di online repository
- git pull => pull ke repository online
- git pull origin [name-branch] => push ke repository dengan nama branch tertentu
- git branch -a => untuk mengecek branch yang ada di repository
- git switch [name-branch] => untuk mengganti posisi branch yang aktif
- git checkout -b [name-branch] => untuk membuat branch baru berdasarkan referensi aktif branch
- git merge [name-branch] => untuk menggabungkan branch ke branch yang di tuju
- git merge [name-branch] --allow-unrelated-histories => untuk menggabungkan branch ke branch yang di tuju (Dilakukan pertama kali jika tidak ada sama sekali commitan di awal)