// SAVED_QUERY_SORT_ORDER.js

window.SAVED_QUERY_SORT_ORDER = {
  "tables": {
    "SAVED_QUERY_SORT_ORDER": {
      "columns": {
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SAVED_QUERY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SORT_VALUE": {
          "type": "VARCHAR2(301)",
          "nullable": false,
          "key_value": true
        },
        "SORT_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "Determines the sort order of the associated saved query"
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
