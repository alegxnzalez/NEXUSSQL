// GTM_DECL_S_TYPE.js

window.GTM_DECL_S_TYPE = {
  "tables": {
    "GTM_DECL_S_TYPE": {
      "description": "The sub type of declaration applicable for custom filing.",
      "columns": {
        "GTM_DECL_S_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid"
},
        "GTM_DECL_S_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Declaration Sub Type ID"
},
        "GTM_DECL_S_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Declaration Sub Type Code"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Declaration Sub Type Description"
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
},
        "GTM_DECL_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DECL_TYPE_PROFILE",
          "info": "declaration profile type gid"
}
      },
      "fk_tables": [
        "GTM_ENTRY_EXIT_PROFILE",
        "GTM_TIP_INVENTORY",
        "GTM_TIP_INV_MOVEMENT",
        "GTM_TRANSACTION"
]
    }
  }
};