// Adiciona ao visor os numeros pressionados
function calcNum ( num ) {
  if ( typeof gvisor == 'undefined' ) {
    document.calcform.visor.value = ''
  }
  document.calcform.visor.value = document.calcform.visor.value + num
  gvisor = 1
}

// Função para limpar a calculadora
function calcLimpar() {
  document.calcform.visor.value = ''
  delete gvalor
  delete goper
  delete gvisor
}

// Função que executa as operações básicas da calculadora
function calcOper ( oper , valor1 , valor2 ) {
  let valor
  if ( oper == 'somar' ) {
    valor = parseFloat( valor1 ) + parseFloat( valor2 )
  } else {
    if ( oper == 'subtrair' ) {
      valor = valor1 - valor2
    } else {
      if ( oper == 'multiplicar' ) {
        valor = valor1 * valor2
      } else {
        valor = valor1 / valor2
      }
    }
  }

  return(valor)
}

// Função do algoritmo de "passagem" das ações do usuário
function calcParse ( oper ) {
  let valor = document.calcform.visor.value
  delete gvisor

  if ( typeof goper != 'undefined' && oper == 'resultado' ) {
    gvalor = calcOper( goper , gvalor , valor )
    document.calcform.visor.value = gvalor
    delete oper
    delete gvalor
    return(0)
  }

  if ( typeof gvalor != 'undefined' ) {
    gvalor = calcOper( goper , gvalor , valor )
    goper = oper
    document.calcform.visor.value = gvalor
  } else {
    gvalor = valor
    goper = oper
  }
}
