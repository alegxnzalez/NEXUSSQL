// OBJECT_DOCUMENT_SET.js

window.OBJECT_DOCUMENT_SET = {
  "tables": {
    "OBJECT_DOCUMENT_SET": {
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
        "DOCUMENT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_SET",
          "info": "ID of the document set. "
        },
        "OWNER_OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The ID of owner object to which the document set is assigned. "
        },
        "OWNER_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "The data query type which the owner object belongs to."
        }
      },
      "fk_tables": [
        "OBJECT_DOCUMENT_SET_SUBSC"
      ]
    }
  }
};
