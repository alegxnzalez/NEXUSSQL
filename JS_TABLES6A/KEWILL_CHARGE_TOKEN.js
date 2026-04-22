// KEWILL_CHARGE_TOKEN.js

window.KEWILL_CHARGE_TOKEN = {
  "tables": {
    "KEWILL_CHARGE_TOKEN": {
      "columns": {
        "KEWILL_CHARGE_TOKEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "KEWILLCHARGE_TOKEN_GID is the unique identifier for the KEWILL_CHARGE_TOKEN "
        },
        "KEWILL_CHARGE_TOKEN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "KEWILL_CHARGE_TOKEN_XID is the unique external identifier for the KEWILL_CHARGE_TOKEN "
        },
        "KEWILL_CHARGE_TOKEN_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "KEWILL_CHARGE_TOKEN contains the name of the token. "
        },
        "KEWILL_CHARGE_TOKEN_DESC": {
          "type": "VARCHAR2(400)",
          "nullable": true,
          "info": "KEWILL_CHARGE_TOKEN_DESC contains the description about kewill charge token."
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
        "KWLL_CHG_TKN_ACCCODE_JOIN"
      ]
    }
  }
};
