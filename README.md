# Utilitario generar url relativas (Enfocado a AJAX)

**Ventajas:**

- No tienes que preocuparte por la entrada de caracteres no deseados.
- Muy sencillo de utilizar.
- No tiene dependencias.
- Funciona tanto en local como en internet con http y https.


### Uso básico

Se debe especificar `controlador` y `acción`, en caso de contener parámetros se pueden agregar.

```javascript
Ruta normal
let route = new Route('foo','bar');
```
**Ruta con parametros**
```javascript
let route = new Route('foo','bar',1);
```
O
```javascript
let route = new Route('foo','bar','any');
```
**Array de parámetros**
```javascript
let route = new Route('foo','bar',['products',1,'any']);
```
 Para obtener la ruta solo debe invocarse el método `route`
 ```javascript
 let route = new Route('foo','bar');
 console.log( route.route );
 http://localhost/mypath/foo/bar
```

### Otras opciones

También puedes especificar si quieres que se incluya el pathname o no, o uno personalizado, por defecto se incluye..

```javascript
let route = new Route('foo','bar',1, false);
console.log(route.route);

http://localhost/mypath/foo/bar
```
También si no quiero indicar ningún parámetro puedo pasar  `null` como segundo parámetro

```javascript
let route = new Route('foo','bar',null, false);
console.log(route.route);
```
**Excluyendo el patch**
```javascript
let route = new Route('foo','bar',null, true);
console.log(route.route);
http://localhost/foo/bar
```

**Personalizado**
```javascript
let route = new Route('foo','bar',null,'custom_path');
console.log(route.route);
http://localhost/custom_path/foo/bar
```
