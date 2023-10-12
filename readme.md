guardar usuarios, e iniciar sesion
1.- Crear una coleccion (modelo da datos)
2.- Crea rutas (login, registro de usuario, cierre de sesion)
3.- Crear controladores (register, login, logout)
1.- REGISTRO DE USUARIO - POST (email, contraseña, tipo de usuario) - validar si el email existe. - encriptar contraseña - guardar en la base
2.- LOGIN - validar si el email esta registrado - validar si la contraseña coincide con la de ese email (compareSync) - generar un TOKEN -> JWT
