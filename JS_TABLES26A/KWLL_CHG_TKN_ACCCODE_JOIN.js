// KWLL_CHG_TKN_ACCCODE_JOIN.js

window.KWLL_CHG_TKN_ACCCODE_JOIN = {
  "tables": {
    "KWLL_CHG_TKN_ACCCODE_JOIN": {
      "columns": {
        "KEWILL_CHARGE_TOKEN_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "KEWILL_CHARGE_TOKEN_SET",
          "info": "Kewill_charge_token_set_gid is the unique identifier for the KEWILL_CHARGE_TOKEN_SET."
},
        "KEWILL_CHARGE_TOKEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "KEWILL_CHARGE_TOKEN",
          "info": "Kewill_charge_token_gid is the unique identifier for KEWILL_CHARGE_TOKEN."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Accessorial code mapped to a kewill charge token is stored."
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