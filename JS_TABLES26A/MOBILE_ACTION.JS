// MOBILE_ACTION.js

window.MOBILE_ACTION = {
  "tables": {
    "MOBILE_ACTION": {
      "description": "mobile_action table represents an action a user can perform in the mobile app.",
      "columns": {
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
},
        "MOBILE_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "MOBILE_ACTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "MOBILE_ACTION_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(300)",
          "nullable": true
}
      },
      "fk_tables": [
        "MOBILE_ACTION_ACCESS"
]
    }
  }
};