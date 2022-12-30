import API from "../../api.js"


class ItemsTableComponent {
  htmlElement;

  constructor(cars) {
    this.htmlElement = document.createElement('table');
    this.htmlElement.className = 'table table-dark  shadow-lg ';
    this.htmlElement.innerHTML = `
    <thead class=" text-primary border-warning ">
      <tr>
        <th>Id</th>
        <th>Brand</th>
        <th>Have</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody></tbody>`;

    const tbody = this.htmlElement.querySelector('tbody');
    const rowsHtmlElements = cars.map(this.createRowHtmlElement);
    tbody.append(...rowsHtmlElements);
     
  } 
createRowHtmlElement({ id, brand, have }) {
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${id}</td>
<td>${brand}</td>
<td>${have ? 'Still buying' : 'No money'}</td>
<td class="d-flex justify-content-end">
<button class="btn btn-danger">DELET</button>
</td>`;

const handleDelete = async  () => {
  await API.deleteCar(id);
  const cars = await API.getCars();
  
  const tbody = this.htmlElement.querySelector('tbody');
      const rowsHtmlElements = cars.map(this.createRowHtmlElement);
      tbody.append(...rowsHtmlElements);
  
  
  
  }

const delButton = tr.querySelector('.btn-danger');
delButton.addEventListener('click', handleDelete);


return tr;
}

}

export default ItemsTableComponent;