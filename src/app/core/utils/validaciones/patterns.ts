export default{
   email:/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ ,
   apellidos:/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}$/,
   telefono:/^\d{9}$/,
   cpostal: /^\d{5}$/,
   fechaUTC:/^\d{4}-[0-1][0-9]-[0-3]\d{1}T[0-2]\d{1}:[0-5]\d{1}:[0-5]\d{1}.\d{3}Z$/,
   decimal:/^[0-9]+([.][0-9]{1,2})?$/
}