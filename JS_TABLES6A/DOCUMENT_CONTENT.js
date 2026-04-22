// DOCUMENT_CONTENT.js

window.DOCUMENT_CONTENT = {
  "tables": {
    "DOCUMENT_CONTENT": {
      "columns": {
        "DOCUMENT_CONTENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BLOB_CONTENT": {
          "type": "BLOB",
          "nullable": true
        },
        "CLOB_CONTENT": {
          "type": "CLOB",
          "nullable": true
        },
        "IS_AWAITING_VIRUS_CHECK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If true, the content needs to be virus checked. The content will be suppressed from the UI unless the user is registered to receive unchecked content."
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
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": []
    }
  }
};
