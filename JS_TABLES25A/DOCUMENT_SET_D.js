// DOCUMENT_SET_D.js

window.DOCUMENT_SET_D = {
  "tables": {
    "DOCUMENT_SET_D": {
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
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "The document type to find the document of the owner object that will be sent as part of document set. A document type with owner data query type as the document set's owner data query type can be provided. "
        },
        "ALLOW_MULTIPLE_DOCUMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This column determines whether to send all documents of a document type or only one latest document while sending the Document Set."
        }
      },
      "fk_tables": []
    }
  }
};
