// TRANSPORTATION_FILTER.js

window.TRANSPORTATION_FILTER = {
  "tables": {
    "TRANSPORTATION_FILTER": {
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
        "TRANSPORTATION_FILTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "TRANSPORTATION_FILTER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "FILTER_CRITERIA": {
          "type": "CLOB",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
