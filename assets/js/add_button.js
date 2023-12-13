document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const formContainer = document.getElementById("form-container");
  
    addButton.addEventListener("click", function () {
      const row = document.createElement("div");
      row.className = "row";
      row.style.paddingTop = "30px"; // Add padding-top
  
      const columns = [
        createColumn("Item Details", "text", ""),
        createColumn("Reimbursement Type", "select", ""),
        createColumn("Amount", "number", "₹ 00.00"),
        createColumn("Select date to -", "date", ""),
        createColumn("Select date from -", "date", ""),
        createColumn("Attach Bill -", "file", "")
      ];
  
      columns.forEach((column) => row.appendChild(column));
      formContainer.insertBefore(row, addButton);
    });
  
    function createColumn(labelText, inputType, placeholder) {
      const col = document.createElement("div");
      col.className = "col-md-2";
      const label = document.createElement("h6");
      label.innerText = labelText;
      const input = inputType === "select" ? createSelectElement() : document.createElement("input");
      if (inputType !== "select") {
        input.type = inputType;
        input.className = "form-control";
        input.placeholder = placeholder;
      }
      col.appendChild(label);
      col.appendChild(input);
      return col;
    }
  
    function createSelectElement() {
      const select = document.createElement("select");
      select.className = "form-select";
      select.setAttribute("aria-label", "Reimbursement Type");
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.setAttribute("disabled", "");
      defaultOption.setAttribute("selected", "");
      defaultOption.setAttribute("hidden", "");
      defaultOption.innerText = "Select";
      select.appendChild(defaultOption);
      for (let i = 1; i <= 3; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.innerText = "Option " + i;
        select.appendChild(option);
      }
      return select;
    }
  });
  