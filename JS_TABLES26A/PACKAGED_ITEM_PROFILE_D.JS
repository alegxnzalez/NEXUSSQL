// PACKAGED_ITEM_PROFILE_D.js

window.PACKAGED_ITEM_PROFILE_D = {
  "tables": {
    "PACKAGED_ITEM_PROFILE_D": {
      "columns": {
        "PACKAGED_ITEM_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PACKAGED_ITEM_PROFILE"
},
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PACKAGED_ITEM"
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