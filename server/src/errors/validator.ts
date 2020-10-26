import * as yup from 'yup';

export default {
  async user(
    name: any, 
    username: any, 
    email: any, 
    phone: any, 
    gender: any, 
    teacher: any, 
    password: any
    ) {
    const schema = yup.object().shape({
      name: yup.string()
        .required('Nome obrigatório')
        .min(6, 'Nome deve ter mínimo 6 máximo 30 caracteres')
        .max(30, 'Nome deve ter mínimo 6 máximo 30 caracteres'),
      username: yup.string()
        .required('username obrigatório')
        .min(4, 'username deve ter mínimo 4 máximo 15 caracteres')
        .max(15, 'username deve ter mínimo 4 máximo 15 caracteres'),
      email: yup.string()
        .email('inclua "@" no endereço de email')
        .required('email obrigatório'),
      phone: yup.string()
        .required('Contacto obrigatório')
        .min(6, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres')
        .max(15, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres'),
      gender: yup.string()
        .matches(/(Masculino|Feminino)/, {
          message: 'Género Masculino ou Feminino',
          excludeEmptyString: true
        }),
      teacher: yup.boolean().required(),
      password: yup.string()
        .min(8, 'Sua palavra-chave deve ter mínimo 8 máximo 15 caracteres')
        .max(15, 'Sua palavra-chave deve ter mínimo 8 máximo 15 caracteres')
        .required('Palavra-chave é obrigatória')
    })

    await schema.validate({
      name,
      username,
      email,
      phone,
      gender,
      teacher,
      password
    }, {
      abortEarly: false
    })
  }
}