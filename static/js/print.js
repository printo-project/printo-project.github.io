var data = {
  "header": {
    "customer_name": {
      "marginLeft": '20px',
      "marginTop": '20px',
      "width": '50px',
      "height": '20px',
      "content": "Burak Sayın"
    },
    "note": {
      "marginLeft": '100px',
      "marginTop": '40px',
      "width": '250px',
      "height": '120px',
      "content": "Sayınbu adamın önde gidenidir, bu fatura benden ona hediye olsun."
    },
    "date": {
      "marginLeft": '300px',
      "marginTop": '20px',
      "width": '100px',
      "height": '20px',
      "content": "02.06.2017"
    },
  },
  "body": {
    "date": {
      "marginLeft": '300px',
      "marginTop": '20px',
      "width": '100px',
      "height": '20px',
      "content": "02.06.2017"
    },
  }
};

function constructPage(pageData) {
  var element = {};
  var div;

  const header = pageData.header;
  const sheet = document.getElementById('sheet-body');

  for (var key in header) {
    if (header.hasOwnProperty(key)) {
      element = header[key];
      div = createElementDiv(element);
      sheet.appendChild(div);
    }
  }
}

function calculateProductHeight(body) {

}

/**
 * Create a div that contains the element information.
 * @param {*Object} element 
 */
function createElementDiv(element) {
  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.display = 'inline-block';
  div.style.textOverflow = 'clip';
  //div.style.whiteSpace = 'nowrap';
  div.style.overflow = 'hidden';
  
  div.style.marginLeft = element.marginLeft;
  div.style.marginTop = element.marginTop;
  div.style.width = element.width;
  div.style.height = element.height;
  div.textContent = element.content;

  return div;
}

constructPage(data);

/**
  client_id                | int(10) unsigned | NO   |     | NULL    |                |
| creator_id               | int(10) unsigned | NO   |     | NULL    |                |
| customer_id              | int(10) unsigned | NO   |     | NULL    |                |
| account_action_type_id   | int(10) unsigned | NO   |     | NULL    |                |
| currency_id              | int(10) unsigned | NO   |     | NULL    |                |
| project_id               | int(11)          | YES  |     | NULL    |                |
| description              | text             | YES  |     | NULL    |                |
| created_at               | timestamp        | YES  |     | NULL    |                |
| updated_at               | timestamp        | YES  |     | NULL    |                |
| deleted_at               | timestamp        | YES  |     | NULL    |                |
| address_id               | int(10) unsigned | NO   |     | NULL    |                |
| account_action_status_id | int(11)          | NO   |     | 1       |                |
| due_date                 | date             | YES  |     | NULL    |                |
| serial_no                | varchar(191)     | YES  |     | NULL    |                |
| employee_id              | varchar(191)     | YES  |     | NULL    |                |
| is_expense               | tinyint(1)       | YES  |     | NULL    |                |
| referrer_id              | int(10) unsigned | YES  |     | NULL    |                |
| amount                   | double(8,2)      | NO   |     | 0.00    |                |
| is_closed
 * 
 */