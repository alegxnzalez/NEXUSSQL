// GTM_PROCEDURE_DETAIL.js

window.GTM_PROCEDURE_DETAIL = {
  "tables": {
    "GTM_PROCEDURE_DETAIL": {
      "description": "Customs Procedure Details associated with Customs Filing",
      "columns": {
        "GTM_PROCEDURE_DETAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Procedure Detail GID"
},
        "GTM_PROCEDURE_DETAIL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Procedure Detail ID"
},
        "GTM_PROCEDURE_DETAIL_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Procedure Detail Name"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Procedure Detail Description"
},
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Procedure Detail Code"
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
          "info": "declaration  type profile gid"
}
      },
      "fk_tables": [
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_LINE"
]
    }
  }
};