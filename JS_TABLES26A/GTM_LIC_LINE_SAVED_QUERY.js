// GTM_LIC_LINE_SAVED_QUERY.js

window.GTM_LIC_LINE_SAVED_QUERY = {
  "tables": {
    "GTM_LIC_LINE_SAVED_QUERY": {
      "description": "License line saved queries used for license matching.",
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
        "LICENSE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_LICENSE_LINE",
          "info": "License Line ID"
},
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SAVED_QUERY",
          "info": "Saved Query ID"
}
      },
      "fk_tables": []
    }
  }
};