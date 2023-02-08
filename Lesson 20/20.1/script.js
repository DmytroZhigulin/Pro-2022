// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.
// const API = "https://jsonplaceholder.typicode.com"
const API = "https://jsonplaceholder.typicode.com";
const controller = action => fetch(action)
      .then(data => {
            if (data.status >= 200 && data.status < 400) {
            return Promise.resolve(data.json());
            }
      return err;
      })
      .catch(err => alert('There is no id'));
const form = document.querySelector('.form');
const container = document.querySelector('.container');



form.addEventListener('submit', e => {
      e.preventDefault();

      let inputValue = form.querySelector('input[name=findId]').value;
      if(inputValue > 0 && inputValue <= 100) {

            controller(`${API}/posts/${inputValue}`)
                  .then(
                        data => {
                              createInfo(data, container);
                              showCommentsToPost(inputValue);
                        });    
      } 
      else {
            controller(`${API}/posts/${inputValue}`)
                  .catch(err => alert('There is no id'));
      }
      
})  


function createInfo(data, wrap) {
      wrap.innerHTML = '';

      let button = document.createElement('button');
      button.classList.add('comment__button');
      button.innerText = 'See coments';

      tableCreate(data, wrap, button);  
}

function showCommentsToPost(value) {
      let button = document.querySelector('.comment__button');
      button.addEventListener('click', e => {
            e.preventDefault();
            
            controller(`${API}/posts/${value}/comments`)
                  .then(data => data.forEach(element => showComents(element, container)));    
      }) 
}

function tableCreate(data, wrap, btn) {
      let table = document.createElement('table');
      let tbody = document.createElement('tbody');
      
      for (let key in data) {
          let tr = document.createElement('tr');
          let th = document.createElement('th')
          let td = document.createElement('td');
  
          th.innerText = `${key}: `;
          td.innerText = `${data[key]}`;

          tr.append(th);
          tr.append(td);
          tbody.append(tr);
      }
  
      table.append(tbody);
      table.append(btn);
      wrap.append(table); 
}

function showComents(data, wrap) {
      let comentWrap = document.createElement('div');
      comentWrap.classList.add('coment__wrap');
      
      for (let key in data) {
          let fieldWrap = document.createElement('div');
          let title = document.createElement('h5');
          let descr = document.createElement('p')
  
          fieldWrap.classList.add('keys__wrap');

          title.innerText = `${key}: `;
          descr.innerText = `${data[key]}`;

          fieldWrap.append(title);
          fieldWrap.append(descr);

          comentWrap.append(fieldWrap);
      }
      
      wrap.append(comentWrap);
      
}
