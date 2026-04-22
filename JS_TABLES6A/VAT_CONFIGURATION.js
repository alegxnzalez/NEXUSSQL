// VAT_CONFIGURATION.js

window.VAT_CONFIGURATION = {
  "tables": {
    "VAT_CONFIGURATION": {
      "columns": {
        "VAT_CONFIGURATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "VAT_CONFIGURATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "VAT_CONFIGURATION_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "TAX_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "EURO_VAT",
            "PROVINCIAL"
          ],
          "info": "Indicates the type of tax for this configuration such as European VAT or Provincial Tax"
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
      "fk_tables": [
        "VAT_CONFIGURATION_PERSPECTIVE",
        "VAT_PROVINCIAL_CNFG_PERSP"
      ]
    }
  }
};
