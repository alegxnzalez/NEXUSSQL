// OR_OM_MATCH_STATE.js

window.OR_OM_MATCH_STATE = {
  "tables": {
    "OR_OM_MATCH_STATE": {
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
        "MATCH_KEY": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "An unique string which is used to match Order Release and Order Movement"
},
        "ORDER_MOVEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};