// SHIPMENT_REQDOC_DOC_REVIEW.js

window.SHIPMENT_REQDOC_DOC_REVIEW = {
  "tables": {
    "SHIPMENT_REQDOC_DOC_REVIEW": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REQDOC_DOC",
          "info": "The shipment GID. "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REQDOC_DOC",
          "info": "The required document type. "
        },
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REQDOC_DOC",
          "info": "The document GID. "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The reviewer GID. "
        },
        "STATE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "PENDING",
            "ACCEPTED",
            "DENIED"
          ],
          "info": "The review state. "
        },
        "COMMENTS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Comments added by the reviewer."
        }
      },
      "fk_tables": []
    }
  }
};
