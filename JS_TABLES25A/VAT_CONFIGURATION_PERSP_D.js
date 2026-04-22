// VAT_CONFIGURATION_PERSP_D.js

window.VAT_CONFIGURATION_PERSP_D = {
  "tables": {
    "VAT_CONFIGURATION_PERSP_D": {
      "columns": {
        "VAT_CONFIGURATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_CONFIGURATION_PERSPECTIVE"
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_CONFIGURATION_PERSPECTIVE"
        },
        "VAT_OUTCOME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_OUTCOME"
        },
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VAT_CODE"
        },
        "VAT_COUNTRY_SOURCE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "SHIPMENT",
            "ORDER",
            "CUSTOMER",
            "SERVPROV",
            "NONE"
          ]
        },
        "PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "If a conflict arises when calculating VAT on an invoice line item, highest PRIORITY (lowest number) wins."
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
