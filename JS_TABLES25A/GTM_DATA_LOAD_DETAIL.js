// GTM_DATA_LOAD_DETAIL.js

window.GTM_DATA_LOAD_DETAIL = {
  "tables": {
    "GTM_DATA_LOAD_DETAIL": {
      "columns": {
        "GTM_DATA_LOAD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DATA_LOAD"
        },
        "SEQUENCE_NO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true
        },
        "MESSAGE_CODE": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Stores the table name of the CSV which was uploaded. "
        },
        "MESSAGE_TEXT": {
          "type": "CLOB",
          "nullable": true
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
        "CSV_UPLOAD_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The status of CSV upload. If there are no errors, SUCCESS is saved, else FAILURE."
        }
      },
      "fk_tables": []
    }
  }
};
