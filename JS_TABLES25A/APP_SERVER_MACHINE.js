// APP_SERVER_MACHINE.js

window.APP_SERVER_MACHINE = {
  "tables": {
    "APP_SERVER_MACHINE": {
      "columns": {
        "APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "APP_SERVER"
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "APP_MACHINE"
        },
        "LOAD_BALANCE_WEIGHT": {
          "type": "NUMBER(4)",
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
        }
      },
      "fk_tables": []
    }
  }
};
