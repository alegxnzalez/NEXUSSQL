// E_KPI.js

window.E_KPI = {
  "tables": {
    "E_KPI": {
      "columns": {
        "KPI_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "KPI_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        },
        "KPI_TARGET_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "KPI_FORMULA": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": [
        "E_KPI_TARGET_VALUE_TYPE"
      ]
    }
  }
};
