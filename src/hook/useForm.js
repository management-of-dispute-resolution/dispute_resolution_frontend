
import { useCallback, useState

} from "react";

// хук управления формой
export function useForm() {
  const [values, setValues] =useState({});


  const handleSubmit = (event) => {
    const {target} = event;
    const {value} = target;
    const {name} = target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleSubmit, setValues };
}

//  хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  // const currentUser = useContext(CurrentUserContext);

  const handleChange = (event) => {
    const {target} = event;
    const {value} = target;
    const {name} = target;
    setValues({ ...values, [name]: value });


    setErrors({ ...errors, [name]: target.validationMessage });
    if (name === 'name') {
      if (target.validity.patternMismatch) {
        setErrors({ ...errors, [name]: "Имя может содержать только буквы русского и английского алфавита, пробел, дефис." });
      }
    
  }

    if (name === 'email') {
      if (target.validity.valueMissing) {
        setErrors({ ...errors, [name]: "Email не может быть пустым" });
    }
      if (target.validity.patternMismatch) {
        setErrors({ ...errors, [name]: "Е-mail должен соответствовать шаблону электронной почты" });
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
