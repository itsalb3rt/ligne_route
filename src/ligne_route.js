/**
 * Utilitario para generar url hacia los controladores
 * de ligne framework
 *
 * Uso básico;
 *
 * ruta normal
 * let route = new Route('foo','bar');
 *
 * ruta con parametros
 * let route = new Route('foo','bar',1);
 * O
 *let route = new Route('foo','bar','any');
 *
 * array de parametros
 * let route = new Route('foo','bar',['products',1,'any']);
 *
 * Para obtener la ruta solo debe invocarse el metodo route
 * console.log(route.route);
 **/


class Route {

    constructor(controller, action, params = null) {
        //Obtiene la url actual
        this.url = new URL(window.location.href);

        this.host = this.url.host;
        this.protocol = this.url.protocol;
        this.actualPathname = this.url.pathname;

        this.controller = controller;
        this.action = action;
        this.parameters = params;

        this.newPathname = null;

        //Solo acepta caracteres alfabeticos
        this.regex = /[0-9éèêëùüàâöïç\"\/\%\(\).'?!,@$#-_ \n\r]/g;
        //Acepta caracteres alfanumericos
        this.regex_alfanumeric = /[\W_]+/g;
    }

    get route() {
        if (this.protocol != 'file') {
            this.check_controller_action_is_valid();
            this.newPathname = this.patchName;
            this.parameters = (this.params != null) ? this.params : '';
            return this.protocol + '//' + this.host + '/' + this.newPathname + this.parameters;
        } else {
            this.generate_new_throw('No se pueden generar rutas en un archivo local, debe tenerlo en un servidor.');
        }
    }

    get patchName() {
        return this.controller + '/' + this.action;
    }

    get params() {
        if (this.parameters != null) {

            if (Array.isArray(this.parameters)) {
                return this.array_params;
            } else if (typeof this.parameters == 'string') {
                return '/' + this.parameters.trim().replace(this.regex_alfanumeric, '');
            } else if (typeof this.parameters == 'number') {
                return '/' + this.parameters.toString().trim().replace(this.regex_alfanumeric, '');
            }
        } else {
            return null;
        }

    }

    check_controller_action_is_valid() {
        if (this.controller == 'undefined' || this.controller == null) {
            this.generate_new_throw('El controlador esta vació, no puede haber ruta sin controlador');
        } else if (this.action == 'undefined' || this.action == null) {
            this.generate_new_throw('La acción esta vacia, no puede haber ruta sin acción');
        }
        this.purify_controller_action();
    }

    purify_controller_action() {

        if (typeof this.controller == 'string') {
            this.controller = this.controller.trim().replace(this.regex, '');
        } else {
            this.generate_new_throw('El controlador no es de tipo string');
        }

        if (typeof this.action == 'string') {
            this.action = this.action.trim().replace(this.regex, '');
        } else {
            this.generate_new_throw('La acción no es de tipo string');
        }

    }

    generate_new_throw(message) {
        throw new Error(message);
    }

    get array_params() {
        let params;
        for (let index in this.parameters) {
            if (index == 0) params = '/' + this.parameters[index].toString().trim().replace(this.regex_alfanumeric, '');
            params += '/' + this.parameters[index].toString().trim().replace(this.regex_alfanumeric, '');
        }
        return params;
    }
}