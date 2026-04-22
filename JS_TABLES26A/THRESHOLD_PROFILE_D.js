// THRESHOLD_PROFILE_D.js

window.THRESHOLD_PROFILE_D = {
  "tables": {
    "THRESHOLD_PROFILE_D": {
      "columns": {
        "THRESHOLD_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "THRESHOLD_PROFILE"
},
        "THRESHOLD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "THRESHOLD"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": true
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