// GLOBAL_SEARCH_ACCESS.js

window.GLOBAL_SEARCH_ACCESS = {
  "tables": {
    "GLOBAL_SEARCH_ACCESS": {
      "description": "This table is used to configure objects for Global Search.",
      "columns": {
        "USER_ACCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "USER_ACCESS"
},
        "FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FINDER_SET"
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