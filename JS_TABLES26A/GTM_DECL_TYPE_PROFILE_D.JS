// GTM_DECL_TYPE_PROFILE_D.js

window.GTM_DECL_TYPE_PROFILE_D = {
  "tables": {
    "GTM_DECL_TYPE_PROFILE_D": {
      "description": "Declaration Type Profile Details",
      "columns": {
        "GTM_DECL_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DECL_TYPE_PROFILE",
          "info": "Declaration Type Profile GID"
},
        "GTM_DECLARATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DECLARATION_TYPE",
          "info": "Declaration Type GID"
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