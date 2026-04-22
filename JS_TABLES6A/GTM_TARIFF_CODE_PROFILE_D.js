// GTM_TARIFF_CODE_PROFILE_D.js

window.GTM_TARIFF_CODE_PROFILE_D = {
  "tables": {
    "GTM_TARIFF_CODE_PROFILE_D": {
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
          "foreign_key": "GTM_TARIFF_CODE_PROFILE",
          "info": "Tariff Code Profile GID. "
        },
        "GTM_TARIFF_CODE": {
          "type": "VARCHAR2(80)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the text for the short name of the tariff code."
        }
      },
      "fk_tables": []
    }
  }
};
