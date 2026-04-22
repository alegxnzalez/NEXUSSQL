// GTM_CONTENT_SOURCE_DATA_TYPE.js

window.GTM_CONTENT_SOURCE_DATA_TYPE = {
  "tables": {
    "GTM_CONTENT_SOURCE_DATA_TYPE": {
      "columns": {
        "GTM_CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTENT_SOURCE",
          "info": "Specifies the unique identifier for the GTM Content Source. "
        },
        "SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "SOURCE_DATA_TYPE": {
          "type": "VARCHAR2(40)",
          "nullable": false,
          "info": "Specifies the content source data type identifier. "
        },
        "GTM_CONTENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTENT_TYPE",
          "info": "Specifies the gtm content type identifier. "
        },
        "SOURCE_COUNTRY_ID": {
          "type": "VARCHAR2(3)",
          "nullable": true
        },
        "IS_SUPPORTED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the content source data type is supported in GTM for data retrieval."
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
