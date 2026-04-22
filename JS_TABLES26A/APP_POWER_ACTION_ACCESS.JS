// APP_POWER_ACTION_ACCESS.js

window.APP_POWER_ACTION_ACCESS = {
  "tables": {
    "APP_POWER_ACTION_ACCESS": {
      "description": "Stores information of the user access and the related power action IDs.",
      "columns": {
        "USER_ACCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "USER_ACCESS",
          "info": "The unique identifier of user access id."
},
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "APP_ACTION",
          "info": "The unique identifier of app action id."
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