window.onload = function lets_say_it_class() {

      document.getElementById('mybutton').onclick = function() {
        fill_cells_();

      };

      function fill_cells_() {
        var text = document.getElementById('text').value;
        var x = document.getElementById('field_x').value;
        var y = document.getElementById('field_y').value;
        var css_ = document.getElementById('css').value;


        var table_b = document.getElementsByTagName('table')[0];
        var row_length = table_b.rows.length;
        var cell_length = table_b.rows[0].cells.length;

        validateInput(text, x, y, css_);


        if (x >= row_length) {
          var e = x - row_length + 1;
          add_rows(e, table_b, cell_length);
          row_length = x;
          clicked();
        }
        if (y >= cell_length) {
          var e = y - cell_length + 1;
          var a = parseInt(row_length)+1;
          add_cells(e, table_b, a);
          clicked();
        }

        var table_b_ = document.getElementsByTagName('table')[0];
        // if (x < row_length && y < cell_length) {
        applyStyle(table_b);
        clicked();
        // }
      }

      function validateInput(text_, x_, y_, css_) {

        if (x_ != "") {
          if (isNaN(x_)) {
            console.log("INValid X number");
            alert("X is Not number");
            return false;
          } else {
            console.log("Valid number");
            return true;
          }
        }
        if (y_ != "") {
          if (isNaN(y_)) {
            alert("Y is Not number");
            console.log("INValid Y number");
            return false;
          } else {
            console.log("Valid number");
            return true;
          }
        }

        if (x == "" && y == "") {
          alert("Fields X cannot be empty!");
          return false;
        } else if (y == "") {
          alert("Fields Y cannot be empty!");
          return false;
        } else if (x == "") {
          alert("Fields X and Y cannot be empty!");
          return false;
        } else if (text_ == "") {
          alert("Text Field is empty. Please fill in it next time!");
          return true;
        } else if (css_ == "") {
          alert("CSS Field is empty. Please fill in it next time!");
          return true;
        } else {
          return true;
        }
      }

      function add_rows(new_rows_, table_, column_) {
        var j;
        for (j = 0; j < new_rows_; j++) {
          var row_n_ = table_.insertRow(-1);
          var i;
          var cell_n_;
          for (i = 0; i < column_; i++) {
            cell_n_ = row_n_.insertCell(0);
          }
        }
      }

      function add_cells(new_cells_, table_, rows_) {
        var i;
        var j;


        for (i = 0; i < rows_; i++) {
          for (j = 0; j < new_cells_; j++) {
            var temp_r = table_.rows[i];
            var temp_c = temp_r.insertCell(-1);
          }

        }
      }

      function applyStyle(table_) {


        var text_ = document.getElementById('text').value;
        var x_ = document.getElementById('field_x').value;
        var y_ = document.getElementById('field_y').value;
        var css_ = document.getElementById('css').value;

        var selected_cell = table_.rows[x_].cells;
        selected_cell[y_].innerHTML = text_;
        selected_cell[y_].style = css_;
//        document.getElementById('field_x').value = "";
//        document.getElementById('field_y').value = "";
//        document.getElementById('text').value = "";
      }

      function clicked(){
        var tbl = document.getElementsByTagName('table')[0];
        if (tbl != null) {
          for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
              tbl.rows[i].cells[j].onclick = function() {
                this.innerHTML = "";
                this.removeAttribute("style");
              }
            }
          }
        }
      }

    }
