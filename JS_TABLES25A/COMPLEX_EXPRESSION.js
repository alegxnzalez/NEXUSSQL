// COMPLEX_EXPRESSION.js

window.COMPLEX_EXPRESSION = {
  "tables": {
    "COMPLEX_EXPRESSION": {
      "columns": {
        "COMPLEX_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "COMPLEX_EXPRESSION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LOGIC_OPERATOR": {
          "type": "VARCHAR2(3)",
          "nullable": false,
          "values": [
            "AND",
            "OR"
          ],
          "info": "Logic operator column would hold AND/OR. Based on this operator, either all the records in detail would be anded (or) ored.  So, Logic operator would take values AND, OR."
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": [
        "COMPLEX_EXPRESSION_DETAIL"
      ]
    }
  }
};
