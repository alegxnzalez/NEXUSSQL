// STATUS_TYPE_FILTER_ACCESS.js

window.STATUS_TYPE_FILTER_ACCESS = {
  "tables": {
    "STATUS_TYPE_FILTER_ACCESS": {
      "columns": {
        "USER_ACCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "User Access unique identifier. "
        },
        "STATUS_TYPE_FILTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_TYPE_FILTER",
          "info": "Status Type Filter unique identifier."
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
