interface PromiseModel {
  id?: number;
  desc: string;
}

const fetchClient = (url: string) => (resource: string) => (method: string) => (
  body?: PromiseModel
) => {
  return fetch(`${url}/${resource}`, {
    body: body && JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    method,
  });
};

const api = fetchClient('http://localhost:3000');

const resource = api('promise');

const getAction = resource('get');

const postAction = resource('post');

const deleteItem = (id: number) => {
  const resource = api(`promise/${id}`);
  resource('delete')().then(loadItems);
};

const loadItems = () => {
  getAction().then((res) => res.json().then(renderList));
};

const saveItem = () => {
  const input = document.getElementById('promise-input') as HTMLInputElement;
  if (input.value) {
    postAction({ desc: input.value }).then(loadItems);
    input.value = '';
  }
};

const renderList = (data: PromiseModel[]) => {
  const table = document.getElementById('promise-table');
  if (table) {
    table.innerHTML = '';
    let tr = document.createElement('tr');
    ['Promise', 'Delete'].forEach((label) => {
      const th = document.createElement('th');
      th.innerText = label;
      tr.appendChild(th);
    });
    table.appendChild(tr);
    data.forEach((el) => {
      table.appendChild(renderRow(el));
    });
  }
};

const renderRow = (el: PromiseModel) => {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.innerHTML = el.desc;
  tr.appendChild(td1);
  const td2 = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  deleteButton.onclick = () => deleteItem(el.id!);
  td2.appendChild(deleteButton);
  tr.appendChild(td2);
  return tr;
};

document.getElementById('promise-save')?.addEventListener('click', saveItem);
loadItems();
