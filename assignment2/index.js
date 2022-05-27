function getData() {
    const requestURL = './data.json';
    const request = new Request(requestURL);

    fetch(request)
        .then(function (response) {
            return response.json();
        })
        .then(function (tableData) {
            display(tableData);
        });
}

window.onload = getData();

function display(tableData) {
    var columns = tableData[0].length;
    var rows = tableData.length;
    var table = document.getElementById('tab');

    //For headers
    var head = document.createElement('thead');
    head.id = "head";
    var head_row = document.createElement('tr');
    head_row.id = "head_row";
    head.appendChild(head_row);
    table.appendChild(head);

    for (let i = 0; i < columns; i++) {
        var data = tableData[0][i];
        var col = document.createElement('th');

        if (typeof (data) == "string") {
            col.innerHTML = data;
            head_row.appendChild(col);
        }
        else {
            var col_main = document.createElement('th');
            col.innerHTML = data[0];
            var inner_row = document.createElement('th');
            col_main.appendChild(col)
            col_main.appendChild(inner_row);

            col_main.style.columnSpan = "2";
            col_main.style.display = "flex";
            col_main.style.flexDirection = "column";

            var len = data.length - 1;
            for (let j = 1; j < data.length; j++) {
                var inner_col = document.createElement('th');
                inner_col.style.border = "none";
                inner_col.innerHTML = data[j];
                inner_col.style.width = `${100 / (len - 1)}%`;
                inner_row.appendChild(inner_col);
            }


            inner_row.style.columnSpan = "3";
            inner_row.style.border = "none";
            col.style.border = "none";
            col_main.style.border = "none";

            head_row.appendChild(col_main);
        }
    }

    //For data

    for (let i = 1; i < rows; i++) {
        var row = document.createElement('tr');


        for (let j = 0; j < columns; j++) {
            var data = tableData[i][j];


            if (typeof (data) != "object") {
                var col = document.createElement('td');
                col.innerHTML = data;
                row.appendChild(col);
            }
            else {
                var len = data.length - 1;

                var col_main = document.createElement('td');
                for (let k = 1; k < data.length; k++) {

                    var col = document.createElement('td');
                    col.innerHTML = data[k];

                    col.style.border = "none";
                    col.style.width = `${100 / (len - 1)}%`;

                    col_main.appendChild(col);
                }



                col_main.style.colummnSpan = len;


                row.appendChild(col_main);
            }
        }

        table.appendChild(row);
    }
}
