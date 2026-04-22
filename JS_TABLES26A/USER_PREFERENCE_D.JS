// USER_PREFERENCE_D.js

window.USER_PREFERENCE_D = {
  "tables": {
    "USER_PREFERENCE_D": {
      "columns": {
        "USER_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "USER_PREFERENCE"
},
        "PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PREFERENCE"
},
        "USER_PREFERENCE_VALUE": {
          "type": "VARCHAR2(512)",
          "nullable": true
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