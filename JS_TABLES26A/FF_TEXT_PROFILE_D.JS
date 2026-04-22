// FF_TEXT_PROFILE_D.js

window.FF_TEXT_PROFILE_D = {
  "tables": {
    "FF_TEXT_PROFILE_D": {
      "columns": {
        "FF_TEXT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FF_TEXT_PROFILE"
},
        "TEXT_VALUE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "key_value": true
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