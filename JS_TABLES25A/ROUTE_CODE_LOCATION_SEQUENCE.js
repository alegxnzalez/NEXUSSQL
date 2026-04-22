// ROUTE_CODE_LOCATION_SEQUENCE.js

window.ROUTE_CODE_LOCATION_SEQUENCE = {
  "tables": {
    "ROUTE_CODE_LOCATION_SEQUENCE": {
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
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_CODE"
        },
        "SEQ_NUM": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "Stop sequence number for the unit train."
        },
        "STOP_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION"
        }
      },
      "fk_tables": []
    }
  }
};
