cd D:\src\cbehrmann\dist\ec-react15-lib
git reset --hard HEAD
git pull
call webpack
cd D:\src\cloud\ec-app
call yarn build
cp -f build/ec-app.js D:/Webapps/htdocs/default/apps/ec-app/assets/latest/
opn http://localhost/apps/ec-app/hhxx.html