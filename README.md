# banpayTest

Proyecto de CRUD Basico de usuarios. puede levantar ejecutando node app.js , el cual ejecutara el servicio por el puerto 5022.  En este se crearon diferentes endpoint para las diferentes tareas:
Creacion de usuario  (POST) :  http://localhost:5022/v1/users/add/
{
    "name":"ejemplo",
    "last_name":"ejemplo",
    "email":"ejemplo@gmail.com",
    "login":"ejemplo",
    "pass":"asdasd",
    "rol":"film"
}
Consulta de todos los usuarios  (GET) : http://localhost:5022/v1/users/all

Consulta de un usuario mediante el id (GET) : http://localhost:5022/v1/find/{id}



In progress ...
