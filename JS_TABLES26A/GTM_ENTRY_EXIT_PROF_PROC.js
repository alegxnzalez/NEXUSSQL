// GTM_ENTRY_EXIT_PROF_PROC.js

window.GTM_ENTRY_EXIT_PROF_PROC = {
  "tables": {
    "GTM_ENTRY_EXIT_PROF_PROC": {
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
        "GTM_ENTRY_EXIT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_ENTRY_EXIT_PROFILE",
          "info": "Entry Exit Profile ID"
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number"
},
        "GTM_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROCEDURE",
          "info": "Procedure ID"
}
      },
      "fk_tables": []
    }
  }
};