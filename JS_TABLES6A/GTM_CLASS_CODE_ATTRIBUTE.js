// GTM_CLASS_CODE_ATTRIBUTE.js

window.GTM_CLASS_CODE_ATTRIBUTE = {
  "tables": {
    "GTM_CLASS_CODE_ATTRIBUTE": {
      "columns": {
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROD_CLASS_CODE",
          "info": "The GID for the GTM product classification code that additional attributes are being added, updated, or deleted. Product Classification Code attributes are used to add extra information to a classification code. "
        },
        "ATTRIBUTE_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for the GTM product classification code attribute that is being added, updated, or deleted. "
        },
        "ATTRIBUTE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The attribute name of the GTM product classification code attribute that is being added, updated, or deleted. "
        },
        "ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The attribute value - qualified by the attribute name -  of the GTM product classification code attribute that is being added, updated, or deleted. "
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
        "ATTRIBUTE_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The attribute description of the GTM product classification code attribute that is being added, updated, or deleted. The Description field has been configured to display all associated license control and license exception description attributes."
        }
      },
      "fk_tables": []
    }
  }
};
