// STOWAGE_MODE_PREFERENCE.js

window.STOWAGE_MODE_PREFERENCE = {
  "tables": {
    "STOWAGE_MODE_PREFERENCE": {
      "columns": {
        "STOWAGE_MODE_PREF_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STOWAGE_MODE_PREF_RULE"
},
        "SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "STOWAGE_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STOWAGE_MODE"
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