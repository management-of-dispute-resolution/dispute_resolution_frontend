
import {
  useCallback, useState
  // ,useEffect

} from "react";

// хук управления формой
// export function useForm() {
//   const [values, setValues] =useState({});


//   const handleSubmit = (event) => {
//     const {target} = event;
//     const {value} = target;
//     const {name} = target;
//     setValues({ ...values, [name]: value });
//   };

//   return { values, handleSubmit, setValues };
// }

//  хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  // const [isLoading, setisLoading] = useState(false);
  // const currentUser = useContext(CurrentUserContext);

  // console.log(isLoading)
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //  useEffect(() => {
  //   console.log('Обновленное значение values:', values);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [value]);

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

      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: "Пароль не может быть пустым" });
      }
      if (target.validity.patternMismatch) {

        setErrors({ ...errors, [name]: "Пароль должен содержать от 8 до 32 символов:английские буквы, цифры, cпецсимволы." });
      }
    }

    if (name === 'newPassword') {


      
      
      if (target.value !== values.newPasswordConfirm && values.newPasswordConfirm !== '' && values.newPasswordConfirm !== undefined 
   
      
      ) {

        setErrors(() => ({
          ...errors,
          newPassword: 'Пароли не совпадают',
          newPasswordConfirm: 'Пароли не совпадают',
        }));

      
      } 
      else {
        console.log("ОЧИСТКА")
        setErrors(() => ({
          ...errors,
          newPassword: '',
          newPasswordConfirm: '',
        }));
      }

      
      if (target.validity.patternMismatch) {
        console.log("patternMismatch")

        setErrors({ ...errors, [name]: "Пароль должен содержать от 8 до 32 символов:английские буквы, цифры, cпецсимволы." });
      }

      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: "Пароль не может быть пустым" });
      }
    }




    if (name === 'newPasswordConfirm') {

      if (target.value !== values.newPassword && values.newPassword !== '' && values.newPasswordConfirm !== undefined) {

        setErrors(() => ({
          ...errors,
          newPassword: 'Пароли не совпадают',
          newPasswordConfirm: 'Пароли не совпадают',
        }));

      } else {
        setErrors(() => ({
          ...errors,
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
