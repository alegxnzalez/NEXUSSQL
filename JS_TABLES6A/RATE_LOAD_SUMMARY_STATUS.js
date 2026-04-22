// RATE_LOAD_SUMMARY_STATUS.js

window.RATE_LOAD_SUMMARY_STATUS = {
  "tables": {
    "RATE_LOAD_SUMMARY_STATUS": {
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
        "RATE_LOAD_SUMMARY_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_LOAD_SUMMARY"
        },
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_VALUE"
        },
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STATUS_VALUE",
          "info": "Reference to status value GID from status value."
        }
      },
      "fk_tables": []
    }
  }
};
