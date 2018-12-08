# Utilitario generar url relativas (Enfocado en AJAX)

**Ventajas:**

- No tienes que preocuparte por la entrada de caracteres no deseados.
- Se específica controlador y acción, en caso de contener parámetros se pueden agregar.
- Muy sencillo de utilizar.
- No tiene dependencias.
- Funciona tanto en local como en internet con http y https.


### Uso básico

```javascript
Ruta normal
let route = new Route('foo','bar');
```
Ruta con parametros
```javascript
let route = new Route('foo','bar',1);
```
O
```javascript
let route = new Route('foo','bar','any');
```
Array de parámetros
```javascript
let route = new Route('foo','bar',['products',1,'any']);
```
 Para obtener la ruta solo debe invocarse el método `route`
 ```javascript
 let route = new Route('foo','bar');
 console.log( route.route );
 http://localhost/foo/bar
```
