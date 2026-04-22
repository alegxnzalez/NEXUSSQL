// COST_CATEGORY_SET.js

window.COST_CATEGORY_SET = {
  "tables": {
    "COST_CATEGORY_SET": {
      "columns": {
        "COST_CATEGORY_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "COST_CATEGORY_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "COST_CATEGORY_SET_DESC": {
          "type": "VARCHAR2(250)",
          "nullable": true
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
        "COST_CATEGORY_SET_D"
      ]
    }
  }
};
