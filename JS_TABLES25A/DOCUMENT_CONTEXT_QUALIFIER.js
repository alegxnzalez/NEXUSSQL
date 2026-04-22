// DOCUMENT_CONTEXT_QUALIFIER.js

window.DOCUMENT_CONTEXT_QUALIFIER = {
  "tables": {
    "DOCUMENT_CONTEXT_QUALIFIER": {
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
        "DOCUMENT_CONTEXT_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Represents document context qualifier. "
        },
        "DOCUMENT_CONTEXT_QUAL_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Represents the description of document context qualifier. "
        },
        "DOCUMENT_CONTEXT_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Represents the xid of document context qualifier."
        }
      },
      "fk_tables": [
        "DOCUMENT_CONTEXT"
      ]
    }
  }
};
