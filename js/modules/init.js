
async function loadEmployeeData() {
    try {
      const response = await fetch('data/employees.json')
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error loading employee data:', error)
      return null
    }
  }
  
  export { loadEmployeeData }
  
  
  import { loadEmployeeData } from './modules/init.js'
  
  async function buildGrid() {
    try {
      const employees = await loadEmployeeData()
      if (!employees) {
        console.error('Employee data not available.')
        return;
      }
  
    
    } catch (error) {
      console.error('Error building grid:', error)
    }
  }
  
  buildGrid()
  