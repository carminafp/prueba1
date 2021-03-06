export default {
    validarEmail(valor:any) {
        if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor)){
         return true;
        } else {
         return false;
        }
    },
    mayusFirstChar(palabra:string){
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    },
    validarApellidos(apellidos:string){
        apellidos.trim();
        let separados = apellidos.split(' ');
        let primero = this.mayusFirstChar(separados[0]);
        let segundo = this.mayusFirstChar(separados[1]);
       
        return [primero,segundo];
    },
    ordenarJSONAsc(p_array_json:any, p_key:any) {
        return p_array_json.sort(function (a:any, b:any) {
           return a[p_key] > b[p_key];
        });
    },
    ordenarJSONDesc(p_array_json:any, p_key:any) {
        this.ordenarJSONAsc(p_array_json, p_key); 
        return p_array_json.reverse(); 
    },
    deleteArrayById(array:any,id:any){
        array.forEach((element:any,index:any) => {
            if(element.id == id){
                array.splice(index,index+1)
            }
        });
    }
}