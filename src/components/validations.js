import * as yup from 'yup';
//initial values kısmında kullanılan keyler ne ise burada da o verilmelidir.
const validations = yup.object().shape({
    email:yup.string().email('Geçerli bir email giriniz').required('Zorunlu alan'),
    password:yup.string().min(5,'Parolanız en az 5 karakter olmalıdır').required('Zorunlu alan'),
    passwordConfirm:yup.string().oneOf([yup.ref('password')],'Parolalar uyuşmamaktadır').required('Zorunlu alan'),
   
  });

export default validations;