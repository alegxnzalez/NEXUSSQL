// AUTO_SEC_RES_PROFILE_D.js

window.AUTO_SEC_RES_PROFILE_D = {
  "tables": {
    "AUTO_SEC_RES_PROFILE_D": {
      "columns": {
        "AUTO_SEC_RES_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_SEC_RES_PROFILE"
},
        "AUTO_SEC_RES_CRITERION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_SEC_RES_CRITERION"
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