import { body, param } from 'express-validator';

function validatorUser(method: string) {
  switch (method) {
    
    case 'create': {
      return [
        body('cpf')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 11, max: 11 })
          .withMessage('O cpf deve possuir 11 números')
          .isString()
          .withMessage('O cpf deve ser passado como String'),

        body('name')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 }),

        body('email')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 })
          .withMessage('O corpo de email deve ser preenchido')
          .isEmail()
          .withMessage('Precisa ser como exemplo@exemplo'),

        body('birthDate')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 })
          .withMessage('A data de nascimento nao poder ser vazio')
          .isString()
          .withMessage('A data de nascimento deve ser passado como String'),

        body('status')
          .optional()
          .isLength({ min: 1 })
          .withMessage('O status nao poder ser vazio')
          .isDecimal()
          .withMessage('O status do usuário deve ser um decimal'),

        body('card')
          .optional()
          .isString()
          .withMessage('O card deve ser passado como String'),

        body('address')
          .optional()
          .isLength({ min: 1 })
          .withMessage('O endereço nao poder ser vazio')
          .isString()
          .withMessage('O endereço deve ser passado como String'),

        body('password')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isStrongPassword()
          .withMessage(
            'A senha deve conter no mínimo: 1 caractere maiúsculo e minúsculo, 1 número e 1 caractere especial',
          )
          .isString()
          .withMessage('A senha deve ser passada como string'),

        body('phone')
          .optional()
          .isLength({ min: 1 })
          .withMessage('O telefone nao poder ser vazio')
          .isString()
          .withMessage('O telefone deve ser passado como String'),

        body('role')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 })
          .withMessage('O cargo nao poder ser vazio')
          .isString()
          .withMessage('O cargo deve ser passado como String'),

      ];
      break;
    }
    case 'update': {
      return [

        body('cpf')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 11, max: 11 })
          .withMessage('O cpf deve possuir 11 números')
          .isString()
          .withMessage('O cpf deve ser passado como String'),

        body('name')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 }),

        body('email')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 })
          .withMessage('O corpo de email deve ser preenchido')
          .isEmail()
          .withMessage('Precisa ser como exemplo@exemplo'),

        body('birthDate')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 })
          .withMessage('A data de nascimento nao poder ser vazio')
          .isString()
          .withMessage('A data de nascimento deve ser passado como String'),

        body('status')
          .optional()
          .isLength({ min: 1 })
          .withMessage('O status nao poder ser vazio')
          .isDecimal()
          .withMessage('O status do usuário deve ser um decimal'),

        body('card')
          .optional()
          .isString()
          .withMessage('O card deve ser passado como String'),

        body('address')
          .optional()
          .isLength({ min: 1 })
          .withMessage('O endereço nao poder ser vazio')
          .isString()
          .withMessage('O endereço deve ser passado como String'),

        body('phone')
          .optional()
          .isLength({ min: 1 })
          .withMessage('O telefone nao poder ser vazio')
          .isString()
          .withMessage('O telefone deve ser passado como String'),

        body('role')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 })
          .withMessage('O cargo nao poder ser vazio')
          .isString()
          .withMessage('O cargo deve ser passado como String'),
      ];
      break;
    }
    case 'updatePassword': {
      return [
        body('newPassword')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isStrongPassword()
          .withMessage(
            'A senha deve conter no mínimo: 1 caractere maiúsculo e minúsculo, 1 número e 1 caractere especial',
          )
          .isString()
          .withMessage('A senha deve ser passada como string'),

        body('currentPassowrd')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isStrongPassword()
          .withMessage(
            'A senha deve conter no mínimo: 1 caractere maiúsculo e minúsculo, 1 número e 1 caractere especial',
          )
          .isString()
          .withMessage('A senha deve ser passada como string'),
      ];
      break;
    }
    
  }
}

