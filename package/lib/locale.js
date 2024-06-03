"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.array = exports.object = exports.boolean = exports.date = exports.number = exports.string = exports.mixed = void 0;

var _printValue = _interopRequireDefault(require("./util/printValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mixed = {
  default: '${path} é inválido',
  required: '${path} é obrigatório',
  oneOf: '${path} deve ter um dos seguintes valores: ${values}',
  notOneOf: '${path} não deve ter nenhum dos seguintes valores: ${values}',
  notType: ({
    path, type, value, originalValue,
  }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg = `${`${path} deve ser do tipo \`${type}\`, `
      + `mas o valor final é: \`${printValue(value, true)}\``}${
      isCast
        ? ` (cast do valor \`${printValue(originalValue, true)}\`)`
        : ''}`;

    if (value === null) {
      msg += '\nse a intenção era usar "null" como um valor em branco marque o esquema como `.nullable()`';
    }

    return msg;
  },
  defined: '${path} não deve ser indefinido',
};
exports.mixed = mixed;
let string = {
  length: '${path} deve ter exatamente ${length} caracteres',
  min: '${path} deve ter pelo menos ${min} caracteres',
  max: '${path} deve ter no máximo ${max} caracteres',
  matches: '${path} deve corresponder ao padrão: "${regex}"',
  email: '${path} deve ser um e-mail válido',
  url: '${path} deve ser uma URL válida',
  trim: '${path} não deve conter espaços adicionais no início nem no fim',
  lowercase: '${path} deve estar em letras minúsculas',
  uppercase: '${path} deve estar em letras maiúsculas'
};
exports.string = string;
let number = {
  min: '${path} must be greater than or equal to ${min}',
  min: '${path} deve ser maior ou igual a ${min}',
  max: '${path} deve menor ou igual a ${max}',
  lessThan: '${path} deve ser menor que ${less}',
  moreThan: '${path} deve ser maior que ${more}',
  notEqual: '${path} não deve ser igual a ${notEqual}',
  positive: '${path} deve ser um número positivo',
  negative: '${path} deve ser um número negativo',
  integer: '${path} deve ser um número inteiro'
};
exports.number = number;
let date = {
  min: '${path} deve ser posterior a ${min}',
  max: '${path} deve ser anterior a ${max}'
};
exports.date = date;
let boolean = {
  isValue: '${path} deve ter ${value}'
};
exports.boolean = boolean;
let object = {
  noUnknown: '${path} tem chaves desconhecidas: ${unknown}',
};
exports.object = object;
let array = {
  min: '${path} deve ter pelo menos ${min} itens',
  max: '${path} deve ter no máximo ${max} itens',
  length: '${path} deve ter ${length} itens'
};
exports.array = array;

var _default = Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});

exports.default = _default;