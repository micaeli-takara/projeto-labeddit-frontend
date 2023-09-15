import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.name) {
      newErrors.name = "Campo obrigatório";
    } else if (form.name.length < 5) {
      newErrors.name = "O nome deve ter pelo menos 5 caracteres";
    }


    if (!form.email) {
      newErrors.email = "Campo obrigatório";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!form.password) {
      newErrors.password = "Campo obrigatório";
    } else if (!isValidPassword(form.password)) {
      newErrors.password = "A senha deve conter no mínimo 7 caracteres, sendo uma letra maiúscula, uma minúscula, um número e um caractere especial";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const cleanForm = () => {
    setForm(initialState);
    setErrors({});
  };

  const isValidEmail = (email) => {
    // Implemente sua lógica de validação de e-mail aqui, por exemplo, uma expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    return passwordRegex.test(password);
  };

  return { form, onChange, cleanForm, validateForm, errors };
};

export default useForm;
