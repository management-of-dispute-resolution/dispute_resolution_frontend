
import {
  useCallback, useState
  // ,useEffect

} from "react";


export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);


  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setValues({ ...values, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: target.validationMessage }));

    if (name === 'email') {

      if (target.validity.patternMismatch) {
        setErrors({ ...errors, [name]: "Е-mail должен соответствовать шаблону электронной почты. Например, example@mail.com" });
      }
      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: "E-mail не может быть пустым" });
      }

    }

    if (name === 'password') {

      if (target.value === values.newPasswordConfirm ||  target.value === values.newPassword) {

        setErrors(() => ({
          ...errors,
          password: 'Новый пароль должен отличаться от текущего',
        }));

       
        target.setCustomValidity("Новый пароль должен отличаться от текущего")
      } 
      // else if  (target.value === values.newPassword) {
      //   setErrors(() => ({
      //     ...errors,
      //     newPassword: 'Новый пароль должен отличаться от текущего',
      //   }));
        
      //   document.getElementById('newPassword').setCustomValidity("Новый пароль должен отличаться от текущего")
      // } 
      else {
      
        target.setCustomValidity('')
        setErrors(() => ({
          ...errors,
       
          password:''
        }));

      }

    
      if (target.validity.patternMismatch) {

        setErrors({ ...errors, [name]: "Пароль должен содержать от 8 до 32 символов:английские буквы, цифры, cпецсимволы." });
      }
      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: "Пароль не может быть пустым" });
      }
    }

    if (name === 'newPassword') {

      if (target.value === values.password && values.password !== '' && values.password !== undefined) {

        setErrors(() => ({
          ...errors,
          newPassword: 'Новый пароль должен отличаться от текущего',
        }));

        target.setCustomValidity("Новый пароль должен отличаться от текущего'")
      }

      else if (target.value !== values.newPasswordConfirm && values.newPasswordConfirm !== '' && values.newPasswordConfirm !== undefined


      ) {

        setErrors(() => ({
          ...errors,
          newPassword: 'Пароли не совпадают',
          newPasswordConfirm: 'Пароли не совпадают',
        }));

        target.setCustomValidity("Пароли не совпадают")
      }

      else {
        target.setCustomValidity('')
        document.getElementById('newPasswordConfirm').setCustomValidity('')
        document.getElementById('password').setCustomValidity('')
        setErrors(() => ({
          ...errors,
          password:'',
          newPassword: '',
          newPasswordConfirm: '',
        }));

      }


      if (target.validity.patternMismatch) {


        setErrors({ ...errors, [name]: "Пароль должен содержать от 8 до 32 символов:английские буквы, цифры, cпецсимволы." });
      }

      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: "Пароль не может быть пустым" });
      }
    }




    if (name === 'newPasswordConfirm') {

      if (target.value === values.password && values.password !== '' && values.password !== undefined) {

        setErrors(() => ({
          ...errors,
          newPasswordConfirm: 'Новый пароль должен отличаться от текущего',
        }));

        target.setCustomValidity("Новый пароль должен отличаться от текущего")
      }

      else if (target.value !== values.newPassword && values.newPassword !== '' && values.newPasswordConfirm !== undefined) {

        setErrors(() => ({
          ...errors,
          newPassword: 'Пароли не совпадают',
          newPasswordConfirm: 'Пароли не совпадают',
        }));
        target.setCustomValidity("Пароли не совпадают")


      }

      else {
        target.setCustomValidity('')
        document.getElementById('newPassword').setCustomValidity('')
        document.getElementById('password').setCustomValidity('')
        setErrors(() => ({
          ...errors,
          newPassword: '',
          newPasswordConfirm: '',
          password:''
        }));

      }



      if (target.validity.patternMismatch) {

        setErrors({ ...errors, [name]: "Пароль должен содержать от 8 до 32 символов:английские буквы, цифры, cпецсимволы." });
      }

      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: "Пароль не может быть пустым" });
      }



    }

    setIsValid(target.closest("form").checkValidity());
  };




  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
