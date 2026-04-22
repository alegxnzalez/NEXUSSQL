// DOCUMENT_DOC_CONTENT_JOIN.js

window.DOCUMENT_DOC_CONTENT_JOIN = {
  "tables": {
    "DOCUMENT_DOC_CONTENT_JOIN": {
      "columns": {
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT"
        },
        "DOCUMENT_CONTENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "NOTE: This column should not have an FK to OCUMENT_CONTENT. The DOCUMENT_CONTENT table may be stored in a different instance or schema."
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
