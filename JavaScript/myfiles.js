function btn_clic(){
    let btn = document.querySelector('.btn-menu');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search-alt');

btn.onclick = function() {
    sidebar.classList.toggle('active');
}
searchBtn.onclick = function() {
    sidebar.classList.toggle('active');
}

}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uploadButton').addEventListener('click', handleFileUpload);
    document.getElementById('searchButton').addEventListener('click', handleSearchButtonClick);
    document.getElementById('xmlButton').addEventListener('click', handleOpenXMLButtonClick);
    document.getElementById('jsonButton').addEventListener('click', handleOpenJSONButtonClick);
});

function handleFileUpload() {
    var files = document.getElementById('fileInput').files;
    var fileList = document.getElementById('fileList');

    for (var i = 0; i < files.length; i++) {
        var listItem = document.createElement('li');
        var fileName = files[i].name;

        listItem.innerHTML = `
            <img class="file-icon" src="file-icon.png" alt="File Icon">
            <span>${fileName}</span>
            <button class="favorite-button" data-file="${fileName}">Agregar a Favoritos</button>
        `;

        fileList.appendChild(listItem);
    }

    addFavoriteButtonListeners();
}

function handleFileMouseOver(event) {
    var target = event.target;
    if (target.tagName === 'LI') {
        var favoriteButton = target.querySelector('.favorite-button');
        if (favoriteButton) {
            favoriteButton.style.display = 'inline-block';
        }
    }
}

function handleFileMouseOut(event) {
    var target = event.target;
    if (target.tagName === 'LI') {
        var favoriteButton = target.querySelector('.favorite-button');
        if (favoriteButton) {
            favoriteButton.style.display = 'none';
        }
    }
}

function addFavoriteButtonListeners() {
    var favoriteButtons = document.getElementsByClassName('favorite-button');
    for (var i = 0; i < favoriteButtons.length; i++) {
        favoriteButtons[i].addEventListener('click', handleFavoriteButtonClick);
    }
}

function handleFavoriteButtonClick(event) {
    var fileName = event.target.getAttribute('data-file');
    alert('El archivo "' + fileName + '" se ha agregado a favoritos.');
}




function mostrarTablaXML() {
    var xmlString = `<?xml version="1.0" encoding="UTF-8"?>
    <document-management>
      <document>
        <id>1</id>
        <title>Documento 1</title>
        <author>John Doe</author>
        <date>2023-06-10</date>
        <description>Descripción del documento 1.</description>
        <file>documento1.pdf</file>
      </document>
      <document>
        <id>2</id>
        <title>Documento 2</title>
        <author>Jane Smith</author>
        <date>2023-06-09</date>
        <description>Descripción del documento 2.</description>
        <file>documento2.docx</file>
      </document>
      <document>
        <id>3</id>
        <title>Documento 3</title>
        <author>Michael Johnson</author>
        <date>2023-06-08</date>
        <description>Descripción del documento 3.</description>
        <file>documento3.xlsx</file>
      </document>
    </document-management>`;

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
    var documents = xmlDoc.getElementsByTagName("document");

    var tabla = document.getElementById("tabla-documentos");
    var tbody = tabla.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    for (var i = 0; i < documents.length; i++) {
      var id = documents[i].getElementsByTagName("id")[0].textContent;
      var title = documents[i].getElementsByTagName("title")[0].textContent;
      var author = documents[i].getElementsByTagName("author")[0].textContent;
      var date = documents[i].getElementsByTagName("date")[0].textContent;
      var description = documents[i].getElementsByTagName("description")[0].textContent;
      var file = documents[i].getElementsByTagName("file")[0].textContent;

      var row = document.createElement("tr");
      row.innerHTML = "<td>" + id + "</td>" +
                      "<td>" + title + "</td>" +
                      "<td>" + author + "</td>" +
                      "<td>" + date + "</td>" +
                      "<td>" + description + "</td>" +
                      "<td>" + file + "</td>";

      tbody.appendChild(row);
    }
  }
  








  function mostrarTablaJSON() {
    var json = [
      {
        "id": 1,
        "title": "Documento 1",
        "author": "John Doe",
        "date": "2023-06-10",
        "description": "Descripción del documento 1.",
        "file": "documento1.pdf"
      },
      {
        "id": 2,
        "title": "Documento 2",
        "author": "Jane Smith",
        "date": "2023-06-09",
        "description": "Descripción del documento 2.",
        "file": "documento2.docx"
      },
      {
        "id": 3,
        "title": "Documento 3",
        "author": "Michael Johnson",
        "date": "2023-06-08",
        "description": "Descripción del documento 3.",
        "file": "documento3.xlsx"
      }
    ];

    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    var headers = ["ID", "Título", "Autor", "Fecha", "Descripción", "Archivo"];

    headers.forEach(function(header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    json.forEach(function(documento) {
      var row = document.createElement("tr");

      var idCell = document.createElement("td");
      idCell.textContent = documento.id;
      row.appendChild(idCell);

      var titleCell = document.createElement("td");
      titleCell.textContent = documento.title;
      row.appendChild(titleCell);

      var authorCell = document.createElement("td");
      authorCell.textContent = documento.author;
      row.appendChild(authorCell);

      var dateCell = document.createElement("td");
      dateCell.textContent = documento.date;
      row.appendChild(dateCell);

      var descriptionCell = document.createElement("td");
      descriptionCell.textContent = documento.description;
      row.appendChild(descriptionCell);

      var fileCell = document.createElement("td");
      var link = document.createElement("a");
      link.href = documento.file;
      link.textContent = "Descargar";
      fileCell.appendChild(link);
      row.appendChild(fileCell);

      table.appendChild(row);
    });

    var tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
  }