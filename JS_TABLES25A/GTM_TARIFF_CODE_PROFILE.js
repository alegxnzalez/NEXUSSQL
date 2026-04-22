// GTM_TARIFF_CODE_PROFILE.js

window.GTM_TARIFF_CODE_PROFILE = {
  "tables": {
    "GTM_TARIFF_CODE_PROFILE": {
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
        "GTM_TARIFF_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Tariff Code Profile GID. "
        },
        "GTM_TARIFF_CODE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Tariff Code Profile XID. "
        },
        "GTM_TARIFF_CODE_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Tariff Code Profile Name. "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Is Tariff Code Profile compatible. "
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product classification type GID such as Schedule B or HTS-US."
        }
      },
      "fk_tables": [
        "GTM_TARIFF_CODE_PROFILE_D"
      ]
    }
  }
};
