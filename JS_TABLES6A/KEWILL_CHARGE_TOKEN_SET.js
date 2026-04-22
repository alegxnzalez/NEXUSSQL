// KEWILL_CHARGE_TOKEN_SET.js

window.KEWILL_CHARGE_TOKEN_SET = {
  "tables": {
    "KEWILL_CHARGE_TOKEN_SET": {
      "columns": {
        "KEWILL_CHARGE_TOKEN_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "KEWILL_CHARGE_TOKEN_SET_GID is the unique identifier for the KEWILL_CHARGE_TOKEN_SET "
        },
        "KEWILL_CHARGE_TOKEN_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "KEWILL_CHARGE_TOKEN_SET_XID is the unique external identifier for the KEWILL_CHARGE_TOKEN_SET "
        },
        "KEWILL_CHARGE_TOKEN_SET_DESC": {
          "type": "VARCHAR2(400)",
          "nullable": true,
          "info": "KEWILL_CHARGE_TOKEN_SET_DESC contains the description about kewill charge token set gid. "
        },
        "ACC_CODE_FOR_UNCAT_CHARGES": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Accessorial code for uncategorized charges for a kewill charge token set is stored and it references the accessorial code table."
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
