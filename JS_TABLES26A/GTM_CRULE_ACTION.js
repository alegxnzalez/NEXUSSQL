// GTM_CRULE_ACTION.js

window.GTM_CRULE_ACTION = {
  "tables": {
    "GTM_CRULE_ACTION": {
      "description": "This table containes all the actions that are executed if a compliance rule is passed.",
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
        "GTM_CRULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "Compliance rule gid."
},
        "GTM_CR_ACTION_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CRULE_ACTION_DEF",
          "info": "Action definition gid."
},
        "PARAMETER_XML": {
          "type": "CLOB",
          "nullable": true,
          "info": "Parameters for the action."
},
        "SEQUENCE_NUMBER": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for maintaining uniqueness."
}
      },
      "fk_tables": []
    }
  }
};