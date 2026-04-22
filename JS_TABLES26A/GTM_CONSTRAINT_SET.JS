// GTM_CONSTRAINT_SET.js

window.GTM_CONSTRAINT_SET = {
  "tables": {
    "GTM_CONSTRAINT_SET": {
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
        "GTM_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM_CONSTRAINT_SET_TYPE_GID contains the unique identifier for the Constraint Set"
},
        "GTM_CONSTRAINT_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM_CONSTRAINT_SET_TYPE_XID contains the unique external identifier for the Constraint Set"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description of the Constraint Set"
},
        "GTM_CONSTRAINT_SET_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONSTRAINT_SET_TYPE",
          "info": "Indicates object type on which the Constraints within the Constraint Set will be defined."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
}
      },
      "fk_tables": [
        "EMISSION_RULE",
        "GTM_CONSTRAINT",
        "GTM_CRULE_ITEM_STR_RESTRICTION",
        "GTM_LICENSE_CODE_OPTION",
        "GTM_RPS_PROFILE_PREF_CSET",
        "GTM_TIP_RULE",
        "GTM_TIP_RULE_PSR",
        "INVOICE",
        "INVOICE_SPLIT_RULE",
        "LINE_APPROVE_TOLERANCE"
]
    }
  }
};