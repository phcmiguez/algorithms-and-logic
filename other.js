const { default: axios } = require("axios")

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response => {
  const employee = response.data
  const femaleEmployee = employee.filter((el) => el.genero === 'F')
  const chineseWomanEmployee = femaleEmployee.filter((el) => el.pais === 'China')

  const lowestSalaryReduce = chineseWomanEmployee.reduce((el, cur) => el.salario > cur.salario ? cur : el)

  const lowestSalary = chineseWomanEmployee.sort((a,b) => a.salario - b.salario)[0]
  const highestSalary = chineseWomanEmployee.sort((a,b) => b.salario - a.salario)[0]

  console.log('Lower salary:',lowestSalary.nome)
  console.log('Highest salary:', highestSalary.nome)

  console.log(lowestSalaryReduce.nome)
  
}).catch((e) => console.log(e.code))
