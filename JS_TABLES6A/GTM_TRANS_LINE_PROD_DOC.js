// GTM_TRANS_LINE_PROD_DOC.js

window.GTM_TRANS_LINE_PROD_DOC = {
  "tables": {
    "GTM_TRANS_LINE_PROD_DOC": {
      "columns": {
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line. "
        },
        "PROD_DOC_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number generated for the primary key. "
        },
        "GTM_PROD_DOC_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_DOC_TYPE",
          "info": "The GID for the GTM trade transaction line produced document type. "
        },
        "PROD_DOC_REF_NUMBER": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The document reference number for the produced document. "
        },
        "PROD_DOC_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The document date for the produced document. "
        },
        "PROD_DOC_VALIDATION_LOC": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location where the produced document is validated. "
        },
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
        "ARCHIVE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The archive location of the produced document. It is a foreign key to LOCATION table. "
        },
        "ARCHIVE_FORMAT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The archive format of the produced document. "
        },
        "ARCHIVE_DETAIL": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The archive details of the produced document."
        }
      },
      "fk_tables": []
    }
  }
};
