import API from "../../api.js"


class ItemsTableComponent {
  htmlElement;

  constructor(cars) {
    this.htmlElement = document.createElement('table');
    this.htmlElement.className = 'table table-striped shadow-lg ';
    this.htmlElement.innerHTML = `
    <thead class="bg-info text-dark border-danger ">
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
<button class="btn btn-danger">X</button>
</td>`;

const delButton = tr.querySelector('.btn-danger');
delButton.addEventListener('click', () => API.deleteCar(id));
  return tr;
}

}

export default ItemsTableComponent;