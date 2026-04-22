// BI_APP.js

window.BI_APP = {
  "tables": {
    "BI_APP": {
      "columns": {
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
        "BI_APP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BI_APP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "BI_APP_DESC": {
          "type": "VARCHAR2(128)",
          "nullable": false
        }
      },
      "fk_tables": [
        "GL_USER_BI_APP"
      ]
    }
  }
};
