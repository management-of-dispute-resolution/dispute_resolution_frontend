
import { useCallback, useState

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
 
  const handleChange = (event) => {
  
    
    
    const {target} = event;
    const {value} = target;
    const {name} = target;
    setValues({ ...values, [name]: value });
  



  

    setErrors((prevErrors) => ({ ...prevErrors, [name]: target.validationMessage }));
    
  //   if (name === 'name') {
  //     if (target.validity.patternMismatch) {
  //       setErrors({ ...errors, [name]: "Имя может содержать только буквы русского и английского алфавита, пробел, дефис." });
  //     }
    
  // }

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
    // setLoginStatus('')
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
