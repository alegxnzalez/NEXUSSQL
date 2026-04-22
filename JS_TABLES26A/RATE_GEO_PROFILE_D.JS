// RATE_GEO_PROFILE_D.js

window.RATE_GEO_PROFILE_D = {
  "tables": {
    "RATE_GEO_PROFILE_D": {
      "columns": {
        "RATE_GEO_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_PROFILE",
          "info": "Id of the rate geo profile"
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO",
          "info": "Id of the rate geo"
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