function validatorProduct(method: string) {
  switch (method) {
    case 'create': {
      return [
        body('name')
          .exists()
          .withMessage('O campo é obrigatório')
          .isLength({ min: 1 })
          .withMessage('O campo nao pode ser vazio')
          .isString()
          .withMessage('O nome deve ser passado como String'),

        body('price')
          .exists()
          .withMessage('O campo é obrigatório')
          .isDecimal()
          .withMessage('A preço deve ser passada como decimal'),

        body('description')
          .optional()
          .isLength({ min: 1 })
          .withMessage('O campo nao pode ser vazio')
          .isString()
          .withMessage('A descrição deve ser passado como String'),

        body('quantity')
          .exists()
          .withMessage('O campo é obrigatório')
          .isInt()
          .withMessage('A quantidade deve ser passada como um Inteiro'),
      ];
      break;
    }
    case 'readProduct': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro')
      ];
      break;
    }
    case 'update': {
      return [
        body('name')
          .exists()
          .withMessage('O campo é obrigatório')
          .isLength({ min: 1 })
          .withMessage('O campo nao pode ser vazio')
          .isString()
          .withMessage('O nome deve ser passado como String'),

        body('price')
          .exists()
          .withMessage('O campo é obrigatório')
          .isDecimal()
          .withMessage('A preço deve ser passada como decimal'),

        body('description')
          .optional()
          .isLength({ min: 1 })
          .withMessage('O campo nao pode ser vazio')
          .isString()
          .withMessage('A descrição deve ser passado como String'),

        body('quantity')
          .exists()
          .withMessage('O campo é obrigatório')
          .isInt()
          .withMessage('A quantidade deve ser passada como um Inteiro'),
      ];
      break;
    }
  }
}

function validatorComment(method: string) {
  switch (method) {
    case 'create': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),

        body('text')
          .exists()
          .withMessage('O campo é obrigatório')
          .isLength({ min: 1 })
          .withMessage('O texto nao pode ser vazio')
          .isString()
          .withMessage('O texto deve ser passado como String'),
      ];
      break;
    }
    case 'readComments': {
      return [
      body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),
      ];
      break;
    }
    case 'destroy': {
      return [
      body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),
      ];
      break;
    }
  }
}

function validatorAnswer (method: string) {
  switch (method) {
    case 'create': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),

        body('ownerEmail')
        .exists()
        .withMessage('O campo não pode ser nulo')
        .isLength({ min: 1 })
        .withMessage('O corpo de email deve ser preenchido')
        .isEmail()
        .withMessage('Precisa ser como exemplo@exemplo'),

        body('text')
          .exists()
          .withMessage('O campo é obrigatório')
          .isLength({ min: 1 })
          .withMessage('O texto nao pode ser vazio')
          .isString()
          .withMessage('O texto deve ser passado como String'),
      ];
      break;
    }
    case 'destroy': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),

        body('ownerEmail')
        .exists()
        .withMessage('O campo não pode ser nulo')
        .isLength({ min: 1 })
        .withMessage('O corpo de email deve ser preenchido')
        .isEmail()
        .withMessage('Precisa ser como exemplo@exemplo')
      ];
      break;
    }
  }
}


function validatorLogin(method: string) {
  switch (method) {
    case 'login': {
      return [
        body('email')
          .exists()
          .withMessage('O campo não pode ser nulo')
          .isLength({ min: 1 })
          .withMessage('O corpo de email deve ser preenchido')
          .isEmail()
          .withMessage('Precisa ser como exemplo@exemplo'),
      ];
    }
  }
}

function validatorFavorites(method: string) {
  switch (method) {
    case 'favoriteProduct': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),
      ];
    }
    case 'unFavoriteProduct': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),
      ];
    }
  }
}

function validatorCart(method: string) {
  switch (method) {
    case 'addProduct': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),
      ];
    }
    case 'removeProduct': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),
      ];
    }
    case 'destroy': {
      return [
        body('productId')
        .exists()
        .withMessage('O campo é obrigatório')
        .isInt()
        .withMessage('A id deve ser passada como inteiro'),
      ];
    }
  }

}

export { validatorUser, validatorProduct, validatorComment, validatorAnswer, validatorFavorites, validatorCart, validatorLogin };