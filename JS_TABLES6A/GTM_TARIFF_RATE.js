// GTM_TARIFF_RATE.js

window.GTM_TARIFF_RATE = {
  "tables": {
    "GTM_TARIFF_RATE": {
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
        "GTM_TARIFF_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TARIFF_CODE",
          "info": "Contains the identifier of the tariff code. "
        },
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the product classification code gid of the related classification code. "
        },
        "ADDVALOREM_RATE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Contains the rate expressed as percentage. "
        },
        "PER_UNIT_CHARGE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Contains the per unit charge value. "
        },
        "UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Contains the  UOM code to use with per unit charge. "
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Contains the product classification type."
        }
      },
      "fk_tables": []
    }
  }
};
