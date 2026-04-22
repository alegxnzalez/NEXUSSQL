// BULK_RATING.js

window.BULK_RATING = {
  "tables": {
    "BULK_RATING": {
      "columns": {
        "BULK_RATING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BULK_RATING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "NUM_OF_SHIPMENTS_SELECTED": {
          "type": "NUMBER()",
          "nullable": false
        },
        "NUM_OF_SHIPMENTS_RATED": {
          "type": "NUMBER()",
          "nullable": false
        },
        "NUM_OF_SHIPMENTS_DISTANCED": {
          "type": "NUMBER()",
          "nullable": false
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE"
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
