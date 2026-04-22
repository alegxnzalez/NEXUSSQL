// DOCUMENT_DEF_OWNER_DETAILS.js

window.DOCUMENT_DEF_OWNER_DETAILS = {
  "tables": {
    "DOCUMENT_DEF_OWNER_DETAILS": {
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
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF"
        },
        "OWNER_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUERY_TYPE"
        },
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REPORT"
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "This column is created to support versioning ."
        }
      },
      "fk_tables": []
    }
  }
};
